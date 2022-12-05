import {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import * as React from 'react';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {useTheme} from '@react-navigation/native';
import Animated, {
  BounceInDown,
  BounceInLeft,
  BounceInUp,
  BounceOut,
  FadeInUp,
  FadeOut,
  FadeOutRight,
  Layout,
} from 'react-native-reanimated';

export const Thymer = ({thymer, onDelete}) => {
  const [millis, setMillis] = useState(thymer.timer);
  const {colors} = useTheme();
  const [isPaused, setIsPaused] = useState(false);
  return (
    <Animated.View
      entering={FadeInUp.delay(100).duration(200)}
      exiting={FadeOut.duration(200)}
      activeOpacity={0.8}
      style={{
        flexDirection: 'row',
        marginVertical: 8,
        borderRadius: 12,
        padding: 24,
        justifyContent: 'space-between',
        backgroundColor: colors.backgroundWidget,
      }}>
      <CountdownCircleTimer
        isPlaying={!isPaused}
        size={120}
        duration={millis / 1000}
        trailStrokeWidth={1}
        strokeWidth={6}
        trailColor={colors.background}
        colors={[colors.primaryText]}>
        {({remainingTime}) => {
          const hours = Math.floor(remainingTime / 3600);
          const minutes = Math.floor((remainingTime % 3600) / 60);
          const seconds = remainingTime % 60;
          if (remainingTime <= 0) {
            return (
              <Text
                style={{
                  fontSize: 16,
                  color: colors.primaryText,
                }}>
                Expired
              </Text>
            );
          }
          return (
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.primaryText,
                }}>
                {`${(hours <= 9 ? '0' : '') + hours}:${
                  (minutes <= 9 ? '0' : '') + minutes
                }:${(seconds <= 9 ? '0' : '') + seconds}`}
              </Text>
              {isPaused && (
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: 'center',
                    color: colors.primaryText,
                  }}>
                  Paused
                </Text>
              )}
            </View>
          );
        }}
      </CountdownCircleTimer>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.background,
            paddingVertical: 12,
            borderRadius: 12,
            alignItems: 'center',
            width: 120,
            alignSelf: 'flex-end',
          }}
          onPress={() => {
            setIsPaused(prev => !prev);
          }}>
          <Text style={{color: colors.primaryText}}>
            {' '}
            {isPaused ? 'Resume' : 'Pause'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            onDelete();
          }}
          style={{
            width: 120,
            paddingVertical: 12,
            borderWidth: 1,
            borderColor: colors.background,
            borderRadius: 12,
            alignSelf: 'flex-end',
            alignItems: 'center',
          }}>
          <Text>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
