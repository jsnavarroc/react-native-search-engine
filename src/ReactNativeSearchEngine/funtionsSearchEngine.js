import { filter, isEmpty, get } from 'lodash';

export const onChangeExecute = elements => {
  const { isArrayObject, text, searchKey, data, onChangeElement } = elements;
  // Find elements
  const elementObject = filterArray({
    search: text,
    searchKey,
    data,
    isArrayObject,
  });
  if (elementObject.length > 0 && text.length > 0) {
    onChangeElement({ data: elementObject, value: text });
  }
  if (elementObject.length === 0) {
    if (isArrayObject) {
      onChangeElement({ data: [], value: '' });
    } else {
      onChangeElement({ data: [], value: '' });
    }
  }
};

export const filterArray = elements => {
  const { search, searchKey, data, isArrayObject } = elements;
  try {
    return filter(data, (element, key) => {
      let value = '';
      if (isArrayObject) {
        value = searchKey ? get(element, searchKey).toString() : '';
      } else {
        value = element;
      }
      const doesntFindSymbol = search.toString().search(/[.|^:]/g) === -1;
      return (
        !isEmpty(search) &&
        doesntFindSymbol &&
        value.toLowerCase().search(search.toLowerCase()) === 0
      );
    });
  } catch (error) {
    // Doesn't support this symbols "+,(,),*,?,\,["
    return [];
  }
};
