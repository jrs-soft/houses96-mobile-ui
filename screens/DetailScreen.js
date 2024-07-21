import React, { useRef } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, { Marker } from 'react-native-maps';

const { width: screenWidth } = Dimensions.get('window');

const DetailScreen = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const carouselRef = useRef(null);

  const region = {
    latitude: -0.010123,
    longitude: -51.067145,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const marker = {
    latitude: -0.010123,
    longitude: -51.067145,
  };

  const data = [
    { number: 1, image: 'https://static.ffx.io/images/$zoom_0.7%2C$multiply_2.709%2C$ratio_1.5%2C$width_756%2C$x_25%2C$y_1/t_crop_custom/q_62%2Cf_auto/386db6fc83fdc5fa8448609acf6fee156420533c' },
    { number: 2, image: 'https://media.istockphoto.com/id/533236170/pt/foto/maresias.jpg?s=1024x1024&w=is&k=20&c=dDUg14Qymu0M2g4cn0dywuEjBPAb4sV9LXKXK3XvSxI=' },
    { number: 3, image: 'https://media.istockphoto.com/id/1370813651/pt/foto/surfboard-and-palm-tree-on-beach-in-summer.jpg?s=1024x1024&w=is&k=20&c=FW9UBRdDPgiwTjd4ZnlqN0Zbn7NZnINvwr2wkH5jfVM=' },
  ];

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      carouselRef.current?.scrollTo({ index: newIndex, animated: true });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      carouselRef.current?.scrollTo({ index: newIndex, animated: true });
    }
  };

  return (

    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.innerContainer}>
          {/* Carousel */}
          <View style={styles.carouselContainer}>
            <Carousel
              ref={carouselRef}
              width={screenWidth}
              height={'100%'}
              data={data}
              renderItem={({ item }) => (
                <Image source={{ uri: item.image }} style={styles.image} />
              )}
              onSnapToItem={(index) => setCurrentIndex(index)}
            />
            <View style={styles.navigationRow}>
              <TouchableOpacity onPress={handlePrev} style={styles.navButton}>
                <Icon name="navigate-before" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.paginationContainer}>
                <Text style={styles.paginationText}>
                  {currentIndex + 1} of {data.length}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNext} style={styles.navButton}>
                <Icon name="navigate-next" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          {/* Info Container 1 */}
          <View style={styles.infoContainer}>
            <View style={styles.infoText}>
              <Text style={styles.title}>Casa do Didigo - Praia Particular</Text>
              <Text style={{ marginTop: 10, marginBottom: 10 }}>Espaço inteiro: casa em Angra dos Reis, Brasil</Text>
              <Text>10 hóspedes - 3 quartos - 7 camas - 3 banheiros</Text>
              <View style={[styles.rating, { marginTop: 10 }]}>
                <Ionicons name="star" size={20} color="black" />
                <Text style={styles.ratingText}>4.8 - 25 avaliações</Text>
              </View>
              {/* New Elements */}
              <View style={styles.separator} />
              <View style={styles.userInfo}>
                <Ionicons name="person" size={20} color="black" />
                <Text style={styles.userInfoText}>Anfitrião: Pedro - 4,89 <Ionicons name="star" size={16} color="black" /> - 35 avaliações</Text>
              </View>
              <View style={styles.additionalInfo}>
                <MaterialIcons name="emoji-events" size={20} color="black" />
                <Text style={styles.additionalInfoText}>Superhost - hospeda a 9 meses</Text>
              </View>
              <View style={styles.additionalInfo}>
                <MaterialIcons name="cancel" size={20} color="black" />
                <Text style={styles.additionalInfoText}>Cancelamento gratuito por 48 horas</Text>
              </View>
            </View>
          </View>
          {/* Info Container 2 */}
          {/*<View style={styles.infoContainer}>
          <View style={styles.infoText}>
            <Text style={styles.title}>Comodidades</Text>
            {/* New Elements
            <View style={styles.separator} />
            <View style={styles.additionalInfo}>
              <MaterialCommunityIcons name="wave" size={24} color="black" />
              <Text style={styles.additionalInfoText}>Vista para o Oceano</Text>
            </View>
            <View style={styles.additionalInfo}>
              <MaterialIcons name="terrain" size={24} color="black" />
              <Text style={styles.additionalInfoText}>Vista para as Montanhas</Text>
            </View>
            <View style={styles.additionalInfo}>
              <Text style={[styles.link, { alignSelf: 'flex-end' }]}>Ver todas as 10 Comodidades</Text>
            </View>
          </View>
        </View>*/}
          {/* Info Container 3 */}
          {/*<View style={styles.infoContainerMap}>
          <View style={styles.infoTextMap}>
            <Text style={styles.titleMap}>Localização no Mapa</Text>
            <View style={styles.separator} />
            <Text style={{ marginBottom: 15 }}>Belém, Pará, Brasil</Text>
            <View style={styles.containerMap}>
              <MapView
                style={styles.map}
                initialRegion={region}
              >
                <Marker coordinate={marker} />
              </MapView>
            </View>
          </View>
        </View>*/}
          {/* Info Container 4 */}
          {/*<View style={styles.infoContainer}>
          <View style={styles.infoText}>
            <Text style={styles.title}>Comentários</Text>
            <View style={styles.separator} />
            <View style={styles.rating}>
              <Ionicons name="star" size={16} color="black" />
              <Ionicons name="star" size={16} color="black" />
              <Ionicons name="star" size={16} color="black" />
              <Ionicons name="star" size={16} color="black" />
              <Ionicons name="star" size={16} color="black" />
              <Text style={{ marginLeft: 8 }}>Há dois meses</Text>
            </View>
            <Text style={styles.commentText}>
              Passamos ótimos momentos em família na casa. A vista é linda, a praia em frente também.
            </Text>
            <View style={styles.userInfo}>
              <Ionicons name="person" size={20} color="black" />
              <Text style={styles.userInfoText}>Paola Silva</Text>
            </View>
            <Text style={{marginTop: 10}}>São Caetano do Sul</Text>
            <View style={styles.additionalInfo}>
              <Text style={styles.link}>Ver todos os 10 Comentários</Text>
            </View>
          </View>
        </View>*/}
          {/* Info Container 5 */}
          <View style={styles.infoContainer}>
            <View style={styles.infoText}>
              <Text style={styles.title}>Anfitrião e Coanfitrião</Text>
              <View style={styles.separator} />
              <View style={styles.list}>
                <Text style={styles.listItem}>Taxa de resposta: 100%</Text>
                <Text style={styles.listItem}>Responde em até uma hora</Text>
              </View>
              <Text style={styles.title2}>Coanfitriã</Text>
              <View style={styles.userInfo}>
                <Ionicons name="person" size={20} color="black" />
                <Text style={styles.userInfoText}>Paola Silva</Text>
              </View>
              <View style={styles.additionalInfo}>
                <Text style={styles.link}>Enviar mensagem para o Anfitrião</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'flex-start', // Align children at the top
  },
  scrollViewContent: {
    minHeight: Dimensions.get('window').height,
    justifyContent: 'center', // Optional: Center the content vertically
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  carouselContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center',
    height: Platform.OS === 'ios' ? '65%' : '65.8%',
  },
  image: {
    width: screenWidth * 0.9,
    height: '100%',
    borderRadius: 20,
    borderColor: Colors.gray2,
    borderWidth: 1,
    alignSelf: 'center', // Center the image horizontally
  },
  navigationRow: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 10,
    top: '90%', // Center vertically
    transform: [{ translateY: -12 }], // Adjust for button size
  },
  paginationContainer: {
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with transparency
    padding: 10,
  },
  paginationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // White text for contrast
  },
  navButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with transparency
  },
  navButtonText: {
    fontSize: 16,
    color: '#fff', // White text for contrast
  },
  infoContainer: {
    width: '100%', // Make the infoContainer full width
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.gray2,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10, // Space between carousel and infoContainer
    marginBottom: 10,
    alignSelf: 'center',
  },
  infoText: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
  title2: {
    fontSize: 16,
    fontWeight: 'bold',
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
  footerButton: {
    alignItems: 'center',
  },
  link: {
    color: Colors.primary500,
    textDecorationLine: 'underline',
    paddingLeft: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  userInfoText: {
    marginLeft: 4,
    fontSize: 14,
  },
  additionalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  additionalInfoText: {
    marginLeft: 4,
    fontSize: 14,
  },
  infoContainerMap: {
    flex: 1,
    padding: 16,

    width: '90%', // Make the infoContainer full width
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.gray2,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10, // Space between carousel and infoContainer
    alignSelf: 'center',

  },
  infoTextMap: {
    marginBottom: 16,
  },
  titleMap: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  containerMap: {
    height: 300, // Fixed height for the map
    width: screenWidth - 62,
    borderRadius: 20,
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  link: {
    color: Colors.primary500,
    textDecorationLine: 'underline',
  },
  commentText: {
    marginTop: 10,
    marginBottom: 10
  },
  list: {
    padding: 10,
  },
  listItem: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default DetailScreen;
