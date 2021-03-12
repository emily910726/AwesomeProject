import { useState, useEffect } from 'react';

import loadLocalResource from "react-native-local-resource";
import Papa from "papaparse";

import MockData from '../interface/Book';

interface CSV {
    data: any[][]
}

export default function useSearchBookLocation(csvData: any) {
    const [database, setDatabase] = useState<Array<MockData>>([{
        id: 'string',
        firstName: 'string',
        lastName: 'string',
        email: 'string',
        givenName: 'string',
        dateTime: 'string',
        address: 'string',
        description: 'string',
        department: 'string',
        company: 'string',
        country: 'string',
        comment: 'string'
    }]);
    const [searchResult, setSearchResult] = useState<Array<MockData>>([]);
    const [search, setSearch] = useState<(value: string) => void>();
    const [ready, setReady] = useState(false);

    async function readCsv(csvData: any) {
        return await loadLocalResource(csvData)
    }

    useEffect(() => {
        (async function () {
            try {
                const csvContent = await readCsv(csvData);
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
                setSearch((value: string) => {
                    const re = new RegExp(value?.toLowerCase());
                    const result = database.filter((item) => item.country.toLowerCase().search(re) !== -1);

                    setSearchResult(result);
                    setReady(true);
                });
            } catch {

            }
        })();
    }, [csvData]);

    return [searchResult, search, ready];
}