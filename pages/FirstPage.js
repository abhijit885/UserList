
import * as React from 'react';
import {
    Button,
    View,
    Text,
    SafeAreaView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FirstPage = ({ navigation, route }) => {
    const navigateTodayLessonScreen = props =>
        navigation.navigate('SecondPage');
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#4fae51' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                    onPress={navigateTodayLessonScreen}
                    style={{ height: 50, width: 200, backgroundColor: '#398d3d', alignItems: 'center', justifyContent: 'center' }}
                >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>ADD EMPLOYEE</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default FirstPage;