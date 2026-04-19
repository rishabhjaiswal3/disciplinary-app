import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default function HabitRow({ habit, completed, onToggle }) {
  return (
    <TouchableOpacity style={styles.row} onPress={onToggle}>
      <Text style={[styles.label, completed && styles.completed]}>
        {habit.label}
      </Text>
      <Text style={styles.check}>{completed ? '✅' : '⬜'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.bgCard,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  label: { color: COLORS.text, fontSize: 16 },
  completed: { textDecorationLine: 'line-through', color: COLORS.textMuted },
  check: { fontSize: 20 },
});
