import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import SearchTextInput from './components/SearchTextInput';
import ResultTile from './components/ResultTile';

import loadLocalResource from "react-native-local-resource";
import csvData from '../data/mock_data_complete.csv';
import Papa from "papaparse";

// import useSearchBookLocation from '../hook/useSearchBookLocation';

import MockData from '../interface/MockData';

interface CSV {
    data: any[][]
}

async function readSampleText() {
    return await loadLocalResource(csvData)
}

export default function MainScreen({navigation}) {
    // const [searchResult, search, ready] = useSearchBookLocation(csvData);

    const [database, setDatabase] = useState<Array<MockData>>([]);
    const [searchResult, setSearchResult] = useState<MockData[]>([]);

    const formatSearchResult = (result: MockData) => result === undefined ? 'Not found!' : `${result.id}: ${result.firstName} ${result.lastName}, from ${result.country}`;
    function searchCsv(value: string) {
        const re = new RegExp(value.toLowerCase());
        const result = database.filter((item) => item.country.toLowerCase().search(re) !== -1);
        console.log(formatSearchResult(result[0]));
        setSearchResult(result);
    };

    useEffect(() => {
        (async function () {
            try {
                const csvContent = await readSampleText();
                const data: CSV = Papa.parse(csvContent);
                data.data.splice(0, 1)
                const dataWithoutHeader = data.data;
                const parsedData: Array<MockData> = dataWithoutHeader.map((item) => {
                    return {
                        id: item[0],
                        firstName: item[1],
                        lastName: item[2],
                        email: item[3],
                        givenName: item[4],
                        dateTime: item[5],
                        address: item[6],
                        description: item[7],
                        department: item[8],
                        company: item[9],
                        country: item[10],
                        comment: item[11]
                    };
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
                        (<SearchTextInput keyword="" onChange={searchCsv} placeholder="Type the title of the book..." />)
                        : (<Text>Loading...</Text>)
                }
            </View>
            <View style={styles.searchResultcontainer}>
                {searchResult.length > 0 ?
                    <FlatList
                        data={searchResult}
                        renderItem={({ item }) => <ResultTile navigation={navigation} key={item.id} item={item} />}
                    /> :
                    <Text>Not Found!</Text>
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
        justifyContent: 'center',
    },
    searchBoxContainer: {
        flex: 1,
        backgroundColor: 'skyblue'
    },
    searchResultcontainer: {
        flex: 7,
        backgroundColor: 'steelblue'
    }
});