import * as React from 'react';
import {
    Brand,
    CarImages,
    Container, Content,
    Description,
    Details,
    Header,
    Name,
    Period,
    Price,
    Rent,
    Acessories,
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,

} from './styles'
import {BackButton} from "../../components/BackButton";
import {ImageSlider} from "../../components/ImageSlider";
import {Acessory} from "../../components/Acessory";

import {Button} from "../../components/Button";
import {Feather} from "@expo/vector-icons";
import {RFValue} from "react-native-responsive-fontsize";
import theme from "../../styles/theme";
import {useNavigation, useRoute} from "@react-navigation/native";
import {CarDTO} from "../../dtos/CarDTO";
import {getAccessoryIcon} from "../../utils/getAccessoryIcon";
import {useEffect, useState} from "react";
import {format} from "date-fns";
import {getPlataformDate} from "../../utils/getPlataformDate";
import {api} from "../../services/api";
import {Alert} from "react-native";

interface Params {
    car: CarDTO;
    dates: string[];
}

interface RentalPeriod{
    start: string;
    end: string;
}

export function SchedulingDetails() {
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
    const [loading, setLoading] = useState(false);
    const route = useRoute();
    const {car, dates} = route.params as Params;
    const rentalTotal = Number(dates.length) * car.rent.price;


    const navigation = useNavigation<any>();

    async function handConfirmRental(){
        setLoading(true);
        const response = await api.get(`/schedules_bycars/${car.id}`)
        const unavailable_dates = [
            ...response.data.unavailable_dates,
            ...dates
        ];

        await api.post('schedules_byuser', {
            user_id: 1,
            car,
            startDate: format(getPlataformDate(new Date(dates[0])), 'dd/MM/yyyy'),
            endDate: format(getPlataformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
        })

        api.put(`/schedules_bycars/${car.id}`, {
            id: car.id,
            unavailable_dates
        })
            .then(() => navigation.navigate('SchedulingComplete'))
            .catch(() => {
                setLoading(false);
                Alert.alert("N??o foi poss??vel confirmar o agendamento");
            })

    }

    function handNavigationBack(){
        navigation.goBack();
    }

    useEffect(() => {

        setRentalPeriod({
            start: format(getPlataformDate(new Date(dates[0])), 'dd/MM/yyyy'),
            end: format(getPlataformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
        })

    }, [])
    return (
        <Container>
            <Header>
                <BackButton onPress={() => handNavigationBack() }/>
            </Header>

            <CarImages>
                <ImageSlider imageUrl={car.photos}/>
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>{ car.brand }</Brand>
                        <Name>{ car.name }</Name>
                    </Description>

                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent>
                </Details>
                <Acessories>
                    {
                        car.accessories.map(accessory => (
                            <Acessory key={accessory.type} name={accessory.name} icon={getAccessoryIcon(accessory.type)} />
                        ))

                    }

                </Acessories>

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather
                            name="calendar"
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>De</DateTitle>
                        <DateValue>{ rentalPeriod.start }</DateValue>
                    </DateInfo>

                    <Feather
                        name="chevron-right"
                        size={RFValue(10)}
                        color={theme.colors.shape}
                    />

                    <DateInfo>
                        <DateTitle>At??</DateTitle>
                        <DateValue>{ rentalPeriod.end }</DateValue>
                    </DateInfo>
                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ {car.rent.price} x{dates.length} di??rias</RentalPriceQuota>
                        <RentalPriceTotal>R$ {rentalTotal }</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>


            </Content>

            <Footer>
                <Button
                    title="Alugar agora"
                    color={theme.colors.success}
                    onPress={handConfirmRental}
                    enabled={!loading}
                    loading={loading}
                />
            </Footer>
        </Container>
    );
};

