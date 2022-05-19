import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image, useWindowDimensions, StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { addAllEmployee, addEmployee } from './store/userSlice';
import { ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
  const width = useWindowDimensions().width * 0.31;
  const employee = useSelector(state => state.user);

  const favorite = employee.filter(item => item.fav == true)?.length

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.menuContainer}>
        <View
          style={[
            styles.menuItemsCard,
            { backgroundColor: '#EFFFD5', width: width, height: width },
          ]}>
          <View
            style={[styles.circleContainer, { backgroundColor: '#b5ff39', alignItems: 'center', justifyContent: 'center' }]}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{employee?.length}</Text>

          </View>

          <DrawerItem
            style={{
              position: 'absolute',
              left: 0,
              width: width,
              height: width,
            }}
            label="Total Employee"
            labelStyle={{ color: '#609806' }}
          />
        </View>
        <View
          style={[
            styles.menuItemsCard,
            { backgroundColor: '#EFFFD5', width: width, height: width },
          ]}>
          <View
            style={[styles.circleContainer, { backgroundColor: '#b5ff39', alignItems: 'center', justifyContent: 'center' }]}>

            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{favorite}</Text>
          </View>

          <DrawerItem
            style={{
              position: 'absolute',
              left: 0,
              width: width,
              height: width,
            }}
            label="Total Favorite"
            labelStyle={{ color: '#609806' }}
          />
        </View>
      </View>
    </DrawerContentScrollView >
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="firstScreenStack" options={{
        headerShown: false, // change this to `false`
      }} component={FirstScreenStack} />
    </Drawer.Navigator>
  );
}
const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
const NavigationDrawerStructureRight = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity >
        <Icon name='dots-three-vertical' size={25} color='#ffffff' />
      </TouchableOpacity>
    </View>
  );
}

const SplashScreen = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={'big'} color={'green'} />
    </View>
  )
}

function FirstScreenStack({ navigation }) {

  const employee = useSelector(state => state.user);

  return (
    <Stack.Navigator initialRouteName={employee?.length == 0 ? 'FirstPage' : 'ThirdPage'}>
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          headerShown: false,
          swipeEnabled: false,
          headerLeft: null,
        }} />
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerLeft: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          headerRight: () =>
            <NavigationDrawerStructureRight
              navigationProps={navigation}
            />,
          headerStyle: {
            backgroundColor: '#4cb04f', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          title: 'Index',
        }}
        name="ThirdPage"
        component={ThirdPage}
      />
    </Stack.Navigator>
  );
}


function App() {

  const dispatch = useDispatch();
  const [screenRender, setScreenRender] = React.useState(false)

  React.useEffect(() => {
    let isSubscribe = true;

    if (isSubscribe) {
      const getEmployee = async () => {
        await AsyncStorage.getItem('employee').then((res) => {
          if (res != null) {
            console.log(res)
            dispatch(addAllEmployee(JSON.parse(res)));
            setScreenRender(true)
          }
          else setScreenRender(true)
        })
      }
      getEmployee()
    }

    return () => {
      isSubscribe = false;
    }
  }, []);
  return (
    <NavigationContainer>
      {screenRender && <MyDrawer />}
      {!screenRender && <SplashScreen />}
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  menuItemsCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 10,
  },
});
export default App;