import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={onToggle} style={styles.content}>
        <Text style={[styles.title, task.completed && styles.completed]}>{task.title}</Text>
        <Text style={styles.priority}>{task.priority}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: COLORS.bgCard,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  content: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { color: COLORS.text, fontSize: 16 },
  completed: { textDecorationLine: 'line-through', color: COLORS.textMuted },
  priority: { color: COLORS.textSecondary, fontSize: 12, textTransform: 'uppercase' },
});
