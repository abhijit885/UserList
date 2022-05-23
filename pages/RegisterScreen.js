

import * as React from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';


const RegisterScreen = ({ navigation, route }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("")

    const navigateToLoginPage = () =>
        navigation.navigate('LoginPage');

    const dispatch = useDispatch();


    const registerUser = () => {
        if (name === '' && email === '' && password === '') {
            alert("please fill the fields")
        } else {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then((res) => {
                    res.user.updateProfile({
                        displayName: name
                    })
                    console.log('User registered successfully!')
                    setEmail('')
                    setPassword('')
                    navigation.navigate('LoginPage')
                }).catch(error => console.log(error))
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingHorizontal: 15, justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', marginVertical: 15 }}><Text style={{ fontSize: 20, fontWeight: 'bold', color: '#a3d084' }}>
                    Register
                </Text></View>
                <View style={styles.inputContainer}>
                    <TextInput
                        label="Name"
                        value={name}
                        onChangeText={setName}
                        style={styles.textInputLabel}
                        activeUnderlineColor={'#75c145'}
                    />
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
                        onPress={registerUser}
                        style={{ alignItems: 'center', justifyContent: 'center', marginTop: 60, height: 50, width: 200, backgroundColor: '#75c145' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 15, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 15 }}>Already registered ?</Text>
                    <TouchableOpacity
                        onPress={navigateToLoginPage}
                        style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#75c145', textDecorationLine: 'underline' }}>
                            Sign in
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
export default RegisterScreen;