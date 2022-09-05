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

import speedSvg from '../../assets/speed.svg'
import acelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'
import {Button} from "../../components/Button";
import {Feather} from "@expo/vector-icons";
import {RFValue} from "react-native-responsive-fontsize";
import theme from "../../styles/theme";

export function SchedulingDetails() {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => {
                }}/>
            </Header>

            <CarImages>
                <ImageSlider imageUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']}/>
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lanborguini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 500</Price>
                    </Rent>
                </Details>
                <Acessories>
                    <Acessory name="380 Km/h" icon={speedSvg} />
                    <Acessory name="3.2" icon={acelerationSvg} />
                    <Acessory name="800 HP" icon={forceSvg} />
                    <Acessory name="Gasolina" icon={gasolineSvg} />
                    <Acessory name="Auto" icon={exchangeSvg} />
                    <Acessory name="2 pessoas" icon={peopleSvg} />
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
                        <DateValue>18/06/2022</DateValue>
                    </DateInfo>

                    <Feather
                        name="chevron-right"
                        size={RFValue(10)}
                        color={theme.colors.shape}
                    />

                    <DateInfo>
                        <DateTitle>Até</DateTitle>
                        <DateValue>28/06/2022</DateValue>
                    </DateInfo>
                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                        <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>


            </Content>

            <Footer>
                <Button title="Confirmar" />
            </Footer>
        </Container>
    );
};

