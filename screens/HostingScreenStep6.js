import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Colors from '../constants/colors';

const HostingScreenStep6 = () => {
  const [images, setImages] = useState([]);

  // Function to pick an image from the library
  const selectImageFromLibrary = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 0, // Allows multiple selection
        includeBase64: false,
        includeExtra: true,
      },
      (response) => {
        if (response.didCancel) {
          alert('Seletor de imagens cancelado pelo usuário');
        } else if (response.errorCode) {
          alert('Erro no seletor de imagens: ', response.errorMessage);
        } else {
          if (response.assets) {
            const selectedImages = response.assets.map((asset) => ({
              uri: asset.uri,
              fileName: asset.fileName,
            }));
            setImages((prevImages) => [...prevImages, ...selectedImages]);
          }
        }
      }
    );
  };

  // Function to capture an image using the camera
  const captureImage = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
        includeExtra: true,
      },
      (response) => {
        if (response.didCancel) {
          alert('Câmera cancelada pelo usuário');
        } else if (response.errorCode) {
          alert('Erro de câmera: ', response.errorMessage);
        } else {
          if (response.assets) {
            const capturedImages = response.assets.map((asset) => ({
              uri: asset.uri,
              fileName: asset.fileName,
            }));
            setImages((prevImages) => [...prevImages, ...capturedImages]);
          }
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione pelo menos 5 fotos</Text>
      <View style={styles.buttonContainer}>

        <TouchableOpacity style={[styles.footerButton, { marginRight: 20 }]} onPress={selectImageFromLibrary}>
          <Text style={styles.buttonText}>Faça upload de uma foto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={captureImage}>
          <Text style={styles.buttonText}>Capture uma foto</Text>
        </TouchableOpacity>

      </View>
      <ScrollView contentContainerStyle={styles.imageContainer}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image.uri }} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 10,
  },
  footerButton: {
    backgroundColor: Colors.primary500,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HostingScreenStep6;
