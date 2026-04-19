import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default function PomodoroTimer() {
  return (
    <View style={styles.container}>
      <Text style={styles.timer}>25:00</Text>
      <Text style={styles.label}>Pomodoro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 40 },
  timer: { color: COLORS.primary, fontSize: 64, fontWeight: '800', fontVariant: ['tabular-nums'] },
  label: { color: COLORS.textSecondary, fontSize: 16, marginTop: 8 },
});
