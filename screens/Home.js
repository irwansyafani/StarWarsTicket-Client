import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Home = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('enter phone number')
  const [bgColor, setBgColor] = useState('#171717')
  const [phColor, setPhColor] = useState('#fbe077')

  useEffect(() => {
    console.clear()
  }, [phoneNumber])

  const navigateToFilm = () => {
    if (phoneNumber.length > 9 && phoneNumber.length < 14) {
      setBgColor('#171717')
      setPhColor('#fbe077')
      setMessage('enter phone number')
      navigation.navigate('Films')
    } else {
      setBgColor(bgColor === '#171717' ? '#fbe077' : '#171717')
      setPhColor(phColor === '#171717' ? '#fbe077' : '#171717')
      setMessage('invalid phone number!')
    }
    setPhoneNumber('')
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, backgroundColor: bgColor, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput style={{ color: phColor, fontWeight: '700', fontSize: 24 }} keyboardType='numeric' placeholder={message} placeholderTextColor={phColor} value={phoneNumber} onChangeText={setPhoneNumber} />
        <TouchableWithoutFeedback onPress={() => {navigateToFilm()}}>
          <View style={{ backgroundColor: phColor, position: 'absolute', bottom: 0, right: 0, height: 80, width: 80, borderTopLeftRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name='md-film' size={50} color={bgColor} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Home;
