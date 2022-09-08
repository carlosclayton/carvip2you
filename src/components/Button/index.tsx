import * as React from 'react';
import {
    Container,
    Title
} from './styles'
import theme from "../../styles/theme";


interface Props{
    title: string;
    color?: string;
    onPress: () => void;
}

export function Button({
        title,
        color,
        onPress
    }: Props) {
    return (
        <Container
            color={color ? color : theme.colors.main}
            onPress={onPress}
        >
            <Title>{title}</Title>
        </Container>
    );
};
