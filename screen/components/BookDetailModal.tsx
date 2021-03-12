
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable, Image } from 'react-native';

import MockData from '../../interface/MockData';

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
            <Text style={styles.title}>{`${props.dataItem.firstName} ${props.dataItem.lastName}`}</Text>
            <Text style={styles.caption}>{props.dataItem.country}</Text>
            <Text style={styles.caption}>{props.dataItem.comment}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={props.onClose}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
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
