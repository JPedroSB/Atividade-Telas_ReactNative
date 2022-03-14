import React from 'react';
import {View,
        Text,
        TextInput,
        StyleSheet,
        SafeAreaView,
        StatusBar,
        TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto'

function Login({navigation}){
    return(
      <SafeAreaView style = {{flex:1}}>
        <View style = {[styles.container]}>
          <View style = {[styles.iconContainer]}>
            <Icon style = {[styles.iconOne]} name ='search' size={25} color='black'/>
          </View>
          <TouchableOpacity style = {[styles.iconContainer]}
            onPress = {() =>
                navigation.navigate("HomeIN")}><Icon style = {[styles.iconTwo]} name ='arrow-left' size={25} color='black'/></TouchableOpacity>
          <View style = {[styles.line]}></View>
          <View style = {[styles.containerOne]}></View>
          <View style = {[styles.containerTwo]}>
           <View style = {[styles.boxOne]}>
             <Text style = {[styles.textName]}>Your Name</Text>
           </View>
           <View style = {[styles.boxTwo]}>
             <View style = {[styles.littleBox]}><Icon name='messenger' size={30} color='black'/></View>
             <View style = {[styles.littleBox]}><Icon name='commenting' size={30} color='black'/></View>
           </View>
           <View style = {[styles.boxThree]}>
             <Text style = {[styles.marginLeft]}>Your basic info 1</Text>
             <Text style = {[styles.marginLeft, styles.marginTop]}>Your basic info 2</Text>
           </View>
           <View style = {[styles.boxFour]}>
             <Text style = {[styles.finalLineText]}>ABOUT</Text>
             <Text style = {[styles.finalLineText]}>PHOTOS</Text>
             <Text style = {[styles.finalLineText]}>FRIENDS</Text>
           </View>
          </View>
          <View style = {styles.containerThree}></View>
        </View>
      </SafeAreaView>
    );

};
  const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    iconContainer: {
        marginLeft: 0,
        padding: 6,
        backgroundColor: '#3B5998',
    },

    iconOne: {
        marginLeft: 55,
        color: 'white',
        marginTop: 10
    },

    iconTwo: {
        marginTop: -38,
        color: 'white',
        marginLeft: 5,
    },

    line: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginLeft: 60,
        marginRight: 20,
        marginTop: -10,
        marginBottom: 8,
    },

    containerOne: {
        flex: 1.8,
        backgroundColor: '#bfc4dc',
    },

    containerTwo: {
        flex:3.2,
        alignItems: 'center',
    },

    containerThree: {
        width: '25.5%',
        height: 160,
        backgroundColor: '#dfe1ee',
        position: 'absolute',
        marginTop: 280,
        marginLeft: '30%',
        borderColor: '#fff',
        borderWidth: 3,
    },

    boxOne: {
        flex: 4,
        width: '90%',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    boxTwo: {
        flex: 1.3,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%'
    },

    boxThree: {
        flex: 1.8,
        backgroundColor: '#fff',
        borderTopColor: 'lightgrey',
        borderTopWidth: 1,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxFour: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#f5f5f5',
    },

    textName: {
        color: '#000',
        fontSize: 33,
        marginBottom: 20
    },

    littleBox: {
        width: 35,
        height: 30,
    },

    marginLeft: {
        marginRight: 130,
        fontSize: 16,
    },

    finalLineText: {
        fontWeight: 'bold',
        fontSize: 19
    }



 });

export default Login;