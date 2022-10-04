import * as React from 'react';
import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer

} from './styles'
import {useTheme} from "styled-components";
import {BackButton} from "../../components/BackButton";
import ArrowSvg from "../../assets/arrow.svg";
import {Button} from "../../components/Button";
import {Calendar, DayProps, generateInterval, MarkedDateProps} from "../../components/Calendar";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useState} from "react";
import {format} from "date-fns";
import {getPlataformDate} from "../../utils/getPlataformDate";
import {Alert} from "react-native";
import {CarDTO} from "../../dtos/CarDTO";

interface RentalPeriod{
    startFormatted: string;
    endFormatted: string;
}

interface Params {
    car: CarDTO;
}


export function Scheduling() {
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps) ;
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

    const theme = useTheme();
    const route = useRoute();
    const {car} = route.params as Params;

    const navigation = useNavigation<any>();
    function handConfirmRental(){
        if(!rentalPeriod.startFormatted || !rentalPeriod.endFormatted){
            Alert.alert('Selecione um período.')
        }else{
            navigation.navigate('SchedulingDetails', {
                car,
                dates: Object.keys(markedDates)
            });
        }

    }

    function handNavigationBack(){
        navigation.goBack();
    }

    function handleChangeDate(date: DayProps){
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if(start.timestamp > end.timestamp){
            start = end;
            end = end
        }

        setLastSelectedDate(end);
        const interval = generateInterval(start, end)
        setMarkedDates(interval);

        const firstDate = Object.keys(interval)[0];
        const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

        setRentalPeriod({
            startFormatted: format(getPlataformDate(new Date(firstDate)), 'dd/MM/yyyy'),
            endFormatted: format(getPlataformDate(new Date(endDate)), 'dd/MM/yyyy'),
        })
    }

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
                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>De</DateTitle>
                        <DateValue selected={ !!rentalPeriod.startFormatted }>{ rentalPeriod.startFormatted }</DateValue>
                    </DateInfo>

                    <ArrowSvg />
                    <DateInfo>
                        <DateTitle>Até</DateTitle>
                        <DateValue selected={ !!rentalPeriod.endFormatted }>{ rentalPeriod.endFormatted }</DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar
                    onDayPress={handleChangeDate}
                    markedDates={markedDates}
                />

            </Content>
            <Footer>
                <Button title="Confirmar" onPress={handConfirmRental} />
            </Footer>
        </Container>
    );
};
