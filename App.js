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

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
  const width = useWindowDimensions().width * 0.3;
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.menuContainer}>
        <View
          style={[
            styles.menuItemsCard,
            { backgroundColor: '#fff2df', width: width, height: width },
          ]}>
          <>
            <View
              style={[styles.circleContainer, { backgroundColor: '#FFC56F' }]}>
              {/* <Feather travel name="briefcase" size={25} color="#fbae41" /> */}
              <DrawerItem
                label="Screen1"
                labelStyle={{ color: '#fbae41', fontSize: 10 }}
                onPress={() => {
                  props.navigation.navigate('Screen1');
                }}
              />
            </View>
          </>
          <DrawerItem
            style={{
              position: 'absolute',
              left: 0,
              width: width,
              height: width,
            }}
            label="Screen2"
            labelStyle={{ color: '#609806' }}
            onPress={() => {
              props.navigation.navigate('Screen1');
            }}
          />
        </View>
        <View
          style={[
            styles.menuItemsCard,
            { backgroundColor: '#EFFFD5', width: width, height: width },
          ]}>
          <View
            style={[styles.circleContainer, { backgroundColor: '#b5ff39' }]}>
            {/* <Feather Medical name="briefcase" size={25} color="#609806" /> */}
          </View>

          <DrawerItem
            style={{
              position: 'absolute',
              left: 0,
              width: width,
              height: width,
            }}
            label="Screen2"
            labelStyle={{ color: '#609806' }}
            onPress={() => {
              props.navigation.navigate('StackNav');
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="FirstPage" options={{
        headerShown: false, // change this to `false`
      }} component={firstScreenStack} />
      <Drawer.Screen name="SecondPage" options={{
        headerShown: false, // change this to `false`
      }} component={secondScreenStack} />
      <Drawer.Screen name="ThirdPage" options={{
        headerShown: false, // change this to `false`
      }} component={thirdScreenStack} />
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

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        // options={{
        //   title: 'First Page', //Set Header Title
        //   headerLeft: () =>
        //     <NavigationDrawerStructure
        //       navigationProps={navigation}
        //     />,
        //   headerStyle: {
        //     backgroundColor: '#f4511e', //Set Header color
        //   },
        //   headerTintColor: '#fff', //Set Header text color
        //   headerTitleStyle: {
        //     fontWeight: 'bold', //Set Header text style
        //   },
        // }}
        options={{
          headerShown: false, // change this to `false`
          swipeEnabled: false,
          headerLeft: null,
        }} />

    </Stack.Navigator>
  );
}
function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      component={SecondPage}
      // screenOptions={{
      //   headerLeft: () =>
      //     <NavigationDrawerStructure
      //       navigationProps={navigation}
      //     />,
      //   headerRight: () =>
      //     <NavigationDrawerStructure
      //       navigationProps={navigation}
      //     />,
      //   headerStyle: {
      //     backgroundColor: '#4cb04f', //Set Header color
      //   },
      //   headerTintColor: '#fff', //Set Header text color
      //   headerTitleStyle: {
      //     fontWeight: 'bold', //Set Header text style
      //   }
      // }}
      options={{
        headerShown: false, // change this to `false`
      }}

    >
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          headerShown: false, // change this to `false`
        }}
      />
      {/* <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Third Page', //Set Header Title
        }} /> */}
    </Stack.Navigator>
  );
}
function thirdScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="thirdPage"
      screenOptions={{
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
        }
      }}>
      {/* <Stack.Screen
        name="ThirdPage"
        component={SecondPage}
        options={{
          title: 'Second Page', //Set Header Title

        }} /> */}
      <Stack.Screen
        name="Inbox"
        component={ThirdPage}
        options={{
          title: 'Third Page', //Set Header Title
        }} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'First page Option' }}
          component={firstScreenStack} />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Second page Option' }}
          component={secondScreenStack} />
      </Drawer.Navigator> */}
      <MyDrawer />
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