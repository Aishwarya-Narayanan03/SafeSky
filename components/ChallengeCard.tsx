import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Clock, Star, ChevronRight } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { fonts, spacing, borderRadius, shadows } from '@/constants/Theme';

type ChallengeCardProps = {
  title: string;
  description: string;
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
  daysLeft: number;
  imageUrl: string;
};

export function ChallengeCard({ 
  title, 
  description, 
  points, 
  difficulty, 
  daysLeft,
  imageUrl 
}: ChallengeCardProps) {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'easy':
        return Colors.secondary[500];
      case 'medium':
        return Colors.primary[500];
      case 'hard':
        return Colors.warning[500];
      default:
        return Colors.primary[500];
    }
  };

  const getDifficultyText = () => {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  };

  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay}>
          <View style={styles.header}>
            <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor() }]}>
              <Text style={styles.difficultyText}>{getDifficultyText()}</Text>
            </View>
            <View style={styles.pointsContainer}>
              <Star size={16} color={Colors.warning[500]} />
              <Text style={styles.pointsText}>{points} pts</Text>
            </View>
          </View>
          
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            
            <View style={styles.footer}>
              <View style={styles.timeContainer}>
                <Clock size={14} color={Colors.neutral[400]} />
                <Text style={styles.timeText}>{daysLeft} days left</Text>
              </View>
              
              <TouchableOpacity style={styles.startButton}>
                <Text style={styles.startButtonText}>Start Challenge</Text>
                <ChevronRight size={16} color={Colors.white} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    marginBottom: spacing.lg,
    ...shadows.medium,
  },
  image: {
    height: 200,
  },
  imageStyle: {
    borderRadius: borderRadius.lg,
  },
  overlay: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  difficultyBadge: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.round,
  },
  difficultyText: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: Colors.white,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.round,
  },
  pointsText: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
    color: Colors.white,
    marginLeft: 4,
  },
  contentContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: borderRadius.lg,
    padding: spacing.md,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: Colors.white,
    marginBottom: spacing.xs,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: Colors.neutral[100],
    marginBottom: spacing.md,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: Colors.neutral[300],
    marginLeft: 4,
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary[500],
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.round,
  },
  startButtonText: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: Colors.white,
    marginRight: 2,
  },
});