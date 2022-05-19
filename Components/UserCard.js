import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import {
    Button,
    View,
    Text,
    SafeAreaView, StyleSheet, TouchableWithoutFeedback
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { updateEmployee } from '../store/userSlice';
import { useDispatch } from 'react-redux';
const UserCard = (props) => {
    const [passwordVisible, setPasswordVisible] = React.useState(true);
    const dispatch = useDispatch()
    return (
        <View style={styles.mainCardView}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.subCardView}>
                    <Text style={{
                        fontSize: 23,
                        color: '#000000',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}>{props?.firstName?.slice(0, 2)}</Text>
                </View>
                <View style={{ marginLeft: 12 }}>
                    <Text
                        style={{
                            fontSize: 14,
                            color: '#000000',
                            fontWeight: 'bold',
                            textTransform: 'capitalize',
                        }}>
                        {props.firstName} {props.lastName}
                    </Text>
                    <View
                        style={{
                            marginTop: 4,
                            borderWidth: 0,
                            width: '85%',
                        }}>
                        <Text
                            style={{
                                color: '#000000',
                                fontSize: 12,
                            }}>
                            {props.jobTitle}
                        </Text>
                    </View>
                    <View
                        style={{
                            marginTop: 4,
                            borderWidth: 0,
                            width: '85%',
                        }}>
                        <Text
                            style={{
                                color: '#000000',
                                fontSize: 12,
                            }}>
                            {props.salary}
                        </Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    height: 45,
                    borderWidth: 0,
                    width: 45,
                    marginLeft: -26,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                }}>
                <TouchableOpacity
                    onPress={() => dispatch(updateEmployee(
                        {
                            id: props?.id,
                            fav: !props.fav
                        }
                    ))}
                >
                    <Icon name={!props?.fav ? "staro" : "star"} size={25} color={!props?.fav ? "#000000" : "yellow"} />
                </TouchableOpacity>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    mainCardView: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
    },
    subCardView: {
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: '#4cb04f',
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',

    },
});
export default UserCard;