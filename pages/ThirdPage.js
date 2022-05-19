import * as React from 'react';
import {
    Button,
    View,
    Text,
    SafeAreaView, StyleSheet
} from 'react-native';
import UserCard from '../Components/UserCard'
import Icon from 'react-native-vector-icons/Feather';
import { FAB } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const ThirdPage = ({ navigation, route }) => {
    const navigateTodayLessonScreen = props =>
        navigation.navigate('SecondPage');
    const listData = [
        {
            id: 1,
            title: "careful",
            subtitle: 'manager',
            fevorite: 'true'
        },
        {
            id: 2,
            title: "careful",
            subtitle: 'manager',
            fevorite: 'true'
        },
        {
            id: 3,
            title: "careful",
            subtitle: 'manager',
            fevorite: 'true'
        },
        {
            id: 4,
            title: "careful",
            subtitle: 'manager',
            fevorite: 'true'
        },
        {
            id: 5,
            title: "careful",
            subtitle: 'manager',
            fevorite: 'true'
        },
        {
            id: 6,
            title: "careful",
            subtitle: 'manager',
            fevorite: 'true'
        },
        {
            id: 7,
            title: "careful",
            subtitle: 'manager',
            fevorite: 'true'
        },
        {
            id: 8,
            title: "careful",
            subtitle: 'manager',
            fevorite: 'true'
        },
    ];
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <ScrollView>
                {
                    listData.map((item) => {
                        return (
                            <UserCard
                                title={item.title}
                                subtitle={item.subtitle}
                            //left={}
                            //right={}
                            />
                        );
                    })
                }
            </ScrollView>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FAB
                    style={styles.fab}
                    large
                    icon="plus"
                    onPress={navigateTodayLessonScreen}
                />
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

export default ThirdPage;