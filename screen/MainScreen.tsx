import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SearchTextInput from './components/SearchTextInput';
import ResultTile from './components/ResultTile';
import SearchCategoryModal from './components/SearchCategoryModal';
import csvData from '../data/booklist.json';

// import useSearchBookLocation from '../hook/useSearchBookLocation';
import Toast from 'react-native-toast-message';

import Book from '../interface/Book';
import { Alert } from 'react-native';

interface CSV {
    data: any[][],
    navigation?: any
}

const SearchTypeLabel = {
    title: '书名',
    author: '作者',
    publisher: '出版社',
    barCode: '条码号',
    ISBN: 'ISBN'
}

export default function MainScreen({ navigation }) {
    const [database, setDatabase] = useState<Array<Book>>([]);
    const [searchResult, setSearchResult] = useState<Book[]>([]);
    const [searchType, setSearchType] = useState('title');
    const [showModal, setShowModal] = useState(false);

    const searchCsv = (value: string, type: string) => {
        const re = new RegExp(value.toLowerCase());
        let result = [];
        if (value !== "") {
            if (type) {
                result = database.filter((item) => item[type].toLowerCase().search(re) !== -1);
            } else {
                result = database.filter((item) => item[searchType].toLowerCase().search(re) !== -1);
            }
        }

        setSearchResult(result);
    };

    // useEffect(() => {
    //     Toast.show({
    //         text1: 'Hello',
    //         text2: 'This is some something '
    //     });
    // }, []);

    useEffect(() => {
        (async function () {
            try {
                let parsedData = csvData as Book[];
                parsedData = parsedData.map((item) => {
                    const imageIdx = getRandomInt(imageList.length);
                    return { ...item, image: imageList[imageIdx] };
                });

                setDatabase(parsedData);
            } catch {

            }
        })();
    }, []);

    const navigateToBarcodeScanner = () => {
        navigation.navigate('BarcodeScanner', { handleBarCodeScanned, navigation })
    }

    const handleBarCodeScanned = ({ data }) => {
        let type = 'barCode';
        if (data.length >= 13) type = 'ISBN';
        searchCsv(data, type);
    };

    const onSearchTypeSelected = (type) => {
        setSearchType(type)
        searchCsv('', type);
        setShowModal(false);
    }

    const navigateToOrder = () => {
         navigation.navigate('Order', { showToast })
    }

    const showToast = ()=> {
        navigation.goBack();
        Toast.show({
            text1: '缺书登记成功'
        });
    }


    return (
        <View style={styles.container}>
            <SearchCategoryModal isOpen={showModal} onClose={() => setShowModal(false)} select={onSearchTypeSelected} selected={searchType} />
            <View style={styles.searchBoxContainer}>
                {
                    database.length > 0 ?
                        (
                        <>
                            <Button title={SearchTypeLabel[searchType]} onPress={() => setShowModal(true)} />
                            <SearchTextInput keyword="" onChange={(value) => searchCsv(value, searchType)} placeholder={`请输入${SearchTypeLabel[searchType]}`} type={searchType} />
                            <MaterialCommunityIcons name="barcode-scan" size={48} color="black" onPress={navigateToBarcodeScanner} />
                        </>
                        )
                        : (<Text>Loading...</Text>)
                }
            </View>
            <View style={styles.searchResultcontainer}>
                {searchResult.length > 0 ?
                    <FlatList
                        data={searchResult}
                        renderItem={({ item }) => {
                            return (<ResultTile navigation={navigation} item={item} image={item.image} />);
                        }}
                        keyExtractor={(item) => item.barCode }
                    /> :
                    <>
                        <Text style={{margin: 20, alignSelf: 'center', fontSize: 24, fontWeight: 'bold'}}>未找到匹配记录</Text>
                        <TouchableOpacity 
                            style={{margin: 20, alignSelf: 'center'}}
                            onPress={navigateToOrder} 
                        >
                            <Text>缺书登记</Text>
                        </TouchableOpacity>
                    </>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    searchBoxContainer: {
        flex: 0.6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'lightgray'
    },
    searchResultcontainer: {
        flex: 7,
        backgroundColor: 'gray',
    }
});

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

const imageList = [
    require("../assets/images/books/001-diary.png"),
    require("../assets/images/books/002-book.png"),
    require("../assets/images/books/003-bible.png"),
    require("../assets/images/books/004-book.png"),
    require("../assets/images/books/005-book.png"),
    require("../assets/images/books/006-open-book.png"),
    require("../assets/images/books/007-book.png"),
    require("../assets/images/books/008-book.png"),
    require("../assets/images/books/009-book.png"),
    require("../assets/images/books/010-fairy-tale.png"),
    require("../assets/images/books/011-write.png"),
    require("../assets/images/books/012-book.png"),
    require("../assets/images/books/013-book.png"),
    require("../assets/images/books/014-book.png"),
    require("../assets/images/books/015-book.png"),
    require("../assets/images/books/016-fairy-tale.png"),
    require("../assets/images/books/017-open-book.png"),
    require("../assets/images/books/018-book.png"),
    require("../assets/images/books/019-recipe-book.png"),
    require("../assets/images/books/020-book.png"),
    require("../assets/images/books/021-book.png"),
    require("../assets/images/books/022-travel-guide.png"),
    require("../assets/images/books/023-electronic-book.png"),
    require("../assets/images/books/024-book.png"),
    require("../assets/images/books/025-travel-guide.png"),
    require("../assets/images/books/026-book.png"),
    require("../assets/images/books/027-book.png"),
    require("../assets/images/books/028-book.png"),
    require("../assets/images/books/029-book.png"),
    require("../assets/images/books/030-book.png"),
    require("../assets/images/books/031-book.png"),
    require("../assets/images/books/032-book.png"),
    require("../assets/images/books/033-book.png"),
    require("../assets/images/books/034-comic-book.png"),
    require("../assets/images/books/035-book.png"),
    require("../assets/images/books/036-book.png"),
    require("../assets/images/books/037-book.png"),
    require("../assets/images/books/038-download.png"),
    require("../assets/images/books/039-open-book.png"),
    require("../assets/images/books/040-book.png"),
    require("../assets/images/books/041-glasses.png"),
    require("../assets/images/books/042-book.png"),
    require("../assets/images/books/043-book.png"),
    require("../assets/images/books/044-book.png"),
    require("../assets/images/books/045-book.png"),
    require("../assets/images/books/046-book.png"),
    require("../assets/images/books/047-write.png"),
    require("../assets/images/books/048-audio-book.png"),
    require("../assets/images/books/049-upload.png"),
    require("../assets/images/books/050-book.png")
];