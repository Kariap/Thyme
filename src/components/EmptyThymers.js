import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@react-navigation/native';
import moment from 'moment';
import {useEffect, useState} from 'react';

export const EmptyThymers = () => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  return (
    <View style={styles.container}>
      <Text style={styles.suchEmpty}>Such empty, much wow!</Text>
      <Text style={styles.noTimerText}>
        Add timers by clicking the "Add" button {'\n'} on the top right.
      </Text>
    </View>
  );
};
const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      opacity: 0.7,
      paddingBottom: 128,
      justifyContent: 'center',
    },
    noTimerText: {
      fontSize: 16,
      opacity: 0.6,
      marginBottom: 16,
      fontWeight: '500',
      textAlign: 'center',
      color: colors.primaryText,
    },
    suchEmpty: {
      fontSize: 24,
      marginBottom: 16,
      fontWeight: '500',
      textAlign: 'center',
      color: colors.primaryText,
    },
  });
