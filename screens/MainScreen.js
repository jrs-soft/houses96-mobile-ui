import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const MainScreen = () => {
  return (
    <View style={styles.container}>

      {/* Image */}
      <Image 
        source={{ uri: 'https://static.ffx.io/images/$zoom_0.7%2C$multiply_2.709%2C$ratio_1.5%2C$width_756%2C$x_25%2C$y_1/t_crop_custom/q_62%2Cf_auto/386db6fc83fdc5fa8448609acf6fee156420533c' }}
        style={styles.image}
      />

      {/* Info Container */}
      <View style={styles.infoContainer}>
        <View style={styles.infoText}>
          <Text style={styles.title}>Quarto em Santarém, Brasil</Text>
          <Text>1 quarto - Banheiro compartilhado</Text>
          <Text>13 - 18 de Maio</Text>
          <Text>R$ 876,00 - Noite</Text>
        </View>
        <View style={styles.rating}>
          <Ionicons name="star" size={24} color="black" />
          <Text style={styles.ratingText}>4.8</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
        <FontAwesome name="commenting-o" size={24} color="black" />
          <Text>Comentar (12)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
        <AntDesign name="dislike2" size={24} color="black" />
          <Text>Não Gostei (12)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <AntDesign name="like2" size={24} color="black" />
          <Text>Gostei (12)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <MaterialIcons name="navigate-next" size={24} color="black" />
          <Text>Próximo (19)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,  // This padding affects all children, so you might not need extra margin on the image
    backgroundColor: '#fff'
  },
  image: {
    width: '95%',
    height: '73%',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
  },
  infoText: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: Colors.gray1,  
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerButton: {
    alignItems: 'center',
  },
  link: {
    color: Colors.primary500,
    textDecorationLine: 'underline',
    paddingLeft: 5
  },
});

export default MainScreen;
