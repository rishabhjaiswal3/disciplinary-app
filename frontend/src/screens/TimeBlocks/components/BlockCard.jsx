import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default function BlockCard({ block }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{block.title}</Text>
      <Text style={styles.time}>{block.startTime} — {block.endTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.bgCard,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  title: { color: COLORS.text, fontSize: 16, fontWeight: '600' },
  time: { color: COLORS.textMuted, fontSize: 14, marginTop: 4 },
});
