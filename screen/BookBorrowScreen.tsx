import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function BookBorrowScreen({route}) {
    const { showToast } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.formPanel}>
                <View style={styles.textContent}>
                    <Text style={styles.title}>在线借阅</Text>
                </View>
                <View style={styles.textContent}>
                    <Text style={styles.inputItem}>学号/工号</Text>
                    <TextInput style={styles.textInput}
                        placeholder="请输入学号或者工号"
                    />
                </View>
                <View style={styles.textContent}>
                    <Text style={styles.inputItem}>姓名</Text>
                    <TextInput style={styles.textInput}
                        placeholder="张三"
                    />
                </View>
                <View style={styles.textContent}>
                    <Text style={styles.inputItem}>手机号</Text>
                    <TextInput style={styles.textInput}
                        placeholder="18812340000"
                    />
                </View>
            </View>
            <View style={styles.actionPanel}>
                <TouchableOpacity 
                    style={{margin: 20, alignSelf: 'center'}} 
                    onPress={() => {showToast('在线借阅成功')}} 
                >
                    <Text style={styles.actionText}>提交</Text>
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
    title: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16
    },
    textContent: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 16
    },
    inputItem: {
        alignSelf: 'flex-start',
        width: 180,
        fontWeight: 'bold'
    },
    textInput: {
        alignSelf: 'center',
        width: '100%',
        borderWidth: 0.5,
        borderBottomColor: '#222',
        borderTopColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF'
    },
    actionPanel: {
        flex: 1,
        backgroundColor: '#3e92d6'
    },
    actionText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
});