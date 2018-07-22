import React from 'react';
import { Image, Dimensions, InteractionManager, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import gasStations from '../assets/gas_stations';
import GasMarker from '../components/GasMarker';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.00922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class GasStation extends React.PureComponent {
    static navigationOptions = ({
        title: 'Gas Station'
    })
    state = {
        isLoading: true,
        region: {
            latitude: 1.2655144,
            longitude: 103.8181175,
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
                    gasStations.map((i, index) => <GasMarker key={index} {...i} />)
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

export default GasStation;
