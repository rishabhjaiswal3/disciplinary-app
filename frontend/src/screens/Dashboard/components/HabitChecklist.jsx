import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default function HabitChecklist({ habits }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habits</Text>
      {/* TODO: render habit list */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 16 },
  title: { color: COLORS.text, fontSize: 18, fontWeight: '600' },
});
