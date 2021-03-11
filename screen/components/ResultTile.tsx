import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

import MockData from '../../interface/MockData';

interface Props {
    item: MockData,
    navigation: any
}

export default function ResultTile(props: Props) {
    return (
        <TouchableHighlight onPress={() => {
            console.log('PRESSED!!');
            props.navigation.navigate('Details');
        }} underlayColor="white">
            <View style={styles.tile}>

                <View style={styles.thumbnail}>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                        style={{ width: 64, height: 64 }} />
                </View>
                <View style={styles.content}>
                    <Text>{`${props.item.firstName} ${props.item.lastName}`}</Text>
                    <Text>{props.item.country}</Text>
                    <Text>{props.item.comment}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    tile: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    thumbnail: {
        flex: 1
    },
    content: {
        flex: 4
    }
});