import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { fonts, spacing, borderRadius, shadows } from '@/constants/Theme';

type ContentSummaryCardProps = {
  title: string;
  percentage: number;
  color: string;
  topics: string[];
};

export function ContentSummaryCard({ 
  title, 
  percentage, 
  color, 
  topics 
}: ContentSummaryCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.percentage, { color }]}>{percentage}%</Text>
      </View>
      
      <View style={styles.progressBarContainer}>
        <View 
          style={[
            styles.progressBar, 
            { width: `${percentage}%`, backgroundColor: color }
          ]} 
        />
      </View>
      
      <View style={styles.topicsContainer}>
        {topics.map((topic, index) => (
          <View key={index} style={[styles.topicTag, { backgroundColor: `${color}20` }]}>
            <Text style={[styles.topicText, { color }]}>{topic}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.light,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: Colors.neutral[900],
  },
  percentage: {
    fontFamily: fonts.bold,
    fontSize: 18,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: Colors.neutral[200],
    borderRadius: borderRadius.round,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  progressBar: {
    height: '100%',
    borderRadius: borderRadius.round,
  },
  topicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  topicTag: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.round,
    marginRight: spacing.sm,
    marginBottom: spacing.xs,
  },
  topicText: {
    fontFamily: fonts.medium,
    fontSize: 12,
  },
});