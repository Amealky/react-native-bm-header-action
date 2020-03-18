import React, {Component} from 'react';

import {StyleSheet, View, Text, Platform} from 'react-native';


import BmIconButton from 'react-native-bm-icon-button';


class BmHeaderAction extends Component {

  constructor(props) {
    super(props);

  }

  render () {

     return (
          <View style={[styles.headerStyle, this.props.style]}>

          <BmIconButton style={[styles.buttonMenu, this.props.buttonStyle]} iconStyle={[styles.buttonMenuIcon, this.props.buttonIconStyle]} icon={this.props.menuIcon}/>

            <Text style={[styles.titleStyle, this.props.titleStyle]}>
            {this.props.title ?  (
              this.props.title )
              : (
                ""
              )
            }</Text>
          </View>
     );
   }

 }

 const styles = StyleSheet.create({

    headerStyle : {
            width: "100%",
            height: 70,
            flexDirection: 'row',
            backgroundColor: "#003663",
    },
    buttonMenuIcon : {
      margin: 20,
      marginTop: 20,
      height: 30,
      width: 30,
      tintColor: "white",
    },
    buttonMenu : {
      alignItems: 'center',
      height: 70,
      backgroundColor: "#e7276D",
    },
    titleStyle : {
      width: '65%',
      marginTop: 0,
      alignSelf: 'center',
      textAlign: 'center',
      color: "white",
    }


 });


export default BmHeaderAction;
