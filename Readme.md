
# React Native Search Engie

<p align="center">
    <img src="https://i.ibb.co/Bc8C8St/Whats-App-Image-2020-07-18-at-11-00-19-AM.jpg" width="200" alt="accessibility text">
    <img src="https://i.ibb.co/n87tTD6/Whats-App-Image-2020-07-18-at-10-52-20-AM.jpg" width="200" alt="accessibility text">
    <img src="https://i.ibb.co/XY8NYHQ/Whats-App-Image-2020-07-18-at-10-58-51-AM.jpg" width="200" alt="accessibility text">
</p>
 
------------ 

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

------------ 
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

------------ 

## Author
Johan Navarro  | [https://johannavarro.com](https://d9tfdj43jyndf.cloudfront.net/)

------------ 

## License
[GNU &copy;](./LICENSE) 