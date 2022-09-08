import * as React from 'react';
import {
    Container,
    Details,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    Type,
    CarImage
} from './styles'
import GasolineSvg from '../../assets/gasoline.svg';
import {RectButtonProps} from "react-native-gesture-handler";

interface CarData{
    brand: string;
    name: string;
    rent:{
        period: string;
        price: string;
    },
    thumbnail: string;
}

interface Props extends RectButtonProps{
    data: CarData;
}
export function Cars({data, ...rest} : Props) {
    return (
        <Container {...rest}>
            <Details>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>

                <About>
                    <Rent>
                        <Period>{data.rent.period}</Period>
                        <Price>{ `RS ${data.rent.price}`}</Price>
                    </Rent>

                    <Type>
                        <GasolineSvg />
                    </Type>
                </About>
            </Details>

            <CarImage
                source={{uri: data.thumbnail}}
                resizeMode="contain"
            />

        </Container>
    );
};
