import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

import MockData from '../../interface/MockData';
import BookDetailModal from './BookDetailModal';

interface Props {
    item: MockData,
    navigation: any,
    image: any
}

export default function ResultTile(props: Props) {
    const [showModal, setShowModal] = useState(false);

    return (
        <TouchableHighlight onPress={() => {
            setShowModal(true);
            // props.navigation.navigate('Details');
        }} underlayColor="white">
            <View style={styles.tile}>
                <BookDetailModal isOpen={showModal} onClose={() => setShowModal(false)} dataItem={props.item} />
                <View style={styles.thumbnail}>
                    <Image source={props.image}
                        style={{ width: 64, height: 64, paddingTop: 10, paddingBottom: 10 }} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{`${props.item.firstName} ${props.item.lastName}`}</Text>
                    <Text style={styles.caption}>{props.item.country}</Text>
                    <Text style={styles.caption}>{props.item.comment}</Text>
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
        padding: 4
    },
    thumbnail: {
        flex: 1
    },
    content: {
        flex: 4
    },
    title: {
        fontWeight: "bold",
        fontSize: 16
    },
    caption: {
        fontSize: 12
    }
});
