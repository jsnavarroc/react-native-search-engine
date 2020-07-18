
# React Native Search Engie

<p align="center">
    <img src="https://i.ibb.co/Bc8C8St/Whats-App-Image-2020-07-18-at-11-00-19-AM.jpg" width="200" alt="accessibility text">
    <img src="https://i.ibb.co/n87tTD6/Whats-App-Image-2020-07-18-at-10-52-20-AM.jpg" width="200" alt="accessibility text">
    <img src="https://i.ibb.co/XY8NYHQ/Whats-App-Image-2020-07-18-at-10-58-51-AM.jpg" width="200" alt="accessibility text">
</p>

## Documentation

### Progress Steps Component
| Name                      | Description                              | Default     | Type    | Criterion |
|---------------------------|------------------------------------------|-------------|---------|-----------|
| searchKey                 | Width of the progress bar between steps  | " "         | String  |  Optional |
| data                      | Type of border for the progress bar      | { }         | Object / Array  | Required  |
| textInfoStyle             | Text information styles                  | { }         | Object  | Optional  |
| textInputStyle            | Input text styles                        | { }         | Object  | Optional  |
| containerInputStyle       | Styles of input text containing          | { }         | Object  | Optional  |
| containerScrollStyle      | Color of the active step icon            | { }         | Object  | Optional  |
| containerTextInfoStyle    | Styles of information text containing    | { }         | Object  | Optional  |
| customizeComponentInput   | Color of the disabled step icon          | ({ search, setSearch }) => < CustomizeComponentInput/> | Function  | Optional  |
| customizComponenteResult  | Font family for the step icon label      | ({ valueResult, element }) => < CustomizComponenteResult/> | Function | Optional  |


## How Implement
### Simpler way
```    
    <SearchEngine data={arrayData} />
```
### Complexer way
``` 
   <SearchEngine
      data={dataObject}
      searchKey={'properties.emails.0'}
      textInfoStyle={styles.textInfoStyle}
      textInputStyle={styles.textInputStyle}
      containerInputStyle={styles.containerInputStyle}
      containerScrollStyle={styles.containerScrollStyle}
      containerTextInfoStyle={styles.containerTextInfoStyle}
    />
```
### Custom way
``` 
   <SearchEngine
      data={dataObject}
      searchKey={'properties.emails.0'}
      containerScrollStyle={styles.containerScrollStyle}
      customizeComponentInput={properties => customizeInput(properties)}
      customizComponenteResult={properties => customizeResult(properties)}
    />
```


## Example
[EXAMPLE CODE](./Example.md)

## Donation

<p align="left">
 <a href="paypal.me/jsnavarroc">
    <img src="https://i.ibb.co/Zh7hwfF/paypal-icon.png" width="60" alt="accessibility text">
    <p align="left">click on the image</p>
 </a>
</p>

## Author
Johan Navarro  | [https://johannavarro.com](https://d9tfdj43jyndf.cloudfront.net/)

Copyright (c)

## License
[MIT](./LICENSE)