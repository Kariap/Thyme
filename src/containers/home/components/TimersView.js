import * as React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useState} from 'react';
import {Thymers} from './Thymers';
import {ThymerCreator} from './ThymeCreator';
import {getMilliseconds} from '../../../utils/DateUtils';
import moment from 'moment';

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
      <Thymers
        thymers={thymers}
        onDelete={id => {
          deleteItemById(id);
        }}
      />
      {showAddThymer && (
        <View style={styles.creatorModal}>
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
              thymers.push(timerObj);
              //Add timer;
            }}
            onCancelClicked={() => {
              setShowAddThymer(false);
            }}
          />
        </View>
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
    },
    creatorModal: {
      position: 'absolute',
      borderRadius: 12,
      backgroundColor: colors.primaryText,
      top: 72,
    },
  });
