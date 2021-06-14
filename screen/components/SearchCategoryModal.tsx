
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

interface Props {
  isOpen: boolean,
  onClose(): void,
  select(type: string): void,
  selected: string
}

export default function SearchCategoryModal(props: Props) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.isOpen}
      onRequestClose={() => {
        props.onClose();
      }}
    >
      <TouchableOpacity style={styles.overlay} onPress={props.onClose} >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>请选择搜索条目：</Text>
            <TouchableOpacity style={styles.button} onPress={() => props.select('title')} >
                {props.selected === 'title' && <Entypo name="check" size={24} style ={styles.invisibleTick} />} 
                <Text>书名</Text>
                {props.selected === 'title' && <Entypo name="check" size={24} style ={styles.tick} />}
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => props.select('author')} >
                {props.selected === 'author' && <Entypo name="check" size={24} style ={styles.invisibleTick} />} 
                <Text>作者</Text>
                {props.selected === 'author' && <Entypo name="check" size={24} style ={styles.tick} />}
            </TouchableOpacity>

            
            <TouchableOpacity style={styles.button} onPress={() => props.select('publisher')} >
                {props.selected === 'publisher' && <Entypo name="check" size={24} style ={styles.invisibleTick} />}
                <Text>出版社</Text>
                {props.selected === 'publisher' && <Entypo name="check" size={24} style ={styles.tick} />}
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => props.select('barCode')} >
                {props.selected === 'barCode' && <Entypo name="check" size={24} style ={styles.invisibleTick} />} 
                <Text>条码号</Text>
                {props.selected === 'barCode' && <Entypo name="check" size={24} style ={styles.tick} />}
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => props.select('ISBN')} >
                {props.selected === 'ISBN' && <Entypo name="check" size={24} style ={styles.invisibleTick} />} 
                <Text>ISBN</Text>
                {props.selected === 'ISBN' && <Entypo name="check" size={24} style ={styles.tick} />}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.8)'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
    minWidth: '80%'
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "stretch",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    padding: 16
  },
  tick:{
      marginLeft:8,
      color:"green"
  },
  invisibleTick:{
    marginLeft:8,
    color:"white"
  }
});
