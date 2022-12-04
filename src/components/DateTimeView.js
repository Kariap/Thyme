import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@react-navigation/native';
import moment from 'moment';
import {useEffect, useState} from 'react';

export const DateTimeView = ({dateTime, currentTmzInfo}) => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  const [currentDateTime, setCurrentDateTime] = useState(dateTime);
  useEffect(() => {
    setCurrentDateTime(dateTime);
    let timer;
    timer = setInterval(() => {
      setCurrentDateTime(prev => {
        const newDate = new Date(prev);
        newDate.setSeconds(newDate.getSeconds() + 1);
        return newDate;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [dateTime]);
  return (
    <View style={styles.container}>
      <Text style={styles.dayText}>
        {moment(currentDateTime).format('dddd, DD MMM')}
      </Text>
      <Text style={styles.timeText}>
        {moment(currentDateTime).format('hh')}
        <Text style={styles.colonStyle}>{':'}</Text>
        <Text style={styles.timeText}>
          {moment(currentDateTime).format('mm')}
        </Text>
        <Text style={styles.colonStyle}>{':'}</Text>
        <Text style={styles.timeText}>
          {moment(currentDateTime).format('ss')}
        </Text>
        <Text style={styles.merStyle}>
          {' ' + moment(currentDateTime).format('A')}
        </Text>
      </Text>
    </View>
  );
};
const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      alignSelf: 'flex-start',
      backgroundColor: colors.backgroundWidget,
      justifyContent: 'center',
    },
    dayText: {
      fontSize: 16,
      fontWeight: '700',
      color: colors.primaryText,
    },
    timeText: {
      fontSize: 32,
      marginTop: 0,
      fontWeight: '700',
      color: colors.primaryText,
    },
    merStyle: {
      fontSize: 16,
      marginTop: 8,
      fontWeight: '700',
      color: colors.primaryText,
    },
    colonStyle: {
      fontSize: 24,
      marginTop: 8,
      fontWeight: '700',
      color: colors.primaryText,
    },
  });
