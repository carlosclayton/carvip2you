import styled from "styled-components/native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";
import {RFValue} from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 365px;
  background-color: ${({theme}) => theme.colors.header};
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({theme}) => theme.fonts.secundary_600};
  color: ${({theme}) => theme.colors.shape};
  margin-top: 24px;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.secundary_400};
  color: ${({theme}) => theme.colors.shape};
  margin-top: 24px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding:  0 16px;
`;
export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`;

export const AppointmentsTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.secundary_400};
  color: ${({theme}) => theme.colors.text};
`;

export const AppointmentsQuantity = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.psecundary_500};
  color: ${({theme}) => theme.colors.text};
`;


export const CarWrapper = styled.View`
    margin-bottom: 16px;
`;
export const CarFooter = styled.View`
    width: 100%;
    padding: 12px;
    margin-top: -10px;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.background_secundary};
`;

export const CarFooterTitle = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({theme}) => theme.fonts.psecundary_500};
  color: ${({theme}) => theme.colors.text_detail};
`;
export const CarFooterPeriod = styled.View`
    flex-direction: row;
`;
export const CarFooterDate = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({theme}) => theme.fonts.secundary_400};
  color: ${({theme}) => theme.colors.text_detail};
`;



