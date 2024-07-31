import React, { useState, useRef, useContext } from 'react';
import { Modal, View, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';
import { TextInput, Card, Text, Provider as PaperProvider } from 'react-native-paper';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Popover from 'react-native-popover-view';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../store/auth-context';
import DatePicker from 'react-native-date-picker';
import Colors from '../constants/colors';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isEndDatePickerOpen, setIsEndDatePickerOpen] = useState(false);
  const [rooms, setRooms] = useState(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const touchableRef = useRef();
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);

  // Full list of locations (can be fetched from an API)
  const fullLocationList = [
    { id: '1', name: 'New York' },
    { id: '2', name: 'Los Angeles' },
    { id: '3', name: 'Chicago' },
    { id: '4', name: 'Houston' },
    { id: '5', name: 'Miami' },
    { id: '6', name: 'San Francisco' },
    { id: '7', name: 'Boston' },
    { id: '8', name: 'Seattle' },
    { id: '9', name: 'Washington' },
    // Add more locations as needed
  ];

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const togglePopover = () => {
    setIsVisible(!isVisible);
  };

  const navigateToProfile = () => {
    setIsVisible(false);
    navigation.navigate('Profile');
  };

  const navigateToSettings = () => {
    setIsVisible(false);
    navigation.navigate('Configurações');
  };

  const navigateToHosting = () => {
    setIsVisible(false);
    navigation.navigate('Hosting');
  };

  const handleInputChange = (text) => {
    setQuery(text);
    if (text) {
      const filteredSuggestions = fullLocationList.filter((location) =>
        location.name.toLowerCase().includes(text.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (name) => {
    setQuery(name);
    setSuggestions([]);
  };

  const renderSuggestionItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelectSuggestion(item.name)}>
      <Card style={styles.suggestionItem}>
        <Card.Content>
          <Text>{item.name}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  const clearFilters = () => {
    setQuery('');
    setStartDate(null);
    setEndDate(null);
    setRooms(0);
    setAdults(0);
    setChildren(0);
  };

  const search = () => {
    // Implement your search functionality here
    console.log('Search with:', { query, startDate, endDate, rooms, adults, children });
    toggleModal(); // Close the modal after search
  };

  const formatDate = (date) => {
    if (!date) return 'dd/mm/aaaa';
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <TouchableOpacity style={styles.leftTextContainer}>
          <Text style={styles.title}>Houses96</Text>
        </TouchableOpacity>

        <View style={styles.rightIconsContainer}>
          <TouchableOpacity style={styles.iconContainer} onPress={toggleModal}>
            <AntDesign name="search1" size={24} color="white" />
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={toggleModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TextInput
                  label="Para onde?"
                  value={query}
                  onChangeText={handleInputChange}
                  style={styles.input}
                />
                <FlatList
                  data={suggestions}
                  keyExtractor={(item) => item.id}
                  renderItem={renderSuggestionItem}
                  style={styles.suggestionList}
                />

                <Text style={[styles.sectionTitle, { marginBottom: 10 }]}>Quando</Text>
                <View style={styles.dateRow}>
                  <TouchableOpacity onPress={() => setIsDatePickerOpen(true)} style={[styles.dateInput, styles.dateInputLeft]}>
                    <Text style={styles.dateInputText}>
                      {formatDate(startDate) || 'Data inicial'}
                    </Text>
                  </TouchableOpacity>

                  <DatePicker
                    modal
                    open={isDatePickerOpen}
                    date={startDate || new Date()}
                    mode="date"
                    onConfirm={(date) => {
                      setIsDatePickerOpen(false);
                      setStartDate(date);
                    }}
                    onCancel={() => {
                      setIsDatePickerOpen(false);
                    }}
                  />

                  <TouchableOpacity onPress={() => setIsEndDatePickerOpen(true)} style={[styles.dateInput, styles.dateInputRight]}>
                    <Text style={styles.dateInputText}>
                      {formatDate(endDate) || 'Data final'}
                    </Text>
                  </TouchableOpacity>

                  <DatePicker
                    modal
                    open={isEndDatePickerOpen}
                    date={endDate || new Date()}
                    mode="date"
                    onConfirm={(date) => {
                      setIsEndDatePickerOpen(false);
                      setEndDate(date);
                    }}
                    onCancel={() => {
                      setIsEndDatePickerOpen(false);
                    }}
                  />
                </View>

                <Text style={styles.sectionTitle}>Quem</Text>
                <View style={styles.guestRow}>
                  <Text style={styles.guestLabel}>Quartos</Text>
                  <View style={styles.counter}>
                    <TouchableOpacity onPress={() => setRooms(Math.max(0, rooms - 1))} style={styles.counterCircle}>
                      <Text style={styles.counterButton}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.counterValue}>{rooms}</Text>
                    <TouchableOpacity onPress={() => setRooms(rooms + 1)} style={styles.counterCircle}>
                      <Text style={styles.counterButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.guestRow}>
                  <Text style={styles.guestLabel}>Adultos</Text>
                  <View style={styles.counter}>
                    <TouchableOpacity onPress={() => setAdults(Math.max(0, adults - 1))} style={styles.counterCircle}>
                      <Text style={styles.counterButton}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.counterValue}>{adults}</Text>
                    <TouchableOpacity onPress={() => setAdults(adults + 1)} style={styles.counterCircle}>
                      <Text style={styles.counterButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.guestRow}>
                  <Text style={styles.guestLabel}>Crianças</Text>
                  <View style={styles.counter}>
                    <TouchableOpacity onPress={() => setChildren(Math.max(0, children - 1))} style={styles.counterCircle}>
                      <Text style={styles.counterButton}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.counterValue}>{children}</Text>
                    <TouchableOpacity onPress={() => setChildren(children + 1)} style={styles.counterCircle}>
                      <Text style={styles.counterButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.footer}>
                  <TouchableOpacity onPress={clearFilters}>
                    <Text style={styles.link}>Limpar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.footerButton} onPress={search}>
                    <Text style={styles.buttonText}>Pesquisar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          <TouchableOpacity style={styles.iconContainer}>
            <Feather name="message-circle" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            ref={touchableRef}
            onPress={togglePopover}
          >
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </TouchableOpacity>
          <Popover
            isVisible={isVisible}
            from={touchableRef}
            onRequestClose={togglePopover}
          >
            <View style={styles.popoverContent}>
              <TouchableOpacity onPress={navigateToProfile} style={styles.menuItem}>
                <Text>Perfil</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={navigateToHosting} style={styles.menuItem}>
                <Text>Hospedagem</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={navigateToSettings} style={styles.menuItem}>
                <Text>Configurações</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={authCtx.logout} style={styles.menuItem}>
                <Text>Logout</Text>
              </TouchableOpacity>
            </View>
          </Popover>
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: '97%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  leftTextContainer: {
    right: 3,
  },
  rightIconsContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    marginLeft: 20,
    right: Platform.OS === 'ios' ? 9 : -4,
  },
  popoverContent: {
    width: 200,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
  suggestionList: {
    width: '100%',
  },
  suggestionItem: {
    width: '100%',
    marginVertical: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dateInput: {
    width: '48%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  dateInputLeft: {
    marginRight: '2%',
  },
  dateInputRight: {
    marginLeft: '2%',
  },
  dateInputText: {
    color: '#555',
  },
  guestRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  },
  guestLabel: {
    fontSize: 16,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  counterButton: {
    fontSize: 20,
    color: '#2196F3',
  },
  counterValue: {
    fontSize: 16,
    marginHorizontal: 10,
    color: '#2196F3',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  link: {
    color: Colors.primary500,
    textDecorationLine: 'underline',
  },
  footerButton: {
    backgroundColor: Colors.primary500,
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;
