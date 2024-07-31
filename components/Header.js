import React, { useState, useRef, useContext } from 'react';
import { Modal, Text, View, TouchableOpacity, StyleSheet, Platform, TextInput, FlatList } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Popover from 'react-native-popover-view';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../store/auth-context';
import DatePicker from 'react-native-date-picker';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [guestsModalVisible, setGuestsModalVisible] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isEndDatePickerOpen, setIsEndDatePickerOpen] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const touchableRef = useRef();
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleGuestsModal = () => {
    setGuestsModalVisible(!guestsModalVisible);
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
    // Simulating an API call
    setSuggestions([
      { id: '1', name: 'Location 1' },
      { id: '2', name: 'Location 2' },
      { id: '3', name: 'Location 3' },
    ]);
  };

  const renderSuggestionItem = ({ item }) => (
    <TouchableOpacity onPress={() => setQuery(item.name)}>
      <Text style={styles.suggestionItem}>{item.name}</Text>
    </TouchableOpacity>
  );

  const clearFilters = () => {
    setQuery('');
    setStartDate(new Date());
    setEndDate(new Date());
    setRooms(1);
    setAdults(1);
    setChildren(0);
  };

  const search = () => {
    // Implement your search functionality here
    console.log('Search with:', { query, startDate, endDate, rooms, adults, children });
    toggleModal(); // Close the modal after search
  };

  return (
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
                style={styles.input}
                placeholder="Para onde?"
                value={query}
                onChangeText={handleInputChange}
              />
              <FlatList
                data={suggestions}
                keyExtractor={(item) => item.id}
                renderItem={renderSuggestionItem}
              />

              <View style={styles.dateRow}>
                <TouchableOpacity onPress={() => setIsDatePickerOpen(true)} style={[styles.dateInput, styles.dateInputLeft]}>
                  <Text style={styles.dateInputText}>
                    {startDate ? startDate.toLocaleDateString() : 'Start Date'}
                  </Text>
                </TouchableOpacity>

                <DatePicker
                  modal
                  open={isDatePickerOpen}
                  date={startDate}
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
                    {endDate ? endDate.toLocaleDateString() : 'End Date'}
                  </Text>
                </TouchableOpacity>

                <DatePicker
                  modal
                  open={isEndDatePickerOpen}
                  date={endDate}
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

              <TouchableOpacity onPress={toggleGuestsModal} style={styles.guestsButton}>
                <Text style={styles.guestsButtonText}>Select Guests</Text>
              </TouchableOpacity>

              <Modal
                animationType="slide"
                transparent={true}
                visible={guestsModalVisible}
                onRequestClose={toggleGuestsModal}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <View style={styles.guestRow}>
                      <Text style={styles.guestLabel}>Rooms</Text>
                      <View style={styles.counter}>
                        <TouchableOpacity onPress={() => setRooms(Math.max(1, rooms - 1))}>
                          <Text style={styles.counterButton}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.counterValue}>{rooms}</Text>
                        <TouchableOpacity onPress={() => setRooms(rooms + 1)}>
                          <Text style={styles.counterButton}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={styles.guestRow}>
                      <Text style={styles.guestLabel}>Adults</Text>
                      <View style={styles.counter}>
                        <TouchableOpacity onPress={() => setAdults(Math.max(1, adults - 1))}>
                          <Text style={styles.counterButton}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.counterValue}>{adults}</Text>
                        <TouchableOpacity onPress={() => setAdults(adults + 1)}>
                          <Text style={styles.counterButton}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={styles.guestRow}>
                      <Text style={styles.guestLabel}>Children</Text>
                      <View style={styles.counter}>
                        <TouchableOpacity onPress={() => setChildren(Math.max(0, children - 1))}>
                          <Text style={styles.counterButton}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.counterValue}>{children}</Text>
                        <TouchableOpacity onPress={() => setChildren(children + 1)}>
                          <Text style={styles.counterButton}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <TouchableOpacity onPress={toggleGuestsModal} style={styles.closeButton}>
                      <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>

              <View style={styles.footer}>
                <TouchableOpacity onPress={clearFilters}>
                  <Text style={styles.clearText}>Limpar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={search} style={styles.searchButton}>
                  <Text style={styles.searchButtonText}>Pesquisar</Text>
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
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  suggestionItem: {
    padding: 10,
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
  guestsButton: {
    width: '100%',
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  guestsButtonText: {
    color: 'white',
    fontSize: 16,
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
  counterButton: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: '#2196F3',
  },
  counterValue: {
    fontSize: 16,
    paddingHorizontal: 10,
  },
  closeButton: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  clearText: {
    color: '#2196F3',
    fontSize: 16,
  },
  searchButton: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Header;
