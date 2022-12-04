import * as React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {Picker} from 'react-native-wheel-pick';

export const CustomWheelPicker = ({value, setValue, data, title}) => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Picker
        style={styles.picker}
        selectedValue={value}
        pickerData={data}
        onValueChange={value => {
          setValue(value);
        }}
      />
    </View>
  );
};
const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      marginTop: 12,
      flex: 1,
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 16,
      justifyContent: 'center',
    },
    picker: {backgroundColor: colors.primaryText, width: 100},
    title: {
      fontSize: 12,
      fontWeight: '500',
    },
  });
