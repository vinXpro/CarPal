import React from 'react';
import { Image, View, Text, Dimensions, InteractionManager, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import carWash from '../assets/car_wash';
import WashMarker from '../components/WashMarker';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.00922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class CarWash extends React.PureComponent {
    static navigationOptions = ({
        title: 'Car Wash'
    })
    state = {
        isLoading: true,
        region: {
            latitude: 1.2926961,
            longitude: 103.85700,
        },
        myLocation: {
            latitude: 1.2655144,
            longitude: 103.8200451,
        }
    }

    componentWillMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({ isLoading: false })
        });
    }

    onUserLocationChange = e => {
        const { coordinate } = e.nativeEvent;
        const loc = {
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
        };
        this.setState({ myLocation: loc });
    }

    render() {
        const { isLoading, region, myLocation } = this.state;
        if (isLoading) return null;
        return (
            <MapView
                style={styles.container}
                provider="google"
                region={{
                    ...region,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }}
                customMapStyle={require('../assets/mapSilverStyle.json')}
                loadingEnabled
                followsUserLocation
                showsUserLocation={false}
                showsMyLocationButton={true}
                onUserLocationChange={this.onUserLocationChange}
            >
                <MapView.Marker
                    title={'My Location'}
                    description={''}
                    coordinate={region}
                    anchor={{ x: 0.5, y: 0.5 }}
                >
                    <Image source={require('../assets/images/car.png')} style={{ width: 40, height: 40, resizeMode: 'stretch' }} />
                </MapView.Marker>
                {
                    carWash.map((i, index) => <WashMarker key={index} {...i} />)
                }
                {/* <View style={{ flexDirection: 'row', position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                    <View style={styles.button}>
                        <Text style={{}}>SKIP</Text>
                    </View>
                    <View style={styles.button}>
                        <Text>50m</Text>
                    </View>
                </View> */}
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        flex: 1,
        height: 30,
        // padding: 15,
        borderRadius: 25,
        backgroundColor: '#1EC659',
        margin: 10,
        // alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CarWash;
