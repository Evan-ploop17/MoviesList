import React from 'react'
import { Cast } from '../interfaces/creditsInterface'
import { Image, StyleSheet, Text, View } from 'react-native'

interface Props {
  actor: Cast;
}

export const CastItem = ({ actor }: Props) => {

  const {
    character,
    id,
    name,
    profile_path
  } = actor || {}

  const uri = `https://image.tmdb.org/t/p/w500/${profile_path}`

  return (
    <View style={styles.container} >
      {
        profile_path && (
          <Image
            source={{ uri }}
            style={{width: 50, height: 50, borderRadius: 10}}
          />
        )
      }
      
      <View style={styles.actorInfo} >
        <Text style={{ fontSize: 18, fontWeight: 'bold' }} > {name} </Text>
        <Text style={{ fontSize: 16, opacity: 0.7 }} > {character} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 8,
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { height: 5, width: 0 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  actorInfo: {
    marginLeft: 10,
  }
})