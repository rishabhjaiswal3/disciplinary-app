import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default function TriggerSelector({ onSelect }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>What triggered this?</Text>
      {/* TODO: render trigger options */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 16 },
  label: { color: COLORS.text, fontSize: 16, fontWeight: '600' },
});
