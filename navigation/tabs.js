import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Svg,{Path} from 'react-native-svg';

import {Home} from '../screens/';
import {icons, COLORS} from '../constants/';

const Tab = createBottomTabNavigator();
//Functional Component TabBarCustomButton
const TabBarCustomButton = ({accessibilityState,children,onPress})=>{
  var isSelected = accessibilityState.isSelected;

  if(isSelected){
    return(
      <View>
        
      </View>
    )
  }else{
    return(
      <View></View>
    )
  }
}


const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.cutlery}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Like"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.like}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.user}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
