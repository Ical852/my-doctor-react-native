import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ILLogo } from '../../assets';
import { Fire } from '../../config';
import { colors, fonts } from '../../utils'

const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp')
        } else {
          navigation.replace('GetStarted')
        }
      }, 3000);
    })
    return () => unsubscribe()
  }, [navigation])
  return (
    <View style={styles.view}>
      <ILLogo/>
      <Text style={styles.text}>My Doctor</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  text: {
    fontSize: 20,
    color: '#112340',
    marginTop: 20,
    fontFamily : fonts.primary[600]
  }
})