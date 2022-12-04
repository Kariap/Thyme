import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@react-navigation/native';
import {WorldClock} from './components/WorldClock';
import {TimersView} from './components/TimersView';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';

export const HomeContainer = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.backgroundWidget,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <SafeAreaView />
      <WorldClock />
      <TimersView />
    </View>
  );
};
