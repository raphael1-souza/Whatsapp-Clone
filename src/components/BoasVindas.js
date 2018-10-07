import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  ImageBackground,
  Image,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux';


export default props => (
    <ImageBackground  style={{width: '100%', height: '100%'}} source = {require('../imgs/bg.png')} >
    <View style={{flex:1,padding:15}}>
        <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,color:'#fff'}}>Seja Bem-Vindo</Text>
            <Image source={require('../imgs/logo.png')}/>
        </View>

        <View style={{flex:1}}>
            <Button title='Fazer Login' onPress={()=>Actions.formLogin()}/>
        </View>
    </View>
    </ImageBackground>
);