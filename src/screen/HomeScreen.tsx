import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Dimensions, FlatList, Text, View, ScrollView } from 'react-native'

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getImageColors';
import { GradientContext } from '../context/GradientContext';

const { width: windowWidth } = Dimensions.get('window')


export const HomeScreen = () => {

  const {isLoading, nowPlaying, popular, topRated, upComing} = useMovies()
  const {top} = useSafeAreaInsets()

  const { setMainColor } = useContext(GradientContext)

  useEffect(() => {
    if(nowPlaying.length > 0){
      getPosterColor(0)
    }
  }, [nowPlaying])


  const getPosterColor = async (index: number) => {
    const movie = nowPlaying[index]
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const [primary = 'black', secondary = 'grey'] = await getImageColors(uri)
    setMainColor({ primary, secondary})
  }

  if(isLoading){
    return(
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center'
        }}
      >
        <ActivityIndicator color={'black'} size={50}/>
      </View>
    )
  }

  return (
    <GradientBackground>
      
      <ScrollView>
        <View
          style={{
            marginTop: top
          }}
        >
          {/* Peliculas en cartelera */}
          <View style={{height: 440}} >
            <Carousel
              data={nowPlaying}
              itemWidth={ 300 }
              renderItem={({item}) => <MoviePoster movie={item} />}
              sliderWidth={ windowWidth }
              inactiveSlideOpacity={0.9} // PAra que la opacidad de las tarjetas de al lado no deje que se vea la sombra de la actual
              onSnapToItem={ index => getPosterColor(index)  }
            /> 
          </View>

          {/* Peliculas populares */}
          <HorizontalSlider title='Populars' movie={popular} />
          {/* Peliculas topRated */}
          <HorizontalSlider title='Top Rated' movie={topRated} />
          {/* Peliculas upComing */}
          <HorizontalSlider title='Upcoming' movie={upComing} />
          
        </View>
      </ScrollView>
    </GradientBackground>
  )
}