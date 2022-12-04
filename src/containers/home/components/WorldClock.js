import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {DateTimeView} from '../../../components/DateTimeView';
import {TimeZoneSelector} from './TimeZoneSelector';
import {TIMEZONE_LIST} from '../../../utils/Constants';
import {getTimeFromWorldTimeAPI} from '../../../network/NetworkHandlers';
import moment from 'moment';

export const WorldClock = () => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentTimeZone, setCurrentTimeZone] = useState(TIMEZONE_LIST[0]);
  const [currentTmzInfo, setCurrentTmzInfo] = useState(undefined);
  useEffect(() => {
    getTimeFromWorldTimeAPI(currentTimeZone.tmz)
      .then(response => {
        const dateTime = new Date(response.data.datetime.split('.')[0]);
        setCurrentTime(dateTime);
        setCurrentTmzInfo(response.data);
      })
      .catch(error => {
        //Show Toast
        console.log('Error', error.request);
      });
  }, [currentTimeZone]);
  return (
    <View style={styles.container}>
      <DateTimeView dateTime={currentTime} />
      <View style={{justifyContent: 'space-between', alignItems: 'flex-end'}}>
        <TimeZoneSelector
          currentTimeZone={currentTimeZone}
          setTimeZone={setCurrentTimeZone}
        />
        {currentTmzInfo && (
          <Text style={styles.timezoneInfo}>
            {currentTmzInfo.timezone.replace('_', ' ')}
          </Text>
        )}
      </View>
    </View>
  );
};
const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      alignSelf: 'stretch',
      flexDirection: 'row',
      paddingVertical: 36,
      paddingHorizontal: 16,
      backgroundColor: colors.backgroundWidget,
      justifyContent: 'space-between',
      zIndex: 2,
    },
    timezoneInfo: {
      marginBottom: 8,
      fontSize: 12,
      zIndex:-1,
      fontWeight: '400',
      color: colors.primaryText,
      opacity: 0.5,
    },
  });
