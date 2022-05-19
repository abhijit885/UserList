import * as React from 'react';
import {
    Button,
    View,
    SafeAreaView, StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput, Text } from 'react-native-paper';

const SecondPage = ({ navigation, route }) => {
    const [text, setText] = React.useState("");
    const navigateTodayLessonScreen = props =>
        navigation.navigate('ThirdPage');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ padding: 16 }}>
                <View style={{ alignItems: 'center', marginVertical: 15 }}><Text style={{ fontSize: 20, fontWeight: 'bold', color: '#a3d084' }}>
                    Enter Employee Details
                </Text></View>
                <View style={styles.inputContainer}>
                    <TextInput
                        label="First Name"
                        value={text}
                        onChangeText={text => setText(text)}
                        style={styles.textInputLabel}
                    />
                    <TextInput
                        label="Last Name"
                        value={text}
                        onChangeText={text => setText(text)}
                        style={styles.textInputLabel}

                    />
                    <TextInput
                        label="Job Title"
                        value={text}
                        onChangeText={text => setText(text)}
                        style={styles.textInputLabel}
                    />
                    <TextInput
                        label="Salary"
                        value={text}
                        onChangeText={text => setText(text)}
                        style={styles.textInputLabel}
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={navigateTodayLessonScreen}
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