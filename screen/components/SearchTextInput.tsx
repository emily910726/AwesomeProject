import React, { useState, useCallback } from 'react';
import { TextInput } from 'react-native';
import { debounce } from "lodash";

interface Props {
    placeholder?: string,
    onChange?(value: string): void,
    keyword: string,
    type: string
}

export default function SearchTextInput(props: Props) {
    const [keyword, setKeyword] = useState(props.keyword);

    const onSearch = useCallback(debounce(props.onChange, 500), [props.type]);
    const onSearchBoxChanged = (value: string) => {
      setKeyword(value);
      onSearch(value);
    };

    return (
        <TextInput
            style={{ height: 40 }}
            placeholder={props.placeholder}
            onChangeText={onSearchBoxChanged}
            value={keyword}
        />
    );
}