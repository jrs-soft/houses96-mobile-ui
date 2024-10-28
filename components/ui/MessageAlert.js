import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const MessageAlert = ({ visible, message, type, onClose }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case 'info':
        return '#2196F3'; // Blue
      case 'warning':
        return '#FFA500'; // Orange
      case 'error':
        return '#FF0000'; // Red
      default:
        return '#000'; // Default to black
    }
  };

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={[styles.alertBox, { backgroundColor: getBackgroundColor() }]}>
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
    maxWidth: '80%',
    alignItems: 'center',
  },
  alertText: {
    color: '#fff',
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
