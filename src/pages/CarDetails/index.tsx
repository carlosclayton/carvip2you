import * as React from 'react';
import {
    Brand,
    CarImages,
    Container,
    Content,
    Description,
    Details,
    Header,
    Name,
    Period,
    Price,
    Rent,
    About,
    Acessories,
    Footer
} from './styles'
import {BackButton} from "../../components/BackButton";
import {ImageSlider} from "../../components/ImageSlider";
import {Acessory} from "../../components/Acessory";

import {Button} from "../../components/Button";
import {useNavigation, useRoute} from "@react-navigation/native";
import {CarDTO} from "../../dtos/CarDTO";
import {getAccessoryIcon} from "../../utils/getAccessoryIcon";


interface Params {
    car: CarDTO;
}
export function CarDetails() {
    const route = useRoute();
    const {car} = route.params as Params;

    const navigation = useNavigation<any>();
    function handConfirmRental(){
        navigation.navigate('Scheduling');
    }

    function handNavigationBack(){
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <BackButton onPress={() => { handNavigationBack()
                }}/>
            </Header>

            <CarImages>
                <ImageSlider imageUrl={car.photos}/>
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
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
                <About>
                    {car.about}
                </About>

            </Content>

            <Footer>
                <Button title="Escolher período do aluguel" onPress={handConfirmRental} />
            </Footer>
        </Container>
    );
};

