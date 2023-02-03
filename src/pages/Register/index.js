import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input } from '../../components'
import { colors, getData, showError, showSuccess, storeData, useForm } from '../../utils'
import {Fire} from '../../config'
import { useDispatch } from 'react-redux';

const Register = ({navigation}) => {
    const [form, setForm] = useForm({
        fullName : '',
        proffesion : '',
        email : '',
        password : ''
    })
    const dispatch = useDispatch()

    const onContinue = () => {
        dispatch({type : 'SET_LOADING', value : true})
        Fire.auth()
            .createUserWithEmailAndPassword(form.email, form.password)
            .then(success => {
                dispatch({type : 'SET_LOADING', value : false})
                setForm('reset')
                const data = {
                    fullName : form.fullName,
                    proffesion : form.proffesion,
                    email : form.email,
                    uid : success.user.uid
                }
                Fire
                    .database()
                    .ref('users/' +success.user.uid+ '/')
                    .set(data)
                storeData('user', data)
                showSuccess('Register Success')
                setTimeout(() => {
                    navigation.navigate('UploadPhoto', data)
                }, 800);
            })
            .catch((error) => {
                dispatch({type : 'SET_LOADING', value : false})
                showError(error.message)
            })
    }

    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} title={'Daftar Akun'}/>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Input label={"Full Name"} onChangeText={value => setForm('fullName', value)} value={form.fullName}/>
                    <Gap heigth={24}/>
                    <Input label={"Pekerjaan"} onChangeText={value => setForm('proffesion', value)} value={form.proffesion}/>
                    <Gap heigth={24}/>
                    <Input label={"Email Address"} onChangeText={value => setForm('email' ,value)} value={form.email}/>
                    <Gap heigth={24}/>
                    <Input label={"Password"} onChangeText={value => setForm('password' ,value)} value={form.password} secureTextEntry/>
                    <Gap heigth={40}/>
                    <Button title={"Continue"} onPress={() => onContinue()} />
                </ScrollView>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white,
        flex: 1,
    },
    content : {
        padding: 40,
        paddingTop : 0,
    }
})