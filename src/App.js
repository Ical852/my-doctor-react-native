import { StyleSheet, YellowBox } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import FlashMessage from "react-native-flash-message";
import { Loading } from './components';
import {Provider, useSelector} from 'react-redux'
import store from './redux/store';

const MainApp = () => {
  const stateGlobal = useSelector(state => state)
  YellowBox.ignoreWarnings(['Using an unspecified index', 'YellowBox', 'AsyncStorage', `Can't perform a React state`])
  return (
    <>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
      <FlashMessage position={"top"} />
      {stateGlobal.loading && <Loading/>}
    </>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <MainApp/>
    </Provider>
  )
}

export default App;

const styles = StyleSheet.create({})