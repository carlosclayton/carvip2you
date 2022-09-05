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
import {Calendar} from "../../components/Calendar";


export function Scheduling() {
    const theme = useTheme();
    return (
        <Container>

            <Header>
                <BackButton
                    color={theme.colors.shape}
                />
                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel
                </Title>
                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>De</DateTitle>
                        <DateValue selected={true}>18/06/2022</DateValue>
                    </DateInfo>

                    <ArrowSvg />
                    <DateInfo>
                        <DateTitle>Até</DateTitle>
                        <DateValue selected={false}></DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar/>
            </Content>
            <Footer>
                <Button title="Confirmar" />
            </Footer>
        </Container>
    );
};
