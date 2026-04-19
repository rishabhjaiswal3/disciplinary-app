import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default function StreakBanner({ streaks }) {
  return (
    <View style={styles.banner}>
      <Text style={styles.label}>🔥 Streak</Text>
      {/* TODO: render streak info */}
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: COLORS.bgCard,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  label: { color: COLORS.accentGold, fontSize: 16, fontWeight: '600' },
});
