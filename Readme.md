
# React Native Search Engine
### It is a type of search engine like the "html5's browsers input", it can be used to auto-complete words or to search for elements within an array or object.

<p align="center">
    <img src="https://i.ibb.co/Bc8C8St/Whats-App-Image-2020-07-18-at-11-00-19-AM.jpg" width="200" alt="accessibility text">
    <img src="https://i.ibb.co/n87tTD6/Whats-App-Image-2020-07-18-at-10-52-20-AM.jpg" width="200" alt="accessibility text">
    <img src="https://i.ibb.co/XY8NYHQ/Whats-App-Image-2020-07-18-at-10-58-51-AM.jpg" width="200" alt="accessibility text">
</p>
 
------------ 

## Documentation

### React Native Search Engine  Component

| Name                      | Description                              | Default     | Type    | Criterion |
|---------------------------|------------------------------------------|-------------|---------|-----------|
| searchKey                 | If you are working with an array of objects and you want to search by a specific property that all objects have in common, can put something like 'user.name'  | ""         | String  |  Optional |
| value                     | If you want me to submit an initial search  | ""       | String  |  Optional |
| data                      | The data to searching                    | [ ]         | Array   | Optional  |
| textInfoStyle             | Text information styles                  | { }         | Object  | Optional  |
| buttonEnabled             | If you want show or not the button       | true        | Boolean | Optional  |
| showAllMode               | If you want  to show all options when it can't find anything | false       | Boolean | Optional  |
| showNothing               | Doesn't show the options, but the onChange Element gives me the filtered data | false       | Boolean | Optional  |
| textInputStyle            | Input text styles                        | { }         | Object  | Optional  |
| placeholder               | Help text                                | 'Search'    | String  | Optional  |
| containerInputStyle       | Styles of input text containing          | { }         | Object  | Optional  |
| containerScrollStyle      | Text tag container stylesl               | { }         | Object  | Optional  |
| containerTextInfoStyle    | Styles of information text containing    | { }         | Object  | Optional  |
| containerButtonStyle      | Options display styles                   | { }         | Object  | Optional  |
| containerIconStyle        | Icon Styles                              | { }         | Object  | Optional  |
| onChangeElement           | Get the text or object                   | onChangeElement={object => setOption(object)} | Function  | Optional  |
| customizeComponentInput   | Used to return an input component        | ({ search, setSearch }) => < CustomizeComponentInput/> | Function  | Optional  |
| customizComponenteResult  | It is used to return an output component | ({ valueResult, element }) => < CustomizComponenteResult/> | Function | Optional  |
| customIcon                | This is used to customize the icon       | () => < CustomIcon/> | Function | Optional  |

------------ 




## Warning 
### Strings beginning with the following characters will not be found:


|      |               |    Characters
|------|---------------|-------------------|
| 1    |               | +                 |
| 2    |               | :                 |
| 3    |               | (                 |
| 4    |               | *                 |
| 5    |               | ?                 |
| 6    |               | \                 |
| 7    |               | [                 |
| 8    |               | .                 |
| 9    |               | ^                 |
| 10   |               | \|                |
| 11   |               | )                 |





------------ 
## How Implement

<img src="https://i.ibb.co/17sgZVJ/image.png" width="200" alt="accessibility text">



### Simpler way

<p align="center">
    <img src="https://i.ibb.co/tq5RRBc/Simpler-way0.jpg" width="200" alt="accessibility text">
    <img src="https://i.ibb.co/b1dVm8V/Simpler-way1.jpg" width="200" alt="accessibility text">
    <img src="https://i.ibb.co/DGYx0QY/Simpler-way-0-1.jpg" width="200" alt="accessibility text">
    <img src="https://i.ibb.co/SVLR0jH/Simpler-way2.jpg" width="200" alt="accessibility text">
</p>
 

```JS  
     <SearchEngine
      data={data}
      searchKey={'properties.emails.0'}
      onChangeElement={object => setOption(object)}
      buttonEnabled={true}
      placeholder={'email'}
    />
```
### Complexer way

<p align="center">
    <img src="https://i.ibb.co/c6G1VNJ/Complexer-way1.jpg" width="200" alt="accessibility text">
</p>

``` JS
    import { Icon } from 'native-base';
```

```JS
    <SearchEngine
      data={data}
      searchKey={'properties.emails.0'}
      onChangeElement={object => setOption(object)}
      buttonEnabled={true}
      placeholder={'email'}
      containerIconStyle={styles.containerIconStyle}
      containerInputStyle={styles.containerInputStyle}
      containerScrollStyle={styles.containerScrollStyle}
      containerTextInfoStyle={styles.containerTextInfoStyle}
      containerButtonStyle={styles.containerButtonStyle}
      customIcon={() => <Icon name="arrow-down" />}
    />
```

### Custom way
<p align="center">
    <img src="https://i.ibb.co/0DGjm03/Custom-way.jpg" width="200" alt="accessibility text">
</p>

```JS
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
    
```

```JS

    const customizeInput = properties => {
        const { search, setSearch } = properties;
        return (
            <Item rounded style={styles.containerInput}>
                <Input
                    style={styles.input}
                    value={search}
                    placeholder="email"
                    autoCorrect={false}
                    onChangeText={value => setSearch(value)}
                    autoCapitalize="words"
                    autoCompleteType="off"
                />
            </Item>
        );
    };

```

```Js

    <SearchEngine
      data={data}
      searchKey={'properties.emails.0'}
      onChangeElement={object => setOption(object)}
      placeholder={'email'}
      buttonEnabled={false}
      customizeComponentInput={properties => customizeInput(properties)}
      customizComponenteResult={properties => customizeResult(properties)}
    />
```
------------ 

## Example
[EXAMPLE CODE](./Example.md)

------------ 


<div align="center">
 <a href="https://paypal.me/jsnavarroc">
 <H2>Donation</H2>
    <img src="https://fitsmallbusiness.com/wp-content/uploads/2018/01/Paypal-Working-Capital-Reviews-150x150.png" width="70" alt="accessibility text">
 </a>
</div>

 >> [Make a donation](https://paypal.me/jsnavarroc)
------------ 

## Author
Johan Navarro  | [https://johannavarro.com](https://d9tfdj43jyndf.cloudfront.net/)

------------ 

## License
[GNU &copy;](./LICENSE) 