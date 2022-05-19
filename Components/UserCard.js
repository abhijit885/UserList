import * as React from 'react';
import { Avatar, Card, IconButton, StyleSheet } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
const UserCard = (props) => (
    <Card.Title
        title={props.title}
        subtitle={props.subtitle}
        left={(props) => <Icon {...props} icon="dots-three-vertical" />}
        //left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
        style={{
            height: 90,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 15,
            shadowColor: '#000',
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
        }}
    />
    // <TouchableWithoutFeedback
    //     onPress={() => {
    //         this.redirectToChatConverstion(item);
    //     }}>
    //     <View style={styles.mainCardView}>
    //         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    //             <View style={styles.subCardView}>
    //                 <Image
    //                     source={Images.logo}
    //                     resizeMode="contain"
    //                     style={{
    //                         borderRadius: 25,
    //                         height: 50,
    //                         width: 50,
    //                     }}
    //                 />
    //             </View>
    //             <View style={{ marginLeft: 12 }}>
    //                 <Text
    //                     style={{
    //                         fontSize: 14,
    //                         color: '#000000',
    //                         fontWeight: 'bold',
    //                         fontFamily: Fonts.nunitoBold,
    //                         textTransform: 'capitalize',
    //                     }}>
    //                     {'itechinsiders'}
    //                 </Text>
    //                 <View
    //                     style={{
    //                         marginTop: 4,
    //                         borderWidth: 0,
    //                         width: '85%',
    //                     }}>
    //                     <Text
    //                         style={{
    //                             color: '#000000',
    //                             fontSize: 12,
    //                         }}>
    //                         {'itechinsiders'}
    //                     </Text>
    //                 </View>
    //             </View>
    //         </View>
    //         <View
    //             style={{
    //                 height: 25,
    //                 backgroundColor: 'pink',
    //                 borderWidth: 0,
    //                 width: 25,
    //                 marginLeft: -26,
    //                 alignItems: 'center',
    //                 justifyContent: 'center',
    //                 borderRadius: 50,
    //             }}>
    //             <Text style={{ color: '#ffffff' }}>
    //                 {item.unread_messages_count}
    //             </Text>
    //         </View>
    //     </View>
    // </TouchableWithoutFeedback>
);

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#ffffff',
//     },
//     mainCardView: {
//         height: 90,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#ffffff',
//         borderRadius: 15,
//         shadowColor: '#000000',
//         shadowOffset: { width: 0, height: 0 },
//         shadowOpacity: 1,
//         shadowRadius: 8,
//         elevation: 8,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingLeft: 16,
//         paddingRight: 14,
//         marginTop: 6,
//         marginBottom: 6,
//         marginLeft: 16,
//         marginRight: 16,
//     },
//     subCardView: {
//         height: 50,
//         width: 50,
//         borderRadius: 25,
//         backgroundColor: 'yellow',
//         borderColor: 'red',
//         borderWidth: 1,
//         borderStyle: 'solid',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
export default UserCard;