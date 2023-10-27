import React from 'react'
import { 
  ActivityIndicator, 
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
// import Icon from 'react-native-vector-icons/dist/Ionicons'

import { RootStackParams } from '../navigation/Navigation'
import { useMovieDetail } from '../hooks/useMovieDetail'
import { MovieDetails } from '../components/MovieDetails'

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const { height } = Dimensions.get('window')

export const DetailScreen = ({
  route,
  navigation,
}: Props) => {

  const movie = route.params
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  const { isLoading, cast, movieFull } = useMovieDetail(movie.id)

  return (

    <ScrollView
      contentContainerStyle={{
        paddingBottom: 32,
      }}
    >
      <View style={styles.imageContainer} >
        <View style={styles.imageBoder}>
          <Image
            source={{
              uri
            }}
            style={styles.posterImage}
          />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.title} >{movie.original_title}</Text>
        <Text style={styles.subtitle} >{movie.title}</Text>
      </View>

      {
        isLoading && <ActivityIndicator size={35} color='grey' style={{marginTop: 20}} />
      }
      <MovieDetails movieFull={movieFull!} cast={cast} />


      <View style={styles.backButton} >
        <TouchableOpacity onPress={() => navigation.pop()} >
          <Icon
            color='white'
            name='arrow-back-outline'
            size={38}
          />
        </TouchableOpacity>
      </View>

      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    elevation: 10,
    height: height * 0.7,
    shadowColor: "#000",
    width: '100%',
    shadowOffset: {
        height: 5,
        width: 0,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  imageBoder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.8  
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  backButton: {
    elevation: 1,
    left: 16,
    position: 'absolute',
    top: 16,
    zIndex: 1,
  }
})