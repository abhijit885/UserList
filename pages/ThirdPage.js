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
import { useSelector } from 'react-redux';

const ThirdPage = ({ navigation, route }) => {
    const navigateToSecondPage = props =>
        navigation.navigate('SecondPage');

    const employee = useSelector(state => state.user);

    function compareFirstName(a, b) {
        if (a.firstName < b.firstName) {
            return -1;
        } else if (a.firstName > b.firstName) {
            return 1;
        } else {
            return 0;
        }
    }



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <ScrollView>
                {
                    employee?.slice().sort(compareFirstName).map((item) => {
                        return (
                            <UserCard
                                key={item.id}
                                firstName={item.firstName}
                                lastName={item.lastName}
                                id={item.id}
                                jobTitle={item.jobTitle}
                                salary={item.salary}
                                fav={item.fav}
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
                    onPress={navigateToSecondPage}
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