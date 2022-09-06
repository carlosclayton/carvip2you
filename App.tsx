import React from 'react';

import {Inter_400Regular, Inter_500Medium, useFonts} from '@expo-google-fonts/inter'
import {Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold} from "@expo-google-fonts/archivo";
import {Home} from "./src/pages/Home";
import {ActivityIndicator, StatusBar} from "react-native";
import {ThemeProvider} from "styled-components";
import theme from "./src/styles/theme";
import {CarDetails} from "./src/pages/CarDetails";
import {Scheduling} from "./src/pages/Scheduling";
import {SchedulingDetails} from "./src/pages/SchedulingDetails";
import {SchedulingComplete} from "./src/pages/SchedulingComplete";

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Archivo_400Regular,
        Archivo_500Medium,
        Archivo_600SemiBold
    })
    if (!fontsLoaded) {
        return <ActivityIndicator style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}
                                  color="red"
                                  size="large"
        />;
    }
    return (
        <>
            <StatusBar
                barStyle={'light-content'}
                translucent
                backgroundColor="transparent"

            />
            <ThemeProvider theme={theme}>
                <SchedulingComplete />
            </ThemeProvider>
        </>


    );
}
