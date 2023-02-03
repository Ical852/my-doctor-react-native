import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILNullPhoto } from '../../assets'
import {Button, Gap, Header, Input, Profile} from '../../components'
import { colors, getData, showError, showSuccess, storeData } from '../../utils'
import {Fire} from '../../config'
import { launchImageLibrary } from 'react-native-image-picker';

const UpdateProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        fullName : '',
        proffesion : '',
        email : '',
    })

    const [password, setPassword] = useState('')
    const [photo, setPhoto] = useState(ILNullPhoto)
    const [photoForDB, setPhotoForDB] = useState('')

    useEffect(() => {
        getData('user').then(res => {
            setPhoto({uri : res.photo})
            setPhotoForDB(res.photo)
            setProfile(res)
        })
    }, [])

    const update = () => {
        if (password.length > 0) {
            if (password.length < 6) {
                showError('password must be at least 6 character')
            } else {
                updatePassword()
                updateProfileData()
            }
        } else {
            updateProfileData()
        }
    }

    const updatePassword = () => {
        Fire.auth().onAuthStateChanged(user => {
            if (user) {
                user.updatePassword(password).catch(err => {
                    showError(err.message)
                })
            }
        })
    }

    const updateProfileData = () => {
        const data = profile
        data.photo = photoForDB
        Fire.database()
            .ref(`users/${profile.uid}/`)
            .update(data)
            .then(() => {
                storeData('user', data)
                showSuccess('success update profile')
                navigation.replace('MainApp')
            })
            .catch(err => {
                showError(err.message)
            })
    }

    const changeText = (key, value) => {
        setProfile({
            ...profile,
            [key] : value
        })
    }

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
            }
        })
    }
    
    return (
        <View style={styles.page}>
            <Header title={"Update Profile"} onPress={() => navigation.goBack()}/>
            <Gap heigth={10}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile isRemove photo={photo} onPress={() => getImage()}/>
                    <Gap heigth={26}/>
                    <Input label={"Full Name"} value={profile.fullName} onChangeText={value => changeText('fullName', value)}/>
                    <Gap heigth={24}/>
                    <Input label={"Pekerjaan"} value={profile.proffesion} onChangeText={value => changeText('proffesion', value)}/>
                    <Gap heigth={24}/>
                    <Input label={"Email Address"} value={profile.email} disable/>
                    <Gap heigth={24}/>
                    <Input label={"Password"} value={password} onChangeText={value => setPassword(value)} secureTextEntry/>
                    <Gap heigth={40}/>
                    <Button title={"Save Profile"} onPress={() => update()}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white,
        flex: 1,
    },
    content : {
        padding : 40,
        paddingTop : 0
    }
})