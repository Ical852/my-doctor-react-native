import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Chatting, ChooseDoctor, Doctor, DoctorProfile, GetStarted, Hospitals, Login, Messages, Register, Splash, UpdateProfile, UploadPhoto, UserProfile } from '../pages';
import { BottomNavigator } from '../components';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () => {
    return (
        <Tab.Navigator
            tabBar={props => <BottomNavigator {...props}/>}
            initialRouteName='Doctor'
            screenOptions={{ headerShown : false }}>
            <Tab.Screen name="Doctor" component={Doctor}/>
            <Tab.Screen name="Messages" component={Messages}/>
            <Tab.Screen name="Hospitals" component={Hospitals} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return  (
        <Stack.Navigator 
            initialRouteName='Splash' 
            screenOptions={{ headerShown : false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
            <Stack.Screen name="MainApp" component={MainApp} />
            <Stack.Screen name="ChooseDoctor" component={ChooseDoctor} />
            <Stack.Screen name="Chatting" component={Chatting} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
            <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
        </Stack.Navigator>
    )
}

export default Router