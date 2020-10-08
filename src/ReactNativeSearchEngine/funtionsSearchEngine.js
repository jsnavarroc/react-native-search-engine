import { filter, isEmpty, get } from 'lodash';

export const onChangeExecute = elements => {
  const {
    isArrayObject,
    text,
    searchKey,
    data,
    onChangeSearch,
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
    onChangeSearch({ data: elementObject, value: text });
    return { data: elementObject, value: text };
  }
  if (elementObject.length > 0 && showAllMode) {
    onChangeSearch({ data: elementObject, value: text });
    return { data: elementObject, value: text };
  }
  if (elementObject.length === 0) {
    if (isArrayObject) {
      onChangeSearch({ data: [], value: '' });
      return { data: [], value: '' };
    } else {
      onChangeSearch({ data: [], value: '' });
      return { data: [], value: '' };
    }
  }
};


export const filterArray = elements => {
  const {
    search,
    searchKey,
    data,
    isArrayObject,
    showAllMode,
    showAllButton,
  } = elements;
  try {
    // if show All is because is that you want to show all the data when the string does not match any of the elements.
    if (isEmpty(search) && showAllMode) { 
      return data;
    }
    if (showAllButton && showAllMode) {
      return data;
    }
    if (isEmpty(search) && showAllMode && !showAllButton ) { 
      return [];
    }
    if (isEmpty(search) && showAllMode ) { 
      return data;
    }
    if (!showAllMode && showAllButton) { 
      return data;
    }
    const dataFilder = filter(data, (element, key) => {
      let value = '';
      if (isArrayObject) {
        value = searchKey ? get(element, searchKey).toString() : '';
      } else {
        value = element;
      }
      const searchClean = search.toString().replace(/[|^:]/, '');
      const valueClean = value.toString().replace(/[|^:]/, '');
      const doesntFindSymbol = search.toString().search(/[|^:]/) === -1;
      return (
        !isEmpty(searchClean) &&
        doesntFindSymbol &&
        valueClean.toLowerCase().search(searchClean.toLowerCase()) === 0
      );
    });
    return dataFilder;
  } catch (error) {
    // Doesn't support this symbols "+,(,),*,?,\,["
    return [];
  }
};
