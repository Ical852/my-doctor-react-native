import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import {ILLogo} from '../../assets'
import { Link, Input, Button, Gap } from '../../components'
import { colors, fonts, showError, showSuccess, storeData, useForm } from '../../utils'
import {Fire} from '../../config'
import { useDispatch } from 'react-redux'

const Login = ({navigation}) => {
    const [form, setForm] = useForm({
        email : '',
        password : ''
    })
    const dispatch = useDispatch()

    const login = () => {
        dispatch({type : 'SET_LOADING', value : true})
        Fire.auth().signInWithEmailAndPassword(form.email, form.password)
            .then(res => {
                showSuccess('Sign In Success')
                dispatch({type : 'SET_LOADING', value : false})
                setForm('reset')
                Fire.database().ref(`users/${res.user.uid}/`).once('value').then(resDB => {
                    if (resDB.val()) {
                        storeData('user' ,resDB.val())
                        setTimeout(() => {
                            navigation.replace('MainApp')
                        }, 800);
                    }
                })
            })
            .catch(err => {
                showError(err.message)
                dispatch({type : 'SET_LOADING', value : false})
            })
    }

    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Gap heigth={40}/>
                <ILLogo/>
                <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
                <Input label={'Email Address'} value={form.email} onChangeText={(value) => setForm('email', value)}/>
                <Gap heigth={24}/>
                <Input label={'Password'} value={form.password} onChangeText={(value) => setForm('password', value)} secureTextEntry/>
                <Gap heigth={10} />
                <Link title={'Forgot My Password'} size={12}/>
                <Gap heigth={40}/>
                <Button title={'Sign In'} type={'primary'} onPress={() => login()}/>
                <Gap heigth={30}/>
                <Link title={'Create New Account'} size={16} align={'center'} onPress={() => navigation.navigate('Register')}/>
            </ScrollView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page : {
        paddingHorizontal: 40,
        flex: 1,
        backgroundColor : colors.white
    },
    text : {
        marginTop : 40,
        fontFamily : fonts.primary[600],
        fontSize : 20,
        color: colors.text.primary,
        marginBottom : 40,
        maxWidth : 153
    }
})