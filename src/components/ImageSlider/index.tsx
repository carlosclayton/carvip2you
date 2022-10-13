import * as React from 'react';
import {CarImage, CarImageWrapper, Container, ImageIndex, ImageIndexers} from './styles'
import {FlatList, ViewToken} from "react-native";
import {useRef, useState} from "react";

interface Props {
    imageUrl: string[];
}

interface ChangedImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function ImageSlider({imageUrl}: Props) {
    const [imageIndex, setImageIndex] = useState(0);

    const indexChanged = useRef((info: ChangedImageProps) => {
        const index = info.viewableItems[0].index!;
        setImageIndex(index);
    })
    return (
        <Container>
            <ImageIndexers>
                {imageUrl.map((_, index) => (
                    <ImageIndex
                        key={String(index)}
                        active={index === imageIndex}
                    />
                ))}
            </ImageIndexers>


                <FlatList
                    data={imageUrl}
                    keyExtractor={key => key}
                    renderItem={({item}) => (
                        <CarImageWrapper>
                        <CarImage
                            source={{uri: imageUrl[0]}}
                            resizeMode="contain"
                        />
                        </CarImageWrapper>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={indexChanged.current}

                />

        </Container>
    );
};
