import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet, TextInput, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';

function HomeIN({ navigation }) {
    return (
        <SafeAreaView style = {{flex: 1}}>
        <View style = {{flex:1}}>
        <LinearGradient
            colors={["#FF6347", "#E32636","#FF007F","#C71585", "#8B008B"]}
            style = {styles.container}>
                <View styles = {styles.secondContainer}>
                    <TouchableOpacity style = {[styles.littleContainer, styles.margin]}><Icon name ='options-vertical' size={23} color='white'/></TouchableOpacity>
                    <TouchableOpacity style = {[styles.iconContainer, styles.marginTwo]}><Icon name='question' size={23} color='white'/></TouchableOpacity>
                </View>
                <TouchableOpacity style = {[styles.iconsContainer]}><Icon name ='lock' size={23} color='white'/></TouchableOpacity>
                <Text style = {styles.textButtonColor, styles.marginTop, styles.textSize}>Enter the code sent to your number ending in 8691 or use your Backup Codes.</Text>
                <Text style = {styles.text, styles.textButtonColor}>It many take few moments to receive SMS.</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Two-Factor code'
                    placeholderTextColor={'#C0C0C0'}
                    clearButtonMode='always'/>
                <Text style = {[styles.textButtonColor, styles.textPosition]}>What is it?</Text>
                <TouchableOpacity
                    style = {[styles.buttonOne]}
                    onPress = { () =>
                     navigation.navigate('LoginFB')}>
                     <Text>Login with Instagram</Text>
                </TouchableOpacity>
                <Text style = {[styles.textButtonColor]}>Back to Login</Text>
                <View style = {[styles.buttonNone]}>
                    <Text style = {[styles.textButtonColor]}>or</Text>
                </View>
                <TouchableOpacity
                    style={[styles.buttonTwo, styles.marginTop]}
                    onPress = { () =>
                     navigation.navigate('Facebook')}>
                    <Text style = {[styles.textButtonColor]}>Respost without login</Text>
                </TouchableOpacity>
        </LinearGradient>
        </View>
        </SafeAreaView>
    );
}
    const styles = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
            },

            secondContainer: {
                width: 200,
                height: 50,
                backgroundColor: 'blue',
                flexDirection: 'row',
                justifyContent: 'flex-end',
            },

            littleContainer: {
                width: 50,
                height: 50,
                marginHorizontal: '-33%',
            },

            iconContainer: {
                width: 50,
                height: 50,
                marginHorizontal: '-33%',
            },

            iconsContainer: {
                marginBottom: 10,
            },

            input: {
                width: 350,
                height: 50,
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 15,
                marginTop: 10,
                borderColor: '#C0C0C0',
                opacity: 0.7,
                fontSize: 20,
                marginBottom: 2
            },

            buttonOne: {
                width: 350,
                height: 45,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
                marginBottom: 7,
            },

            buttonTwo: {
                width: 350,
                height: 45,
                backgroundColor: '#7F2750',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: '#C71585',
            },

            buttonNone: {
                width: 35,
                height: 35,
                backgroundColor: '#7F2750',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 25,
                marginBottom: 10,
            },

            textButtonColor: {
                color: 'white',
            },

            textSize: {
                fontSize: 12,
                textAlign: 'center',
                color: 'white',
                marginBottom: 15,
                marginLeft: 30,
                marginRight: 30,
            },

            textPosition: {
                marginLeft: '65%',
                marginBottom: 10,
            },

            margin: {
                marginLeft: 200,
                marginTop: 10,
                marginBottom: -5,
            },

            marginTwo: {
                marginTop: -45,
                marginLeft: 140,
            },

    });
export default HomeIN;