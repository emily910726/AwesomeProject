import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function BookOrderScreen({route}) {
    const { showToast } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.formPanel}>
                <View style={styles.textContent}>
                    <Text style={styles.inputItem}>学号/工号</Text>
                    <TextInput style={styles.inputItem}
                        placeholder="请输入学号或者工号"
                    />
                </View>
                <View style={styles.textContent}>
                    <Text style={styles.inputItem}>姓名</Text>
                    <TextInput style={styles.inputItem}
                        placeholder="张三"
                    />
                </View>
                <View style={styles.textContent}>
                    <Text style={styles.inputItem}>手机号</Text>
                    <TextInput style={styles.inputItem}
                        placeholder="18812340000"
                    />
                </View>
                <View style={styles.textContent}>
                    <Text style={styles.inputItem}>书名</Text>
                    <TextInput style={styles.inputItem}
                        placeholder="请输入书名或者ISBN"
                    />
                </View>
            </View>
            <View style={styles.actionPanel}>
                <TouchableOpacity 
                    style={{margin: 20, alignSelf: 'center'}} 
                    onPress={() => {showToast()}} 
                >
                    <Text>登记</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch'
    },
    formPanel: {
        flex: 7
    },
    textContent: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingLeft: 16,
        width: '50%'
    },
    inputItem: {
        alignSelf: 'center',
        width: 180
    },
    actionPanel: {
        flex: 1
    }
});