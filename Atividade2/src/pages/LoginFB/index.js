import React from 'react';
import {SafeAreaView,
        View,
        Text,
        Button,
        StyleSheet,
        TextInput,
        StatusBar,
        TouchableOpacity} from 'react-native';

function Facebook({navigation}){
    return(
      <SafeAreaView style = {{flex:1}}>
       <StatusBar hidden />
        <View style = {styles.container}>
          <Text style = {[styles.title]}>facebook</Text>
          <TextInput
            style={styles.input}
            placeholder='email or phone'
            clearButtonMode='always'/>
          <TextInput
            style={styles.input}
            placeholder='password'
            clearButtonMode='always'/>
          <TouchableOpacity
          style = {styles.button}
            onPress = { () =>
             navigation.navigate('Facebook')}>
            <Text style={[styles.textButton]}>Log in</Text>
          </TouchableOpacity>
          <Text style = {[styles.finalText]}>sign um for facebook</Text>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3B5998',
    },

    title: {
        fontSize: 46,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 40,
        marginTop: 170
    },

    input:{
        width: '80%',
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#DCDCDC'
    },

    textButton: {
          fontSize: 16,
          color: '#fff',
          fontWeight: 'bold',
    },

    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#2F477A',
        borderColor: "#3B5998",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textButton: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
    },

     finalText: {
        fontSize: 14,
        color: '#DCDCDC',
        marginTop: 200,
     }
  });

export default Facebook;