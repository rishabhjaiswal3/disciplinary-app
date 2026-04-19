import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default function ScoreCard({ score }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Today's Score</Text>
      <Text style={styles.score}>{score?.totalPoints || 0}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.bgCard,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  label: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  score: {
    color: COLORS.primary,
    fontSize: 48,
    fontWeight: '800',
    marginTop: 4,
  },
});
