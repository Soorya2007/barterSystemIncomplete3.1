import React,{Component} from 'react' ;
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';

import db from '../config';
import firebase from 'firebase';

export default class ExchangeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            itemName : '',
            itemDescription : '',
            userName : ''
        }
    }

    addItem=(itemName,itemDescription)=>
    {
          var userName = this.state.userName;
          db.collection('exchange_requests').add
          ({
              'username' : userName,
              'item_name' : itemName,
              'item_description' : itemDescription
          })
          this.setState
          ({
              itemName : '',
              itemDescription : '',
          })
          return Alert.alert('Item Ready To Exchange','',[{text:'Ok' , onPress:()=>{
            this.props.navigation.navigate('HomeScreen')
          }
          }]);
    }

}