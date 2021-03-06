import React from 'react';
import { Image, Dimensions, InteractionManager, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import carRepair from '../assets/car_repair';
import RepairMarker from '../components/RepairMarker';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.00922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class CarRepair extends React.PureComponent {
    static navigationOptions = ({
        title: 'Car Repair'
    })
    state = {
        isLoading: true,
        region: {
            latitude: 1.3329631,
            longitude: 103.8968519,
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
                    carRepair.map((i, index) => <RepairMarker key={index} {...i} />)
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

export default CarRepair;
