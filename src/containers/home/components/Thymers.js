import * as React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import moment from 'moment';
import {Thymer} from '../../../components/Thymer';
import Animated, { EasingNode, Layout } from "react-native-reanimated";
export const Thymers = ({thymers, onDelete}) => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  const layout = Layout.duration(200);
  return (
    <View style={styles.container}>
      <Animated.FlatList
        itemLayoutAnimation={layout}
        contentContainerStyle={{
          paddingVertical: 24,
        }}
        style={{width: '100%'}}
        data={thymers}
        renderItem={({item, index}) => (
          <Thymer
            thymer={item}
            onDelete={() => {
              onDelete(item.key);
            }}
          />
        )}
      />
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
