import * as React from 'react';
import {
    Container,
    Name
} from './styles'
import {SVGProps} from "react";

interface Props{
    name: string,
    icon: React.FC<SVGProps>
}
export function Acessory({
    name,
    icon: Icon}: Props) {
    return (
        <Container>
            <Icon width={32} height={32} />
            <Name>{name}</Name>
        </Container>
    );
};
