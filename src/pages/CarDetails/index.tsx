import * as React from 'react';
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue
} from 'react-native-reanimated';

import {
    About,
    Acessories,
    Brand,
    CarImages,
    Container,
    Description,
    Details,
    Footer,
    Header,
    Name,
    Period,
    Price,
    Rent
} from './styles'
import {BackButton} from "../../components/BackButton";
import {ImageSlider} from "../../components/ImageSlider";
import {Acessory} from "../../components/Acessory";

import {Button} from "../../components/Button";
import {useNavigation, useRoute} from "@react-navigation/native";
import {CarDTO} from "../../dtos/CarDTO";
import {getAccessoryIcon} from "../../utils/getAccessoryIcon";
import {getStatusBarHeight} from "react-native-iphone-x-helper";
import {StatusBar, StyleSheet} from "react-native";
import theme from "../../styles/theme";


interface Params {
    car: CarDTO;
}

export function CarDetails() {
    const route = useRoute();
    const scrollY = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler(event => {
        scrollY.value = event.contentOffset.y;
    })

    const headerStyleAnimation = useAnimatedStyle(() => {
        return {
            height: interpolate(
                scrollY.value,
                [0, 200],
                [200, 70],
                Extrapolation.CLAMP
            )
        }

    })

    const slideCarStyleAnimation = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [0, 150],
                [1, 0],
                Extrapolation.CLAMP
            )
        }
    })

    const {car} = route.params as Params;

    const navigation = useNavigation<any>();

    function handConfirmRental() {
        navigation.navigate('Scheduling', {car});
    }

    function handNavigationBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent/>
            <Animated.View style={headerStyleAnimation}>
                <Header>
                    <BackButton onPress={() => {
                        handNavigationBack()
                    }}/>
                </Header>

                <Animated.View style={
                    [slideCarStyleAnimation, styles.header, {backgroundColor: theme.colors.background_secundary}]
                }>
                    <CarImages>
                        <ImageSlider imageUrl={car.photos}/>
                    </CarImages>
                </Animated.View>
            </Animated.View>

            <Animated.ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingTop: getStatusBarHeight(),
                }}
                showsVerticalScrollIndicator={false}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
            >
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
                            <Acessory key={accessory.type} name={accessory.name}
                                      icon={getAccessoryIcon(accessory.type)}/>
                        ))

                    }

                </Acessories>
                <About>
                    {car.about}
                    {car.about}
                    {car.about}
                </About>

            </Animated.ScrollView>

            <Footer>
                <Button title="Escolher período do aluguel" onPress={handConfirmRental}/>
            </Footer>
        </Container>
    );
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        overflow: 'hidden',
        zIndex: 1
    }
})

