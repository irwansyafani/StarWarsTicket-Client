import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FilmCard = ({ episode_id, title, status, price, minutes }) => {
  const [anyBooked, setAnyBooked] = useState(0)
  const [alignPrice, setAlignPrice] = useState(0)
  const [bgColor, setBgColor] = useState('#323232')
  const [priceColor, setPriceColor] = useState('#d8d8d8')
  const [detailColor, setDetailColor] = useState('#727272')

  useEffect(() => {
    if (status) {
      setAlignPrice(50)
      setBgColor('#fbe077')
      setPriceColor('#171717')
      setDetailColor('#171717')
      setAnyBooked(anyBooked + 1)
    } else {
      setAlignPrice(0)
      setBgColor('#323232')
      setPriceColor('#d8d8d8')
      setDetailColor('#727272')
    }
  },  [status])

  return ( /* #323232 #fbe077 || #d8d8d8 #171717 || #727272 #171717 */
    <View style={{ height: 150, width: '100%', marginLeft: 40, marginTop: 20, borderRadius: 25, flexDirection: 'row' }}>
      <View style={{ flex: 1, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, borderStyle: 'dotted', borderRightWidth: 5 }}>
        <View style={{ backgroundColor: bgColor, flex: 1, borderTopLeftRadius: 20, borderBottomLeftRadius: 20,flexDirection: 'row', justifyContent: 'center' }}>
          { status &&
          <View style={{ backgroundColor: '#171717', width: 50, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 25, marginTop: 50, marginRight: 10 }}>
            <Icon name='ios-checkmark' color='#fbe077' size={50} />
          </View>
          }
          <View style={{ paddingTop: 50, paddingRight: alignPrice }}>
            <Text style={{ color: detailColor, fontSize: 18, fontWeight: '700', textAlign: 'center' }}>{ minutes } MIN</Text>
            <Text style={{ color: priceColor, fontSize: 25, fontWeight: '700', textAlign: 'center' }}>${ price }</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 2, backgroundColor: bgColor, justifyContent: 'center' }}>
        <Text style={{ color: '#727272', fontSize: 18, textAlign: 'right', paddingRight: 50}}>Episode {episode_id}</Text>
        <Text style={{ color: '#727272', fontSize: 20, textAlign: 'right', fontWeight: '500', paddingRight: 50 }}>{ title }</Text>
      </View>
    </View>
  );
}

export default FilmCard;
