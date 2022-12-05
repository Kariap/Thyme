import * as React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useState} from 'react';
import {Thymers} from './Thymers';
import {ThymerCreator} from './ThymeCreator';
import {getMilliseconds} from '../../../utils/DateUtils';
import moment from 'moment';
import Animated, {
  BounceIn,
  BounceInUp,
  FadeInUp,
  FadeOutUp,
} from 'react-native-reanimated';
import { EmptyThymers } from "../../../components/EmptyThymers";
export const TimersView = () => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  const [thymers, setThymers] = useState([]);
  const [showAddThymer, setShowAddThymer] = useState(false);
  const deleteItemById = id => {
    const filteredData = thymers.filter(item => item.key !== id);
    setThymers(filteredData);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          alignSelf: 'stretch',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 16,
        }}>
        <Text style={styles.thymerText}>Thymers</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            height: 32,
            width: 32,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 24,
            overflow: 'hidden',
            backgroundColor: colors.backgroundWidget,
          }}
          onPress={() => {
            setShowAddThymer(prev => !prev);
          }}>
          <Text style={styles.addThymer}>+</Text>
        </TouchableOpacity>
      </View>
      {thymers.length > 0 ? (
        <Thymers
          thymers={thymers}
          onDelete={id => {
            deleteItemById(id);
          }}
        />
      ) : (
        <EmptyThymers/>
      )}
      {showAddThymer && (
        <Animated.View
          style={styles.creatorModal}
          entering={FadeInUp.duration(300)}>
          <ThymerCreator
            onAddClicked={(hours, minutes, seconds) => {
              const timerTime = new Date();
              const millis = getMilliseconds(hours, minutes, seconds);
              timerTime.setSeconds(seconds);
              timerTime.setMinutes(minutes);
              timerTime.setHours(hours);
              console.log(moment(timerTime).format('HH:mm:ss'));
              const timerObj = {
                timer: millis,
                key: Math.random(),
              };
              setThymers([timerObj, ...thymers]);
              //Add timer;
            }}
            onCancelClicked={() => {
              setShowAddThymer(false);
            }}
          />
        </Animated.View>
      )}
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
      padding: 16,
      borderRadius: 20,
      justifyContent: 'center',
    },
    thymerText: {
      fontSize: 24,
      fontWeight: '600',
      color: colors.primaryText,
    },
    addThymer: {
      fontSize: 24,
      fontWeight: '600',
      color: colors.primaryText,
      textAlignVertical: 'center',
      lineHeight: 27,
    },
    creatorModal: {
      position: 'absolute',
      borderRadius: 12,
      backgroundColor: colors.primaryText,
      top: 72,
    },
  });
