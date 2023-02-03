import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILNullPhoto } from '../../assets'
import {Gap, Header, List, Profile} from '../../components'
import { colors, getData, showError, showSuccess } from '../../utils'
import {Fire} from '../../config'

const UserProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        fullName : '',
        proffesion : '',
        photo : ILNullPhoto
    })
    useEffect(() => {
        getData('user').then(res => {
            const data = res
            data.photo = {uri : res.photo}
            setProfile(res)
        })
    }, [])

    const signOut = () => {
        Fire.auth().signOut()
        .then(() => {
            showSuccess('sign out success')
            navigation.replace('GetStarted')
        })
        .catch(err => {
            showError(err.message)
        })
    }

    return (
        <View style={styles.page}>
            <Header title={"Profile"} onPress={() => navigation.goBack()}/>
            <Gap heigth={10}/>
            {profile.fullName.length > 0 && <Profile name={profile.fullName} desc={profile.proffesion} photo={profile.photo}/>}            
            <Gap heigth={30}/>
            <List name={"Edit Profile"} desc={"Last Update Yesterday"} type={"next"} icon={"edit-profile"} onPress={() => navigation.navigate('UpdateProfile')}/>
            <List name={"Language"} desc={"Available 12 languages"} type={"next"} icon={"language"}/>
            <List name={"Give Us Rate"} desc={"On Google Play Store"} type={"next"} icon={"rate"}/>
            <List name={"Sign Out"} desc={"Read our guidelines"} type={"next"} icon={"help"} onPress={() => signOut()}/>
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white,
        flex: 1,
    }
})