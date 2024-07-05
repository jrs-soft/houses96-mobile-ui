import React from 'react';
import { Text, SafeAreaView, StyleSheet, SectionList, View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

const settingsData = [
  {
    title: 'Conta',
    data: [
      { key: '1', title: 'Informações Pessoais' },
      { key: '2', title: 'Segurança' },
    ],
  },
  {
    title: 'Preferências',
    data: [
      { key: '3', title: 'Notificações' },
      { key: '4', title: 'Privacidade e Compartilhamento' }
    ],
  },
  {
    title: 'Suporte',
    data: [
      { key: '5', title: 'Centro de Ajuda' },
      { key: '6', title: 'Fale Conosco' },
      { key: '7', title: 'Feedback' },
    ],
  },
];

const SettingsScreen = () => {
  const renderItem = ({ item }) => (
    <ListItem bottomDivider onPress={() => console.log(item.title)}>
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
      </ListItem.Content>
      <Icon name="chevron-right" type="feather" />
    </ListItem>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={settingsData}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SettingsScreen;
