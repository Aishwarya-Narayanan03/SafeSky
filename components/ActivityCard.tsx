import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MessageCircle, Globe, Award } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { fonts, spacing, borderRadius, shadows } from '@/constants/Theme';

type ActivityCardProps = {
  title: string;
  time: string;
  description: string;
  type: 'conversation' | 'browsing' | 'challenge';
};

export function ActivityCard({ title, time, description, type }: ActivityCardProps) {
  const renderIcon = () => {
    switch (type) {
      case 'conversation':
        return <MessageCircle size={20} color={Colors.primary[500]} />;
      case 'browsing':
        return <Globe size={20} color={Colors.warning[500]} />;
      case 'challenge':
        return <Award size={20} color={Colors.secondary[500]} />;
      default:
        return null;
    }
  };

  const getIconBackgroundColor = () => {
    switch (type) {
      case 'conversation':
        return Colors.primary[100];
      case 'browsing':
        return Colors.warning[100];
      case 'challenge':
        return Colors.secondary[100];
      default:
        return Colors.neutral[100];
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: getIconBackgroundColor() }]}>
        {renderIcon()}
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
    color: Colors.neutral[900],
    flex: 1,
    marginRight: spacing.sm,
  },
  time: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: Colors.neutral[500],
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: Colors.neutral[700],
    lineHeight: 20,
  },
});