import * as React from 'react';
import {Brand, CarImages, Container, Content, Description, Details, Header, Name, Period, Price, Rent, About} from './styles'
import {BackButton} from "../../components/BackButton";
import {ImageSlider} from "../../components/ImageSlider";

export function CarDetails() {
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
                <About>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>
        </Container>
    );
};

