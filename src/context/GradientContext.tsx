import { Children, createContext, useState } from 'react'

interface ImageColors {
    primary: string;
    secondary: string;
}

interface ContextProps {
    colors: ImageColors;
    prevColors: ImageColors;
    setMainColor: (color: ImageColors) => void;
    setPrevMainColor: (color: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps)

export const GradientProvider = ({children}: any) => {

    const [colors, setColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    })

    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    })

    const setMainColor = (color: ImageColors) => {
        setColors(color)
    }
    const setPrevMainColor = (color: ImageColors) => {
        setPrevColors(color)
    }

    return (
        <GradientContext.Provider
            value={{
                colors,
                prevColors,
                setMainColor,
                setPrevMainColor
            }}
        >
            {children}
        </GradientContext.Provider>
    )
}