


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
import { Formik } from 'formik';
import { useValidation } from '../hooks/useValidation';
import Icon from 'react-native-vector-icons/Feather';

const LoginScreen = ({ navigation, route }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const signInSchemes = useValidation(['email', 'password']);
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const navigateToRegisterPage = () =>
        navigation.navigate('RegisterPage');

    const dispatch = useDispatch();

    const handleLogin = (params) => {

        const { email, password } = params;

        auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res)
                const { displayName, email, uid } = res?.user
                console.log('logged-in successfully!');
                dispatch(addUser({ uid, displayName, email }));
            })
            .catch(error => console.log(error))

        console.log('hi', params)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1, paddingHorizontal: 15, justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', marginVertical: 15 }}><Text style={{ fontSize: 25, fontWeight: 'bold', color: '#a3d084' }}>
                    Sign in
                </Text></View>

                {/* <View style={styles.inputContainer}> */}
                <Formik
                    validationSchema={signInSchemes}
                    enableReinitialize={true}
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={values => handleLogin(values)}>
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                    }) => (
                        <>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    name="email"
                                    label="Email"
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    style={styles.textInputLabel}
                                    activeUnderlineColor={'#75c145'}
                                />
                                {errors.email && touched.email && (
                                    <Text style={{ color: 'red', fontSize: 15 }}>{errors.email}</Text>
                                )}
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    name="password"
                                    label="Password"
                                    value={values.password}
                                    secureTextEntry={secureTextEntry}
                                    style={styles.textInputLabel}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    activeUnderlineColor={'#75c145'}
                                    right={
                                        <TextInput.Icon
                                            onPress={() => setSecureTextEntry(!secureTextEntry)}
                                            name={() => (
                                                <Icon
                                                    name={secureTextEntry ? 'eye' : 'eye-off'}
                                                    size={20}
                                                    color={'#000000'}
                                                />
                                            )}
                                        />
                                    }
                                />
                                {errors.password && touched.password && (
                                    <Text style={{ color: 'red', fontSize: 15 }}>{errors.password}</Text>
                                )}
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity
                                    onPress={handleSubmit}
                                    style={{ alignItems: 'center', justifyContent: 'center', marginTop: 60, height: 50, width: 200, backgroundColor: '#75c145' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>
                                        Sign in
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        </>
                    )}
                </Formik>
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
        marginVertical: 10,
        backgroundColor: "#fff"
    },
});
export default LoginScreen;