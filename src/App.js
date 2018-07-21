import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MapView from './components/Map'

class App extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <MapView />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

export default App;
