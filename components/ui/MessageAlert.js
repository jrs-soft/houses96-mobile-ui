import { View, Text, StyleSheet } from 'react-native';

function MessageAlert({ type, message }) {

  const getBackgroundColor = () => {
    switch (type) {
      case 'info':
        return '#d9edf7';
      case 'warning':
        return '#fcf8e3';
      case 'error':
        return '#f2dede';
      default:
        return '#d9edf7'; // default to info style
    }
  };

  const getTextColor = () => {
    switch (type) {
      case 'info':
        return '#31708f';
      case 'warning':
        return '#8a6d3b';
      case 'error':
        return '#a94442';
      default:
        return '#31708f'; // default to info style
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      <Text style={[styles.message, { color: getTextColor() }]}>{message}</Text>
    </View>
  );
}

export default MessageAlert;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});


