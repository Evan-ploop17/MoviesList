import React from 'react'
import { View } from 'react-native'

export const FadeScreen = () => {
    return (
        <View
            style={{
                alignItems: 'center',
                backgroundColor: 'red',
                flex: 1,
                justifyContent: 'center',
            }}
        >
            <View
                style={{
                    backgroundColor: '#084f6a',
                    height: 150,
                    width: 150,
                }}
            />
        </View>
    )
}