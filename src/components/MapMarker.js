import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';


class MapMarker extends React.PureComponent {
    render() {
        const { name, location, price } = this.props;
        return (
            <Marker
                title={name}
                description={price}
                coordinate={location}
                anchor={{ x: 0.5, y: 0.75 }}
            >
                <View style={{ width: 30, height: 40, alignItems: 'center' }}>
                    <View style={[styles.triangle, { transform: [{ rotate: '180deg' }], position: 'absolute', bottom: 0 }]} />
                    <View style={styles.wrapper}>
                        <View style={styles.wrapperSmall}>
                            <Text style={{ fontWeight: 'bold' }}>P</Text>
                        </View>
                    </View>
                </View>
            </Marker>
        );
    }
}

const styles = StyleSheet.create({
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 20,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#6E9BFC',
    },
    wrapper: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#6E9BFC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperSmall: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default MapMarker;
