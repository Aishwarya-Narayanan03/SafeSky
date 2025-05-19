import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { fonts, spacing, borderRadius, shadows } from '@/constants/Theme';

type UserMessageProps = {
  message: string;
};

export function UserMessage({ message }: UserMessageProps) {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginBottom: spacing.md,
  },
  messageContainer: {
    backgroundColor: Colors.primary[500],
    borderRadius: borderRadius.lg,
    borderBottomRightRadius: 0,
    padding: spacing.md,
    maxWidth: '90%',
    ...shadows.light,
  },
  messageText: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: Colors.white,
    lineHeight: 22,
  },
});