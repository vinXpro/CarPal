import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Home extends React.PureComponent {
    static navigationOptions = ({
        title: 'CarPal'
    })
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('GasStation')} style={[styles.item]}>
                        <Image source={require('../assets/images/gas-station.png')} style={{ width: 50, height: 50, resizeMode: 'stretch' }} />
                        <Text style={{ fontSize: 16, marginTop: 15 }}>Gas Station</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CarRepair')} style={[styles.item]}>
                        <Image source={require('../assets/images/repair.png')} style={{ width: 50, height: 50, resizeMode: 'stretch' }} />
                        <Text style={{ fontSize: 16, marginTop: 15 }}>Car Repair</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Parking')} style={[styles.item]}>
                        <Image source={require('../assets/images/car-parking.png')} style={{ width: 50, height: 50, resizeMode: 'stretch' }} />
                        <Text style={{ fontSize: 16, marginTop: 15 }}>Car Parking</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CarWash')} style={[styles.item]}>
                        <Image source={require('../assets/images/car-wash.png')} style={{ width: 50, height: 50, resizeMode: 'stretch' }} />
                        <Text style={{ fontSize: 16, marginTop: 15 }}>Car Wash</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    item: {
        flex: 1,
        margin: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#DEE4F1',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    }
});

export default Home;
