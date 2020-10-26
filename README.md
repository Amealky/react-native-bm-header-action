<h1 align="center"> react-native-bm-header-action :iphone:</h1>

<p align="center">
<img src="https://img.shields.io/badge/platform-android-green.svg" />
<img src="https://img.shields.io/badge/platform-iOS-blue.svg" />
<img src="https://img.shields.io/badge/language-Javascript-orange.svg" />
<img src="https://img.shields.io/badge/License-MIT-blue" />
</p>

## Preview
![Preview](http://metautbenjamin.com:3000/file/image/rn_mb_header.png)


React native module to add a button icon (with text or not)
## Getting started

`$ npm install react-native-bm-header-action --save`

### Mostly automatic installation

`$ react-native link react-native-bm-header-action`

## How to use
Start by adding
```javascript
import BmHeaderAction from 'react-native-bm-header-action';
```

then use like this :
```javascript
<BmHeaderAction style={styles.headerStyle}
  title={this.props.title}
  buttonStyle={styles.buttonStyle}
  buttonIconStyle={styles.buttonIconStyle}
  titleStyle={styles.titleStyle}
  menuIcon={require("../icons/home.png")}
  buttonAction={this.onClick}/>
```
## Properties
| Prop  | Default  | Type | Description | Optional |
| --- | --- | --- | --- | --- |
| style | `width: 100%` | `style object`| Change the default style of the base button | yes
| title | - | `string` | Add a title in the header | yes
| buttonStyle | - | `style object` | Change the default style of action button | yes
| buttonIconStyle | - | `style object` | Change the default style of the action icon | yes
| titleStyle | - | `style object` | Change the default style of the title | yes
| menuIcon | - | `icon like `require('../myicon.png')` or variable contain it`| Add the icon to the button | yes
| buttonAction | - | `function` | Add a callback function to the button | yes

Enjoy :)
