


import * as React from 'react';
import {
    Button,
    View,
    SafeAreaView, StyleSheet, Keyboard
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput, Text } from 'react-native-paper';
import { addEmployee, addUser } from '../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation, route }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigateToRegisterPage = () =>
        navigation.navigate('RegisterPage');

    const dispatch = useDispatch();

    const handleLogin = () => {
        if (email === '' && password === '') {
            alert('Please fill up your credential')
        } else {
            auth()
                .signInWithEmailAndPassword(email, password)
                .then((res) => {
                    console.log(res)

                    const { displayName, email, uid } = res?.user
                    console.log('logged-in successfully!');
                    dispatch(addUser({ uid, displayName, email }));
                    setEmail('')
                    setPassword('')
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingHorizontal: 15, justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', marginVertical: 15 }}><Text style={{ fontSize: 20, fontWeight: 'bold', color: '#a3d084' }}>
                    Sign in
                </Text></View>
                <View style={styles.inputContainer}>
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.textInputLabel}
                        activeUnderlineColor={'#75c145'}
                    />
                    <TextInput
                        label="Password"
                        value={password}
                        secureTextEntry
                        style={styles.textInputLabel}
                        onChangeText={setPassword}
                        activeUnderlineColor={'#75c145'}
                    />

                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={{ alignItems: 'center', justifyContent: 'center', marginTop: 60, height: 50, width: 200, backgroundColor: '#75c145' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>
                            Sign in
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 15, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 15 }}>Not register yet ?</Text>
                    <TouchableOpacity
                        onPress={navigateToRegisterPage}
                        style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#75c145', textDecorationLine: 'underline' }}>
                            Sign up
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    inputContainer: {
    },
    textInputLabel: {
        marginVertical: 10
    },
});
export default LoginScreen;