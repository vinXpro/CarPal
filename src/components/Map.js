import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import parkingAddress from '../assets/parking_address';
import MapMarker from './MapMarker';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.00922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Map extends React.PureComponent {
    state = {
        region: {
            latitude: 1.2655144,
            longitude: 103.8200451,
        },
        myLocation: {
            latitude: 1.2655144,
            longitude: 103.8200451,
        }
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
        const { region, myLocation } = this.state;
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
                    coordinate={myLocation}
                    anchor={{ x: 0.5, y: 0.5 }}
                >
                    <Image source={require('../assets/images/car.png')} style={{ width: 40, height: 40, resizeMode: 'stretch' }} />
                </MapView.Marker>
                {
                    parkingAddress.map(i => <MapMarker {...i} />)
                }
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Map;
