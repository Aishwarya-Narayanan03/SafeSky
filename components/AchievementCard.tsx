import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Heart, Paintbrush as PaintBrush, Compass, Users, Lock } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { fonts, spacing, borderRadius, shadows } from '@/constants/Theme';

type AchievementCardProps = {
  title: string;
  points: number;
  icon: string;
  color: string;
  earned: boolean;
};

export function AchievementCard({ 
  title, 
  points, 
  icon, 
  color, 
  earned 
}: AchievementCardProps) {
  const renderIcon = () => {
    switch (icon) {
      case 'heart':
        return <Heart size={24} color={earned ? Colors.white : Colors.neutral[400]} />;
      case 'paintBrush':
        return <PaintBrush size={24} color={earned ? Colors.white : Colors.neutral[400]} />;
      case 'compass':
        return <Compass size={24} color={earned ? Colors.white : Colors.neutral[400]} />;
      case 'users':
        return <Users size={24} color={earned ? Colors.white : Colors.neutral[400]} />;
      default:
        return <Heart size={24} color={earned ? Colors.white : Colors.neutral[400]} />;
    }
  };

  return (
    <View style={[
      styles.container, 
      { 
        backgroundColor: earned ? color : Colors.white,
        opacity: earned ? 1 : 0.8,
      }
    ]}>
      {!earned && (
        <View style={styles.lockContainer}>
          <Lock size={20} color={Colors.neutral[500]} />
        </View>
      )}
      
      <View style={[
        styles.iconContainer, 
        { 
          backgroundColor: earned ? 'rgba(255, 255, 255, 0.2)' : Colors.neutral[100] 
        }
      ]}>
        {renderIcon()}
      </View>
      
      <Text style={[
        styles.title, 
        { color: earned ? Colors.white : Colors.neutral[800] }
      ]}>
        {title}
      </Text>
      
      <Text style={[
        styles.points, 
        { color: earned ? Colors.white : Colors.neutral[500] }
      ]}>
        {points} points
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 150,
    borderRadius: borderRadius.lg,
    padding: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
    ...shadows.light,
  },
  lockContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.light,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 4,
  },
  points: {
    fontFamily: fonts.medium,
    fontSize: 12,
    textAlign: 'center',
  },
});