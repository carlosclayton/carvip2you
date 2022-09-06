import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";
import {RectButton} from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  width: 80px;
  height: 50px;
  background-color: ${({theme}) => theme.colors.shape_dark};

  align-items: center;
  justify-content: center;
`;


export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.psecundary_500};
`;
