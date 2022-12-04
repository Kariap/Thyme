import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useState} from 'react';
import {TIMEZONE_LIST} from '../../../utils/Constants';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
export const TimeZoneSelector = ({currentTimeZone, setTimeZone}) => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setShowDropDown(prev => !prev);
        }}
        style={styles.container}>
        <Text style={styles.timeZoneText}>{currentTimeZone.abbr} </Text>
      </TouchableOpacity>
      {showDropDown && (
        <Animated.View
          entering={FadeInUp.duration(100)}
          style={styles.dropDown}>
          <FlatList
            data={TIMEZONE_LIST}
            renderItem={({item, index}) => (
              <TouchableOpacity
                activeOpacity={0.8}
                key={item.key}
                onPress={() => {
                  setTimeZone(item);
                  setShowDropDown(false);
                }}>
                <Text style={{paddingVertical: 4, alignSelf: 'center'}}>
                  {item.abbr}
                </Text>
              </TouchableOpacity>
            )}
          />
        </Animated.View>
      )}
    </View>
  );
};
const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      height: 24,
      width: 56,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: -4,
      borderRadius: 8,
      backgroundColor: colors.primaryText,
      alignSelf: 'flex-start',
    },
    timeZoneText: {
      fontSize: 12,
      fontWeight: '600',
    },
    dropDown: {
      backgroundColor: colors.primaryText,
      height: 200,
      width: 80,
      borderRadius: 8,
      overflow: 'hidden',
      position: 'absolute',
      top: 24,
      right: '0%',
      zIndex: 2,
    },
  });
