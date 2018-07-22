import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './containers/Home'
import GasStation from './containers/GasStation'
import Parking from './containers/Parking'
import CarRepair from './containers/CarRepair'
import CarWash from './containers/CarWash'

const AppStack = createStackNavigator({
    Home: { screen: Home },
    GasStation: { screen: GasStation },
    Parking: { screen: Parking },
    CarRepair: { screen: CarRepair },
    CarWash: { screen: CarWash },
})

class App extends React.PureComponent {
    render() {
        return (
            <AppStack />
        );
    }
}


export default App;
