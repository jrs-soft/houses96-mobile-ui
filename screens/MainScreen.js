import React, { useRef } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Platform, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Carousel from 'react-native-reanimated-carousel';

const { width: screenWidth } = Dimensions.get('window');

const data = [
  {
    title: 'Item 1',
    text: 'Text 1',
    image: 'https://static.ffx.io/images/$zoom_0.7%2C$multiply_2.709%2C$ratio_1.5%2C$width_756%2C$x_25%2C$y_1/t_crop_custom/q_62%2Cf_auto/386db6fc83fdc5fa8448609acf6fee156420533c',
  },
  {
    title: 'Item 2',
    text: 'Text 2',
    image: 'https://media.istockphoto.com/id/533236170/pt/foto/maresias.jpg?s=1024x1024&w=is&k=20&c=dDUg14Qymu0M2g4cn0dywuEjBPAb4sV9LXKXK3XvSxI=',
  },
  {
    title: 'Item 3',
    text: 'Text 3',
    image: 'https://media.istockphoto.com/id/1370813651/pt/foto/surfboard-and-palm-tree-on-beach-in-summer.jpg?s=1024x1024&w=is&k=20&c=FW9UBRdDPgiwTjd4ZnlqN0Zbn7NZnINvwr2wkH5jfVM=',
  },
];

const MainScreen = ({ navigation }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePress = (item) => {
    // Navigate to the detail screen
    navigation.navigate('Detail', { item });
  };

  const handleLongPress = (index) => {
    // Move to the next item in the carousel
    const nextIndex = index + 1;
    if (carouselRef.current && nextIndex < data.length) {
      carouselRef.current.snapToItem(nextIndex);
    }
  };

  const renderPagination = () => {
    return (
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { opacity: index === activeIndex ? 1 : 0.5 },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>

      {/* Carousel */}
      <View style={styles.carouselContainer}>
        <Carousel
          ref={carouselRef}
          width={screenWidth}
          height={'100%'}
          data={data}
          renderItem={({ item, index }) => (
            <TouchableWithoutFeedback onLongPress={() => handleLongPress(index)}>
              <TouchableOpacity
                style={styles.item}
                onPress={() => handlePress(item)}
              >
                <Image source={{ uri: item.image }} style={styles.image} />
              </TouchableOpacity>
            </TouchableWithoutFeedback>
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
        {renderPagination()}
      </View>

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
          <MaterialIcons name="skip-previous" size={24} color="black" />
          <Text>Anterior</Text>
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
          <MaterialIcons name="skip-next" size={24} color="black" />
          <Text>Próximo (19)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'flex-start',  // Align children at the top
  },
  carouselContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 40,
    marginBottom: 10,
    alignSelf: 'center',
    height: Platform.OS === 'ios' ? '65%' : '65.8%',
  },
  image: {
    width: screenWidth * 0.9,
    height: '100%',
    borderRadius: 20,
    borderColor: Colors.gray2,
    borderWidth: 1

  },
  infoContainer: {
    width: '90%',  // Make the infoContainer full width
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.gray2,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10,  // Space between carousel and infoContainer
    alignSelf: 'center',
  },
  infoText: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: '#888',
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
    borderColor: Colors.gray2,
    paddingVertical: 10,
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 20 : 0,
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
  pagination: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center', // Center horizontally
    alignItems: 'center',
    width: 60, // Ensure the pagination container takes the full width
    left: -20
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    margin: 5,
  },
});

export default MainScreen;
