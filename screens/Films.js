import axios from 'axios'
import React, {
  useState,
  useEffect
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import FilmCard from '../components/FilmCard'

const Films = ({ navigation }) => {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true)
  const [ticket, setTicket] = useState(null)

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://swapi.dev/api/films/?format=json',
    })
      .then(({ data }) => {
        let result = data.results.sort((a, b) => b.episode_id - a.episode_id)
        result.map(el => { el['booked'] = false })
        setFilms(result)
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false))
    }, [])
    
  useEffect(() => {
    let ticketId = films.find(f => f.booked)
    if (ticketId) setTicket(ticketId.episode_id)
    else setTicket(null)
  }, [films])

  const booking = (id) => {
    let bookFilm = films.map(el => { 
      if (el.episode_id === id) {
        el.booked = !el.booked
      } else {
        el.booked = false
      }
      return el
    })
    setFilms(bookFilm)
  }

  const buyATicket = (id) => {
    let film = films.find(f => f.episode_id === id)
    navigation.navigate('Payments', {
      title : film.title
    })
  }

  if (loading) {
    return (
      <View style={{ backgroundColor: '#171717', height: '100%', justifyContent: 'center' }}>
        <Text style={{ color: '#d9d9d9', fontSize: 40, fontWeight: '700', paddingTop: 50, paddingLeft: 40, marginBottom: 15 }}>
          Fetching..
        </Text>
      </View>
    )
  }

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#171717' }}>
          <Text style={{ color: '#d9d9d9', fontSize: 40, fontWeight: '700', paddingTop: 50, paddingLeft: 40, marginBottom: 15 }}>Choose ticket</Text>
          <View>
            { films.map((film) => (
              <TouchableOpacity onPress={() => booking(film.episode_id)} key={film.episode_id}>
                <FilmCard episode_id={film.episode_id} title={film.title} status={film.booked} price={2.95} minutes={20} />
              </TouchableOpacity>
              ))
            }
          </View>
      </ScrollView>
      { ticket &&
        <View style={{ borderWidth: 0, flex: 1, position: 'absolute', bottom: 0, right: 0, width: '90%', height: 160 }}>
            <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '#171717', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, justifyContent: 'center', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <Icon name='ios-warning' color='#fbe077' size={40} />
              <View>
                <Text style={{ color: '#727272', fontSize: 16 }}>Your ticket will be activated</Text>
                <Text style={{ color: '#727272', fontSize: 16 }}>automatically after purchase</Text>
              </View>
            </View>
            <TouchableWithoutFeedback onPress={() => { buyATicket(ticket) }}>
              <View  style={{ flex: 1, backgroundColor: '#fbe077', borderTopLeftRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#171717', fontSize: 20, fontWeight: '700' }}>BUY TICKET</Text>
              </View>
            </TouchableWithoutFeedback>
        </View>
      }
    </View>
  );
}

export default Films;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center',
  },
});