import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useState} from 'react';
import {DateTimeView} from '../../components/DateTimeView';

export const WorldClock = () => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  const [currentTime, setCurrentTime] = useState(new Date());
  return (
    <View style={styles.container}>
      <DateTimeView dateTime={currentTime} />
    </View>
  );
};
const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      alignSelf: 'stretch',
      paddingVertical: 36,
      paddingHorizontal: 16,
      backgroundColor: colors.backgroundWidget,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
