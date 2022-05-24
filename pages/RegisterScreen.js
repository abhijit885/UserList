

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
import { Formik } from 'formik';
import { useValidation } from '../hooks/useValidation';
import Icon from 'react-native-vector-icons/Feather';

const RegisterScreen = ({ navigation, route }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("")
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const signInSchemes = useValidation(['name', 'email', 'password']);

    const navigateToLoginPage = () =>
        navigation.navigate('LoginPage');

    const dispatch = useDispatch();


    const registerUser = (params) => {
        const { name, email, password } = params;

        auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                res.user.updateProfile({
                    displayName: name
                })
                console.log('User registered successfully!')
                navigation.navigate('LoginPage')
            }).catch(error => console.log("error", error))
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1, paddingHorizontal: 15, justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', marginVertical: 15 }}><Text style={{ fontSize: 25, fontWeight: 'bold', color: '#a3d084' }}>
                    Register
                </Text></View>
                <Formik
                    validationSchema={signInSchemes}
                    enableReinitialize={true}
                    initialValues={{
                        name: '',
                        email: '',
                        password: ''
                    }}
                    onSubmit={values => registerUser(values)}>
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
                                    label="Name"
                                    name="name"
                                    value={values.name}
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    style={styles.textInputLabel}
                                    activeUnderlineColor={'#75c145'}
                                />
                                {errors.name && touched.name && (
                                    <Text style={{ color: 'red', fontSize: 15 }}>{errors.name}</Text>
                                )}
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    label="Email"
                                    name="email"
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
                                    label="Password"
                                    name="password"
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
                                        Sign up
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                </Formik>
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
    textInputLabel: {
        marginVertical: 10,
        backgroundColor: "#fff"
    },
});
export default RegisterScreen;