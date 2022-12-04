import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@react-navigation/native';
import moment from 'moment';
import {useEffect, useState} from 'react';

export const DateTimeView = ({dateTime}) => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  const [currentDateTime, setCurrentDateTime] = useState(dateTime);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, [dateTime]);
  return (
    <View style={styles.container}>
      <Text style={styles.dayText}>
        {moment(currentDateTime).format('dddd, DD MMM')}
      </Text>
      <Text style={styles.timeText}>
        {moment(currentDateTime).format('hh:MM:ss')}
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
      marginTop: 8,
      fontWeight: '700',
      color: colors.primaryText,
    },
    merStyle: {
      fontSize: 16,
      marginTop: 8,
      fontWeight: '700',
      color: colors.primaryText,
    },
  });
