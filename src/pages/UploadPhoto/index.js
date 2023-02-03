import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { colors, fonts, showError, showSuccess, storeData } from '../../utils'
import { launchImageLibrary } from 'react-native-image-picker';
import {Fire} from '../../config'

const UploadPhoto = ({navigation, route}) => {
    const {fullName, proffesion, uid} = route.params
    const [photoForDB, setPhotoForDB] = useState('')
    const [hasPhoto, setHasPhoto] = useState(false)
    const [photo, setPhoto] = useState(ILNullPhoto)
    const getImage = () => {
        launchImageLibrary(
            {includeBase64 : true, quality : 0.5, maxWidth : 200, maxHeight : 200},
            response => {
            if (response.didCancel) {
                showError('oops, sepertinya anda tidak memilih foto')
            } else {
                const source = {uri : response.assets[0].uri}
                const photoForDB = `data:${response.assets[0].type};base64, ${response.assets[0].base64}`
                setPhotoForDB(photoForDB)
                setPhoto(source)
                setHasPhoto(true)
            }
        })
    }

    const uploadAndContinue = () => {
        Fire
            .database()
            .ref('users/' + uid + '/')
            .update({photo: photoForDB})
        const data = route.params
        data.photo = photoForDB
        storeData('user', data)
        showSuccess('upload photo success')
        setTimeout(() => {
            navigation.replace('MainApp')
        }, 800);
    }

    return (
        <View style={styles.page}>
            <Header title={'Upload Photo'} onPress={() => navigation.goBack()}/>
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWrapper} onPress={() => getImage()}>
                        <Image source={photo} style={styles.avatar}/>
                        {hasPhoto 
                            ? <IconRemovePhoto style={styles.addPhoto}/> 
                            : <IconAddPhoto style={styles.addPhoto}/>
                        }
                    </TouchableOpacity>
                    <Gap heigth={26} />
                    <Text style={styles.name}>{fullName}</Text>
                    <Gap heigth={4}/>
                    <Text style={styles.proffesion}>{proffesion}</Text>
                </View>
                <View>
                    <Button
                        disable={!hasPhoto}
                        title="Upload and Continue" 
                        onPress={() => uploadAndContinue()}/>
                    <Gap heigth={30}/>
                    <Link title={"Skip for this"} align={'center'} size={16} onPress={() => navigation.replace('MainApp')}/>
                </View>
            </View>
            
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    content: {
        paddingHorizontal : 40,
        flex : 1,
        justifyContent : 'space-between',
        paddingBottom : 64,
    },
    profile : {
        alignItems : 'center',
        flex: 1,
        justifyContent : 'center'
    },
    avatar : {
        height : 110,
        width : 110,
        borderRadius : 110/2
    },
    avatarWrapper : {
        height : 130,
        width : 130,
        borderColor : colors.border,
        borderWidth : 1,
        borderRadius : 130/2,
        alignItems : 'center',
        justifyContent : 'center'
    },
    addPhoto : {
        position : 'absolute',
        bottom: 8,
        right: 6,
    },
    name : {
        fontSize : 24,
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
        textAlign : 'center'
    },
    proffesion : {
        fontFamily : fonts.primary.normal,
        fontSize : 18,
        textAlign : 'center',
        color : colors.text.secondary
    }
})
