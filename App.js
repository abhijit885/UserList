import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image, useWindowDimensions, StyleSheet
} from 'react-native';
import { addUser, login, logout, selectUser } from './store/userSlice';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import RegisterPage from './pages/RegisterScreen';
import LoginPage from './pages/LoginScreen';
import DashboardPage from './pages/DashboardScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import LottieView from 'lottie-react-native';

const Stack = createStackNavigator();

const SplashScreen = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
      <LottieView
        source={require('./assets/loading.json')}
        autoPlay
        loop
      />
    </View>
  )
}

function AuthStack() {

  return (
    <Stack.Navigator initialRouteName={'LoginPage'}>
      <Stack.Screen
        name="RegisterPage"
        component={RegisterPage}
        options={{
          headerShown: false,
          swipeEnabled: false,
          headerLeft: null,
        }} />
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack() {

  return (
    <Stack.Navigator initialRouteName={'DashboardPage'}>

      <Stack.Screen
        options={{

          headerStyle: {
            backgroundColor: '#4cb04f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          title: 'Dashboard',
        }}
        name="DashboardPage"
        component={DashboardPage}
      />
    </Stack.Navigator>
  );
}


function App() {

  const dispatch = useDispatch();

  const [initializing, setInitializing] = React.useState(true);

  const { user } = useSelector(state => state);

  const authenticate = user?.email


  React.useEffect(() => {
    let isSubscribe = true;

    if (isSubscribe) {
      const getUser = async () => {
        await AsyncStorage.getItem('userKey').then((res) => {
          if (res != null) {
            dispatch(addUser(JSON.parse(res)));
            setTimeout(() => {
              if (initializing) setInitializing(false);
            }, 800)
          }
          else setInitializing(false);
        })
      }
      getUser()
    }

    return () => {
      isSubscribe = false;
    }
  }, []);



  if (initializing) return <SplashScreen />;

  return (
    <NavigationContainer>
      {!authenticate ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
}

export default App;