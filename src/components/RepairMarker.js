import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';


class MapMarker extends React.PureComponent {
    render() {
        const { title, desc, location } = this.props;
        return (
            <Marker
                title={title}
                description={desc}
                coordinate={location}
                anchor={{ x: 0.5, y: 0.75 }}
            >
                <View style={{ width: 30, height: 40, alignItems: 'center' }}>
                    <View style={[styles.triangle, { transform: [{ rotate: '180deg' }], position: 'absolute', bottom: 0 }]} />
                    <View style={styles.wrapper}>
                        <View style={styles.wrapperSmall}>
                            <Text style={{ fontWeight: 'bold' }}>R</Text>
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
        borderBottomColor: 'green',
    },
    wrapper: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'green',
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
