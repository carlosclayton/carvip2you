import * as React from 'react';
import {Feather} from '@expo/vector-icons';
import {generateInterval} from './generateInterval'

import {
    Calendar as CustomCalendar,
    LocaleConfig
} from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br'

import theme from "../../styles/theme";
import {ptBR} from "./localConfig";
import {DateData} from "react-native-calendars/src/types";

interface DayProps{
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
}

interface MarkedDateProps{
    [date: string]: {
        color: string;
        textColor: string;
        disabled?: boolean;
        disableTouchEvent?: boolean;
    }
}

interface CalendarProps{
    markedDates: MarkedDateProps;
    onDayPress: (date: DateData) => void;
}

function Calendar({ markedDates, onDayPress}: CalendarProps ) {
    const dateAtual = new Date().toLocaleDateString("en-US")
    return (
        <CustomCalendar
            renderArrow={(direction) =>
            <Feather
                size={24}
                color={theme.colors.shape}
                name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
            />
        }
            headerStyle={{
                backgroundColor: theme.colors.background_secundary,
                borderBottomWidth: 0.5,
                borderBottomColor: theme.colors.text_detail,
                paddingBottom: 10,
                marginBottom: 10

            }}

            theme={{
                textDayFontFamily: theme.fonts.primary_400,
                textDayHeaderFontFamily: theme.fonts.primary_400,
                textMonthFontFamily: theme.fonts.psecundary_500,
                textDayHeaderFontSize: 10,
                textMonthFontSize: 20,
                monthTextColor: theme.colors.title,
                arrowStyle: {
                    marginHorizontal: -15
                }
            }}

            firstDay={1}
            minDate={dateAtual}
            markingType="period"
            markedDates={markedDates}
            onDayPress={onDayPress}
        />

    );
}

export {
    Calendar,
    DayProps,
    MarkedDateProps,
    generateInterval
}
