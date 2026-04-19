import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default function EmergencyActions() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>🚨 Emergency Actions</Text>
      {/* TODO: render emergency action buttons */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 16 },
  label: { color: COLORS.accentWarn, fontSize: 16, fontWeight: '700' },
});
