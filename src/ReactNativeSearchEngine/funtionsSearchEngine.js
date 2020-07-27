import { filter, isEmpty, get } from 'lodash';

export const onChangeExecute = elements => {
  const {
    isArrayObject,
    text,
    searchKey,
    data,
    onChangeElement,
    showAllMode,
  } = elements;
  // Find elements
  const elementObject = filterArray({
    search: text,
    searchKey,
    data,
    isArrayObject,
    showAllMode,
  });
  if (elementObject.length > 0 && text.length > 0) {
    onChangeElement({ data: elementObject, value: text });
  }
  if (elementObject.length > 0 && showAllMode) {
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
  const { search, searchKey, data, isArrayObject, showAllMode, showAll } = elements;
  try {
    const dataFilder = filter(data, (element, key) => {
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
    
    if ((isEmpty(search) && dataFilder.length === 0 && showAllMode) || showAll) {
      return data;
    }

    return dataFilder;
  } catch (error) {
    // Doesn't support this symbols "+,(,),*,?,\,["
    return [];
  }
};
