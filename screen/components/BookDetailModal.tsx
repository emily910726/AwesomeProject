
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable, Image } from 'react-native';

import MockData from '../../interface/Book';

interface Props {
  isOpen: boolean,
  onClose(): void,
  dataItem: MockData
}

export default function BookDetailModal(props: Props) {
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
            <View style={styles.thumbnail}>
              <Image source={props.dataItem.image}
                style={{ width: 64, height: 64, paddingTop: 10, paddingBottom: 10 }} />
            </View>
            <Text style={styles.title}>{`${props.dataItem.title}`}</Text>
            <Text style={styles.caption}>{`作者: ${props.dataItem.author}`}</Text>
            <Text style={styles.caption}>{`图书位置：${props.dataItem.location}`}</Text>
            <Text style={styles.caption}>{`ISBN: ${props.dataItem.ISBN}`}</Text>
            <Text style={styles.caption}>{`单价: ${props.dataItem.price}`}</Text>
            <Text style={styles.caption}>{`索书号: ${props.dataItem.searchNo}`}</Text>
            <Text style={styles.caption}>{`出版社: ${props.dataItem.publisher}`}</Text>
            <Text style={styles.caption}>{`出版年: ${props.dataItem.publishYear}`}</Text>
            <Text style={styles.caption}>{`单元编号: ${props.dataItem.unitNo}`}</Text>
            <Text style={styles.caption}>{`条码号: ${props.dataItem.barCode}`}</Text>
            <Pressable
              style={[styles.button]}
              onPress={props.onClose}
            >
              <Image
                source= {require('./../../assets/images/cross.png') }
                style={{ width: 16, height: 16 }}
              />
            </Pressable>
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
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
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
    position: 'absolute',
    padding: 10,
    marginTop: 20,
    right: 4,
    top: -16,
    opacity: 0.4
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  thumbnail: {
    marginBottom: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "flex-start"
  },
  caption: {
    fontSize: 12,
    alignSelf: "flex-start"
  }
});
