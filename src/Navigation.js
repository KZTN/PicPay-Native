import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Pay from './pages/Pay';
import PayButton from './components/PayButton';
const Tab = createBottomTabNavigator();
const icons = {
  Home: {name: 'home'},
  Wallet: {name: 'creditcard'},
  Notifications: {name: 'bells'},
  Settings: {name: 'setting'},
};
export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, size, focused}) => {
          if (route.name === 'Pay') {
            return (
              <PayButton
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            );
          }
          const {name} = icons[route.name];
          return <Icon name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Início',
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: 'Carteira',
        }}
      />
      <Tab.Screen
        name="Pay"
        component={Pay}
        options={{
          title: '',
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Wallet}
        options={{
          title: 'Notificações',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Wallet}
        options={{
          title: 'Ajustes',
        }}
      />
    </Tab.Navigator>
  );
}
