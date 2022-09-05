import styled from "styled-components/native";
import {BorderlessButton} from "react-native-gesture-handler";

export const Container = styled(BorderlessButton)`
  background-color: ${({theme}) => theme.colors.header};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

