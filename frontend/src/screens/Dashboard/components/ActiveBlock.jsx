import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default function ActiveBlock({ block }) {
  if (!block) return null;
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Active Block</Text>
      <Text style={styles.title}>{block.title}</Text>
      <Text style={styles.time}>{block.startTime} — {block.endTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.bgCard,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  label: { color: COLORS.textSecondary, fontSize: 12 },
  title: { color: COLORS.text, fontSize: 20, fontWeight: '700', marginTop: 4 },
  time: { color: COLORS.textMuted, fontSize: 14, marginTop: 4 },
});
