import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import SearchTextInput from './components/SearchTextInput';
import ResultTile from './components/ResultTile';

import csvData from '../data/booklist.json';

// import useSearchBookLocation from '../hook/useSearchBookLocation';

import Book from '../interface/Book';

interface CSV {
    data: any[][],
    navigation?: any
}

export default function MainScreen({ navigation }) {
    // const [searchResult, search, ready] = useSearchBookLocation(csvData);

    const [database, setDatabase] = useState<Array<Book>>([]);
    const [searchResult, setSearchResult] = useState<Book[]>([]);

    function searchCsv(value: string) {
        const re = new RegExp(value.toLowerCase());
        const result = value !== "" ? database.filter((item) => item.title.toLowerCase().search(re) !== -1) : [];

        setSearchResult(result);
    };

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

    return (
        <View style={styles.container}>
            <View style={styles.searchBoxContainer}>
                {
                    database.length > 0 ?
                        (<SearchTextInput keyword="" onChange={searchCsv} placeholder="请输入书名" />)
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
                    <Text style={{margin: 20, alignSelf: 'center', fontSize: 24, fontWeight: 'bold'}}>未找到匹配记录</Text>
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
        flex: 1,
        backgroundColor: "lightgray"
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