import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Login from './screens/Login'
import Home from './screens/Home/Home'
import Menu from './screens/Home/Menu'
import QRCode from './screens/Home/QRCode'

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

const StackHomeSreen = () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="QRCode" component={QRCode} />
    </Stack.Navigator>
)

const TabHomeScreen = () => (
    <BottomTab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <BottomTab.Screen name="Home" component={StackHomeSreen} />
        <BottomTab.Screen name="Menu" component={Menu} />
    </BottomTab.Navigator>
)


export default Root = () => (
    <NavigationContainer>
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="HomeTab" component={TabHomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.border}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                        key={index}
                    >
                        <View style={{ backgroundColor: '#fff', height: 60, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={getImg(index, isFocused)} style={styles.img} />
                            <Text style={{ color: isFocused ? '#673ab7' : '#222', textAlign: 'center' }}>
                                {label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

function getImg(index, isFocused) {
    if (index === 0) {
        return isFocused ? require('../assets/home1.png') : require('../assets/home2.png')
    } else if (index === 1) {
        return isFocused ? require('../assets/menu1.png') : require('../assets/menu2.png')
    }
    return
}

const styles = StyleSheet.create({
    border: {
        shadowColor: 'black', shadowOffset: { width: 0, height: 5 },
        borderTopWidth: 3, borderColor: '#ddd', borderBottomWidth: 0,
        flexDirection: 'row'
    },
    img: {
        width: 25, height: 25
    }
})