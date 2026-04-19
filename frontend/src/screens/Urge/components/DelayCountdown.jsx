import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default function DelayCountdown({ seconds }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Delay Timer</Text>
      <Text style={styles.timer}>{seconds || '10:00'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 20 },
  label: { color: COLORS.textSecondary, fontSize: 14 },
  timer: { color: COLORS.accentWarn, fontSize: 48, fontWeight: '800', marginTop: 8 },
});
