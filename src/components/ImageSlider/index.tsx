import * as React from 'react';
import {
    Container,
    ImageIndexers,
    ImageIndex,
    CarImageWrapper,
    CarImage
} from './styles'

interface Props{
    imageUrl: string[];
}


export function ImageSlider({imageUrl}: Props) {
    return (
        <Container>
        <ImageIndexers>
            <ImageIndex active={true} />
            <ImageIndex active={false} />
            <ImageIndex active={false} />
            <ImageIndex active={false} />
        </ImageIndexers>

        <CarImageWrapper>
            <CarImage
            source={{uri: imageUrl[0]}}
            resizeMode="contain"
            />
        </CarImageWrapper>
        </Container>
    );
};
