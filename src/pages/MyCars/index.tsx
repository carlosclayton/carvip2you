import * as React from 'react';
import {useEffect, useState} from 'react';
import {
    Appointments,
    AppointmentsQuantity,
    AppointmentsTitle,
    CarFooterDate,
    CarFooterPeriod,
    CarFooterTitle,
    CarWrapper,
    CarFooter,
    Container,
    Content,
    Header,
    Subtitle,
    Title
} from './styles'
import {CarDTO} from "../../dtos/CarDTO";
import {api} from "../../services/api";
import {BackButton} from "../../components/BackButton";
import theme from "../../styles/theme";
import {useNavigation} from "@react-navigation/native";
import {FlatList} from "react-native";
import {Cars} from "../../components/Cars";
import {AntDesign} from "@expo/vector-icons";
import {Load} from "../../components/Load";

interface CarProps {
    id: string;
    car: CarDTO;
    user_id: string;
    startDate: string;
    endDate: string;
}

export function MyCars() {
    const [cars, setCars] = useState<CarProps[]>([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation<any>();

    function handNavigationBack() {
        navigation.goBack();
    }

    useEffect(() => {
        async function fectchCars() {
            try {
                const response = await api.get(`/schedules_byuser?user_id=1`);
                setCars(response.data);
                console.log(response.data)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fectchCars();
    }, [])
    return (
        <Container>
            <Header>
                <BackButton
                    color={theme.colors.shape}
                    onPress={() => handNavigationBack()}
                />
                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel
                </Title>

                <Subtitle>
                    Conforto, segurança e praticidade.
                </Subtitle>

            </Header>
            { loading ? <Load /> :
                <Content>
                    <Appointments>
                        <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
                        <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
                    </Appointments>

                    <FlatList
                        data={cars}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => (
                            <CarWrapper>
                                <Cars data={item.car} onPress={() => {
                                }}/>
                                <CarFooter>
                                    <CarFooterTitle>Período</CarFooterTitle>
                                    <CarFooterPeriod>
                                        <CarFooterDate>{item.startDate}</CarFooterDate>
                                        <AntDesign
                                            name="arrowright"
                                            size={20}
                                            color={theme.colors.title}
                                            style={{marginHorizontal: 10}}
                                        />
                                        <CarFooterDate>{item.endDate}</CarFooterDate>
                                    </CarFooterPeriod>
                                </CarFooter>
                            </CarWrapper>
                        )}
                    />
                </Content>
            }
        </Container>
    );
};
