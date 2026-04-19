import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default function BlockTimer({ seconds }) {
  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{seconds || '00:00'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 20 },
  timer: { color: COLORS.primary, fontSize: 48, fontWeight: '800', fontVariant: ['tabular-nums'] },
});
