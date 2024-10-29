import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const MessageAlert = ({ visible, message, onClose }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.alertBox}>
          <Text style={styles.alertText}>{message}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
  },
  alertBox: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    maxWidth: '80%',
    alignItems: 'center',
  },
  alertText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  closeText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default MessageAlert;
