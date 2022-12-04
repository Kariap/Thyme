import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const TimersView = () => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  return (
    <View style={styles.container}>
      <Text>TimerView</Text>
    </View>
  );
};
const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
