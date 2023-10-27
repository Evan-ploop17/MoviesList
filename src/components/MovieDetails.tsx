import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { MovieFull } from '../interfaces/movideDB'
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[]
}

export const MovieDetails = ({movieFull, cast}: Props) => {

    const {
        budget,
        genres,
        overview,
        vote_average,
    } = movieFull || {   }

  return (
    <>
        {/* Detalles */}
        <View style={{marginHorizontal: 20}} >

            <View style={{flexDirection: 'row'}} >
                <Icon
                    name='star-outline'
                    color='grey'
                    size={16}
                />
                <Text> {vote_average} </Text>

                <Text style={{marginLeft: 5}} >
                    - { genres?.map( genre => genre.name ).join(', ') }
                </Text>

            </View>

            <Text style={{ fontSize: 23, marginTop: 20, fontWeight: 'bold'}}>
                Historia
            </Text>
            <Text style={{fontSize: 16}} >{overview}</Text>


            <Text style={{ fontSize: 23, marginTop: 20, fontWeight: 'bold'}}>
                Presupuesto
            </Text>
            <Text style={{fontSize: 18}} >
                {new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(budget)}
            </Text>
        </View>

        {/* Casting */}
        <View style={{marginTop: 10}}>
            <Text 
                style={{ 
                    fontSize: 23, 
                    marginTop: 20, 
                    fontWeight: 'bold', 
                    marginHorizontal: 16
                }}
            > Actores </Text>

            <FlatList
                data={cast}
                horizontal={true}
                keyExtractor={({id}) => id.toString()}
                renderItem={({item}) => <CastItem actor={item} />}
                showsHorizontalScrollIndicator={false}
                style={{marginTop: 10, paddingVertical: 16}}
            />
        </View>

    </>
  )
}