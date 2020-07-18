
# React Native Search Engie


![alt text](https://www.bing.com/images/blob?bcid=Tmf0wHd.xpEBmQ)
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
      telefonos: [523, 543],
    },
  },
  {
    name: 'Andres',
    ciudad: 'Medellín',
    properties: {
      telefonos: [223, 543],
    },
  },
  {
    name: 'Kevin',
    ciudad: 'Caldas',
    properties: {
      telefonos: [123, 543],
    },
  },
  {
    name: 'Jorge',
    ciudad: 'Cali',
    properties: {
      phones: [423, 543],
    },
  },
];
const dataArray = ['Manizales', 'Medellín', 'Caldas', 'Cali'];
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
        placeholder="First Phones"
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
      searchKey={'properties.phones[0]'} //place the element path if it is an array of objects
      data={data} // dataArray || dataArrayInt
      customizeResult={properties => customizeResult(properties)}
      customizeInput={properties => customizeInput(properties)}
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
    borderColor: colors.bordersInput,
    borderRadius: 10,
    marginVertical: 8,
  },
  containerCard: {
    borderRadius: 10,
  },
  containerCardResult: {
    borderRadius: 10,
  },
});

```