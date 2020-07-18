# How is it used
```
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card, CardItem, Input, Item } from 'native-base';

import colors from '../../../utils/colors';
import SearchEngine from 'react-native-search-engine';


const data = [
  {
    name: 'Johan Navarro',
    ciudad: 'Manizales',
    properties: {
      phones: [3166996468, 786212256],
      emails: ['email1@gmail.com'],
    },
  },
  {
    name: 'Andres',
    ciudad: 'Medellín',
    properties: {
      phones: [3166996467, 786212255],
      emails: ['email2@gmail.com'],
    },
  },
  {
    name: 'Kevin',
    ciudad: 'Caldas',
    properties: {
      phones: [3166996466, 786212254],
      emails: ['email3@gmail.com'],
    },
  },
  {
    name: 'Jorge',
    ciudad: 'Cali',
    properties: {
      phones: [3166996465, 786212253],
      emails: ['email4@gmail.com'],
    },
  },
];
const dataArray = ['Manizales', 'Medellín', 'Caldas', 'Viena', 'Valencia'];
const dataArrayInt = [2, 1.3, 1, 4];

const customizeResult = properties => {
  const { valueResult, element } = properties;
  console.log('element>>>', element);
  return (
    <Card style={styles.containerCard}>
      <CardItem style={styles.containerCardResult}>
        <Text>{valueResult}</Text>
      </CardItem>
    </Card>
  );
};
const customizeInput = properties => {
  const { search, setSearch } = properties;
  return (
    <Item rounded style={styles.containerInput}>
      <Input
        style={styles.input}
        value={search}
        placeholder="Ciudad"
        autoCorrect={false}
        onChangeText={value => setSearch(value)}
        autoCapitalize="words"
        autoCompleteType="off"
      />
    </Item>
  );
};

const ExampleSearchAutoComplet = () => {
  return (
    <SearchEngine
      searchKey={'properties.emails.0'}
      data={data}
      textInfoStyle={styles.textInfoStyle}
      textInputStyle={styles.textInputStyle}
      containerInputStyle={styles.containerInputStyle}
      containerScrollStyle={styles.containerScrollStyle}
      containerTextInfoStyle={styles.containerTextInfoStyle}
      customizeComponentInput={properties => customizeInput(properties)}
      customizComponenteResult={properties => customizeResult(properties)}
    />
  );
};

export default ExampleSearchAutoComplet;

const styles = StyleSheet.create({
  input: {
    marginLeft: 12,
  },
  containerInput: {
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 8,
  },
  containerCard: {
    borderRadius: 10,
  },
  containerCardResult: {
    borderRadius: 10,
  },
  containerScrollStyle: {
    maxHeight: '50%',
  },
  textInputStyle: {
    fontSize: 20,
    textAlign: 'left',
  },
  containerInputStyle: {
    borderWidth: 2,
    backgroundColor: '#fff',
    borderColor: 'red',
    borderRadius: 10,
    padding: 12,
  },
  containerTextInfoStyle: {
    borderWidth: 2,
    backgroundColor: '#fff',
    borderColor: 'red',
    borderRadius: 10,
    padding: 12,
  },
  textInfoStyle: {
    fontSize: 20,
    textAlign: 'left',
  },
});


```