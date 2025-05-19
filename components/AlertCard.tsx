import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TriangleAlert as AlertTriangle, CircleAlert as AlertCircle, OctagonAlert as AlertOctagon } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { fonts, spacing, borderRadius, shadows } from '@/constants/Theme';

type AlertCardProps = {
  title: string;
  description: string;
  time: string;
  severity: 'low' | 'medium' | 'high';
};

export function AlertCard({ title, description, time, severity }: AlertCardProps) {
  const getSeverityIcon = () => {
    switch (severity) {
      case 'low':
        return <AlertTriangle size={24} color={Colors.warning[500]} />;
      case 'medium':
        return <AlertCircle size={24} color={Colors.warning[600]} />;
      case 'high':
        return <AlertOctagon size={24} color={Colors.error[500]} />;
      default:
        return <AlertTriangle size={24} color={Colors.warning[500]} />;
    }
  };

  const getSeverityBgColor = () => {
    switch (severity) {
      case 'low':
        return Colors.warning[100];
      case 'medium':
        return Colors.warning[200];
      case 'high':
        return Colors.error[100];
      default:
        return Colors.warning[100];
    }
  };

  const getSeverityLabel = () => {
    switch (severity) {
      case 'low':
        return 'Low Priority';
      case 'medium':
        return 'Medium Priority';
      case 'high':
        return 'High Priority';
      default:
        return 'Alert';
    }
  };

  const getSeverityLabelColor = () => {
    switch (severity) {
      case 'low':
        return Colors.warning[700];
      case 'medium':
        return Colors.warning[800];
      case 'high':
        return Colors.error[700];
      default:
        return Colors.warning[700];
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: getSeverityBgColor() }]}>
        {getSeverityIcon()}
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        
        <Text style={styles.description}>{description}</Text>
        
        <View style={styles.footer}>
          <Text style={[styles.severityLabel, { color: getSeverityLabelColor() }]}>
            {getSeverityLabel()}
          </Text>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Review</Text>
          </TouchableOpacity>
        </View>
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
    width: 48,
    height: 48,
    borderRadius: 24,
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
    fontSize: 16,
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
    marginBottom: spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  severityLabel: {
    fontFamily: fonts.medium,
    fontSize: 12,
  },
  actionButton: {
    backgroundColor: Colors.primary[100],
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.round,
  },
  actionButtonText: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: Colors.primary[700],
  },
});