import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../context/GradientContext'
import { useFade } from '../hooks/useFade'

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({children}: Props) => {

    const {opacity, fadeIn, fadeOut} = useFade()

    const {
        colors,
        colors: {
            primary,
            secondary
        },
        prevColors: {
            primary: prevPrimary,
            secondary: prevSecondary
        },
        setMainColor,
        setPrevMainColor
    } = useContext(GradientContext)

    useEffect(() => {
        fadeIn( () => {
            setPrevMainColor(colors)
            fadeOut()
        })
    }, [colors]) 

    return (
        <View style={{flex: 1, backgroundColor: '#084f6a'}}>
            <LinearGradient
                colors={[prevPrimary, prevSecondary, 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.7, y: 0.9 }}
            />
            
            <Animated.View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    opacity
                }}
            >
                <LinearGradient
                colors={[primary, secondary, 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.7, y: 0.9 }}
            />
            </Animated.View>

            {children}
        </View>
    )
}