import * as React from 'react';
import {Container, Header, HeaderContent, TotalCars, CarList} from './styles'

import Logo from '../../assets/logo.svg';

import {StatusBar} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {Cars} from "../../components/Cars";

export function Home() {
    const carOne = {
        brand: "AUDI",
        name: 'RS 5 Coupé',
        rent:{
            period: 'Ao dia',
            price: 120,
        },
        thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
    }

    const carTwo = {
        brand: "Porche",
        name: 'Panamera',
        rent:{
            period: 'Ao dia',
            price: 340,
        },
        thumbnail: 'https://assets.stickpng.com/images/580b585b2edbce24c47b2cae.png'
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent/>
            <Header>
                <HeaderContent>


                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />

                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>

            </Header>

            <CarList
                data={[1,2,3]}
                keyExtractor={item => String(item)}
                renderItem={({item}) => <Cars data={carOne} />}
                    />

        </Container>
    );
}
