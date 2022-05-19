import * as React from 'react';
import {
    Button,
    View,
    SafeAreaView, StyleSheet, Keyboard
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput, Text } from 'react-native-paper';
import { addEmployee } from '../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SecondPage = ({ navigation, route }) => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [jobTitle, setJobTitle] = React.useState("");
    const [salary, setSalary] = React.useState("");

    const navigateToDataList = props =>
        navigation.navigate('ThirdPage');
    const dispatch = useDispatch();


    const handleSave = params => {
        //  Keyboard.dismiss();
        if (firstName && lastName && jobTitle && salary) {
            dispatch(addEmployee({
                id: Math.floor(Math.random() * 100000), firstName, lastName, jobTitle, salary, fav: false
            }))
            setFirstName('')
            setLastName('')
            setJobTitle('')
            setSalary('')
        }
        // AsyncStorage.setItem(Data, JSON.stringify(params));
        navigateToDataList()
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ padding: 16 }}>
                <View style={{ alignItems: 'center', marginVertical: 15 }}><Text style={{ fontSize: 20, fontWeight: 'bold', color: '#a3d084' }}>
                    Enter Employee Details
                </Text></View>
                <View style={styles.inputContainer}>
                    <TextInput
                        label="First Name"
                        value={firstName}
                        onChangeText={setFirstName}
                        style={styles.textInputLabel}
                        activeUnderlineColor={'#75c145'}
                    />
                    <TextInput
                        label="Last Name"
                        value={lastName}
                        //onChangeText={text => setText(text)}
                        style={styles.textInputLabel}
                        onChangeText={setLastName}
                        activeUnderlineColor={'#75c145'}
                    />
                    <TextInput
                        label="Job Title"
                        value={jobTitle}
                        //onChangeText={text => setText(text)}
                        style={styles.textInputLabel}
                        onChangeText={setJobTitle}
                        activeUnderlineColor={'#75c145'}
                    />
                    <TextInput
                        label="Salary"
                        value={salary}
                        //onChangeText={text => setText(text)}
                        style={styles.textInputLabel}
                        onChangeText={setSalary}
                        keyboardType='number-pad'
                        activeUnderlineColor={'#75c145'}
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={handleSave}
                        style={{ alignItems: 'center', justifyContent: 'center', marginTop: 60, height: 50, width: 200, backgroundColor: '#75c145' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    inputContainer: {
        //paddingBottom: 2,
    },
    textInputLabel: {
        marginVertical: 10
    },
});
export default SecondPage;