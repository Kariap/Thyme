import * as React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Picker, DatePicker} from 'react-native-wheel-pick';
import {HOURS_ARRAY, MINUTES_ARRAY} from '../../../utils/Constants';
import {useState} from 'react';
import {CustomWheelPicker} from '../../../components/CustomWheelPicker';

export const ThymerCreator = ({thymers, onAddClicked, onCancelClicked}) => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <CustomWheelPicker
          value={hours}
          setValue={setHours}
          data={HOURS_ARRAY}
          title={'Hours'}
        />
        <CustomWheelPicker
          value={minutes}
          setValue={setMinutes}
          data={MINUTES_ARRAY}
          title={'Minutes'}
        />
        <CustomWheelPicker
          value={seconds}
          setValue={setSeconds}
          data={MINUTES_ARRAY}
          title={'Seconds'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 16,
          width: '100%',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            paddingHorizontal: 32,
            borderWidth: 0.5,
            borderColor: colors.background,
            paddingVertical: 12,
            borderRadius: 12,
            minWidth: 100,
          }}
          onPress={() => {
            onCancelClicked();
          }}>
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            onAddClicked(hours, minutes, seconds);
            onCancelClicked();
            console.log('Hours', hours, minutes, seconds);
          }}
          style={{
            paddingHorizontal: 32,
            paddingVertical: 12,
            backgroundColor: colors.background,
            borderRadius: 12,
            minWidth: 100,
            alignItems: 'center',
          }}>
          <Text style={{color: colors.primaryText}}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      width: 400,
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
