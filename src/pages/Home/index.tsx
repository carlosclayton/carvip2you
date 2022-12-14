import * as React from 'react';
import {Container, Header, HeaderContent, TotalCars, CarList, MyCarsButton} from './styles'
import { Ionicons } from '@expo/vector-icons';
import Logo from '../../assets/logo.svg';

import {StatusBar} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {Cars} from "../../components/Cars";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {api} from "../../services/api";
import {CarDTO} from "../../dtos/CarDTO";
import {Load} from "../../components/Load";
import theme from "../../styles/theme";

export function Home() {
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCars(){
            try{
                const response = await api.get('/cars');
                setCars(response.data);
            } catch (error){
                console.log(error);
            }finally {
                setLoading(false)
            }
        }

        fetchCars();
    }, [])

    const navigation = useNavigation<any>();


    function handCarDetails(car: CarDTO){
        navigation.navigate('CarDetails', {car});
    }

    function handOpenMyCars(){
        navigation.navigate('MyCars');
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
                        Total de { cars.length } carros
                    </TotalCars>
                </HeaderContent>

            </Header>
            { loading ? <Load /> :
                <CarList
                    data={cars}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) =>
                        <Cars data={item} onPress={() => handCarDetails(item)} />}
                />
            }
            <MyCarsButton onPress={() => handOpenMyCars()}>
                <Ionicons
                    size={32}
                    name="ios-car-sport"
                    color={theme.colors.shape}
                />
            </MyCarsButton>
        </Container>
    );
}
