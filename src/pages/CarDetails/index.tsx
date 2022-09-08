import * as React from 'react';
import {Brand, CarImages, Container, Content, Description, Details, Header, Name, Period, Price, Rent, About, Acessories, Footer} from './styles'
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
import {useNavigation} from "@react-navigation/native";

export function CarDetails() {
    const navigation = useNavigation<any>();
    function handConfirmRental(){
        navigation.navigate('Scheduling');
    }

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
                <About>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>

            </Content>

            <Footer>
                <Button title="Escolher período do aluguel" onPress={handConfirmRental} />
            </Footer>
        </Container>
    );
};

