import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { logout } from '../store/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DashboardScreen = ({ navigation, route }) => {


    const dispatch = useDispatch()
    const { displayName, email } = useSelector(state => state.user);



    const handleLogout = () => {
        dispatch(logout());
        AsyncStorage.removeItem('userKey')
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 35, padding: 15, fontWeight: 'bold', color: '#75c145', textTransform: 'capitalize' }} >{displayName && `Welcome ${displayName}`}</Text>
                <Text style={{ fontSize: 15, textDecorationLine: 'underline', textTransform: 'lowercase', color: '#000' }} >{email}</Text>
                <TouchableOpacity
                    onPress={handleLogout}
                    style={{ alignItems: 'center', justifyContent: 'center', marginTop: 60, height: 50, width: 200, backgroundColor: '#75c145' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,

    },
})

export default DashboardScreen;