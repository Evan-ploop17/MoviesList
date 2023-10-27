import React from 'react'
import { Movie } from '../interfaces/movideDB';
import { FlatList, Text, View } from 'react-native';
import { MoviePoster } from './MoviePoster';

export interface Props {
    title?: string;
    movie: Movie[];
}

export const HorizontalSlider = ({title, movie}: Props) => {
    return (
        <View style={{
                height: title ?  260 : 220
            }}
        >
                {
                    title && <Text style={{fontSize: 30, fontWeight: 'bold'}} >{title}</Text>
                }
                
                <FlatList
                    data={movie}
                    renderItem={({item}) => (
                    <MoviePoster movie={item} height={200} width={140} />
                    ) } // esto es un patrón de diseño. mandamos una componente como una propiedad
                    keyExtractor={ (item) => item.id.toString() }
                    horizontal={true} // Pasa la lista a tener un scroll   horizontal
                    showsHorizontalScrollIndicator={false} // NO muestra la barra del scroll horisontal
                    style={{ marginTop: title ? 0 : 25 }}
                />
            </View>
    )
}