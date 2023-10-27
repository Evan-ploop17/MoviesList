import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Movie } from '../interfaces/movideDB';
import { useNavigation } from '@react-navigation/native';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({
    height = 420,
    movie,
    width = 300
}: Props) => {

    const navigation = useNavigation()

    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    return (
        <TouchableOpacity
            onPress={ () => navigation.navigate('DetailScreen', movie)}
            activeOpacity={0.6}
            style={{
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7,
                width,
            }}
        >
            <View style={styles.imageContainer}>    
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 18,
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 0,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    }
})