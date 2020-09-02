import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default function Payments({ navigation, route }) {
  const [title] = useState(route.params.title)
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, [])

  if (loading) {
    return (
      <View style={{ backgroundColor: '#171717', height: '100%', justifyContent: 'center' }}>
        <Text style={{ color: '#d9d9d9', fontSize: 30, fontWeight: '700', paddingTop: 50, paddingLeft: 40, marginBottom: 15 }}>
          Processing your ticket..
        </Text>
      </View>
    )
  }

  return (
    <View style={{ justifyContent: 'center', backgroundColor: '#171717', alignItems: 'center', height: '100%' }}>
      <View style={{ width: '50%', height: 350 }}>
        <View style={{ backgroundColor: '#fbe077', flex: 1, borderTopLeftRadius: 25, borderTopRightRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 70, fontWeight: '700', marginTop: 10 }}>20</Text>
          <Text style={{ fontSize: 30, fontWeight: '700' }}>MIN</Text>
          <View style={{ flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20, paddingRight: 50, paddingLeft: 50 }}>
            <Icon name='ios-megaphone' size={20} color='#323232' />
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#323232', marginLeft: 10, textAlign: 'center' }}>{ title }</Text>
          </View>
        </View>
        <View style={{ borderTopWidth: 5 }}>
          <View style={{ width: '100%', height: 100, backgroundColor: 'white', borderBottomRightRadius: 25, borderBottomLeftRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground source={require('../assets/barcode.jpg')} style={{ width: 175, height: 80, borderBottomRightRadius: 25, borderBottomLeftRadius: 25  }} />
          </View>
        </View>
      </View>
      <Text style={{ color: '#d8d8d8', fontSize: 30, fontWeight: '700', textAlign: 'center', marginRight: 90, marginLeft: 90, marginTop: 50 }}>Your ticket was successfully purchased!</Text>
      <View style={{ flexDirection: 'row', marginTop: 80, justifyContent: 'center', alignItems: 'center' }}>
        <Icon name='ios-hand' size={30} color='#fbe077' style={{ transform: [{ rotate: '45deg' }] }} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fbe077', marginLeft: 15 }}>GOOD LUCK</Text>
      </View>
      <TouchableWithoutFeedback onPress={() => { navigation.navigate('Home') }}>
        <View style={{ backgroundColor: '#fbe077', position: 'absolute', bottom: 0, right: 0, height: 80, width: 80, borderTopLeftRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name='md-navigate' size={50} color='#171717' />
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
} 