import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import { ILGetStarted, ILLogo } from '../../assets';
import {Button, Gap} from '../../components';
import { colors, fonts } from '../../utils';

const GetStarted = ({navigation}) => {
    const stateGlobal = useSelector(state => state)
    return (
        <ImageBackground
            source={ILGetStarted}
            style={styles.page}>
            <View style={{ width : 236 }}>
                <ILLogo/>
                <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Button type={'primary'} title={'Get Started'} onPress={() => navigation.navigate('Register')}/>
                <Gap heigth={16}/>
                <Button type={'secondary'} title={'Sign In'} onPress={() => navigation.navigate('Login')}/>
            </View>
        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    page : {
        padding: 40,
        justifyContent : 'space-between',
        flex: 1,
        backgroundColor : colors.white
    },
    title : {
        fontSize : 28,
        color : colors.white,
        marginTop : 91,
        fontFamily : fonts.primary[600]
    }
})