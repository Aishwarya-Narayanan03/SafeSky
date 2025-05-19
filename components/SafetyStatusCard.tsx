import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ShieldCheck } from 'lucide-react-native';
import { Colors, SafetyStatusColors } from '@/constants/Colors';
import { fonts, spacing, borderRadius, shadows } from '@/constants/Theme';

export function SafetyStatusCard() {
  // This would be determined by your app's safety monitoring system
  const safetyStatus = 'safe'; // 'safe', 'caution', or 'warning'
  
  const getStatusColor = () => {
    return SafetyStatusColors[safetyStatus as keyof typeof SafetyStatusColors];
  };

  const getStatusTitle = () => {
    switch (safetyStatus) {
      case 'safe':
        return 'All Safe';
      case 'caution':
        return 'Possible Concerns';
      case 'warning':
        return 'Important Alert';
      default:
        return 'Status Unknown';
    }
  };

  const getStatusDescription = () => {
    switch (safetyStatus) {
      case 'safe':
        return 'Your children are doing great online! No safety concerns detected.';
      case 'caution':
        return 'Some content needs your attention. Check the parent dashboard.';
      case 'warning':
        return 'We\'ve detected content that requires immediate attention.';
      default:
        return 'Unable to determine safety status. Please check the app settings.';
    }
  };

  return (
    <View style={[styles.container, { borderLeftColor: getStatusColor() }]}>
      <View style={[styles.iconContainer, { backgroundColor: getStatusColor() }]}>
        <ShieldCheck size={24} color={Colors.white} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{getStatusTitle()}</Text>
        <Text style={styles.description}>{getStatusDescription()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    flexDirection: 'row',
    borderLeftWidth: 4,
    ...shadows.light,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: Colors.neutral[900],
    marginBottom: 4,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: Colors.neutral[700],
    lineHeight: 20,
  },
});