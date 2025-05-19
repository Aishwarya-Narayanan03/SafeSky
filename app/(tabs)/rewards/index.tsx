import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Award, Star, Trophy, Zap, ChevronRight } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { fonts, spacing, borderRadius, shadows } from '@/constants/Theme';
import { ChallengeCard } from '@/components/ChallengeCard';
import { AchievementCard } from '@/components/AchievementCard';

export default function RewardsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Rewards & Challenges</Text>
        </View>

        <View style={styles.pointsCard}>
          <View style={styles.pointsInfo}>
            <Award size={32} color={Colors.primary[500]} style={styles.pointsIcon} />
            <View>
              <Text style={styles.pointsLabel}>Total Points</Text>
              <Text style={styles.pointsValue}>1,250</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.redeemButton}>
            <Text style={styles.redeemButtonText}>Redeem</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.badgesContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your Badges</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
              <ChevronRight size={16} color={Colors.primary[500]} />
            </TouchableOpacity>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.badgesScrollContent}
          >
            <AchievementCard 
              title="Kindness Champion"
              points={250}
              icon="heart"
              color={Colors.error[500]}
              earned={true}
            />
            <AchievementCard 
              title="Creative Genius"
              points={200}
              icon="paintBrush"
              color={Colors.primary[500]}
              earned={true}
            />
            <AchievementCard 
              title="Digital Explorer"
              points={300}
              icon="compass"
              color={Colors.secondary[500]}
              earned={false}
            />
            <AchievementCard 
              title="Team Player"
              points={150}
              icon="users"
              color={Colors.warning[500]}
              earned={false}
            />
          </ScrollView>
        </View>

        <View style={styles.weeklyProgressContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Weekly Progress</Text>
          </View>

          <View style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <View style={styles.progressTitleContainer}>
                <Trophy size={20} color={Colors.primary[500]} />
                <Text style={styles.progressTitle}>Weekly Goals</Text>
              </View>
              <Text style={styles.progressStats}>3/5 Completed</Text>
            </View>

            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '60%' }]} />
            </View>

            <View style={styles.goalsList}>
              <View style={styles.goalItem}>
                <View style={styles.goalCheckbox}>
                  <Zap size={14} color={Colors.white} />
                </View>
                <Text style={styles.goalText}>Complete 3 kindness challenges</Text>
              </View>
              <View style={styles.goalItem}>
                <View style={styles.goalCheckbox}>
                  <Zap size={14} color={Colors.white} />
                </View>
                <Text style={styles.goalText}>Participate in the creative contest</Text>
              </View>
              <View style={styles.goalItem}>
                <View style={styles.goalCheckbox}>
                  <Zap size={14} color={Colors.white} />
                </View>
                <Text style={styles.goalText}>Learn about digital safety</Text>
              </View>
              <View style={[styles.goalItem, styles.goalIncomplete]}>
                <View style={[styles.goalCheckbox, styles.goalCheckboxIncomplete]} />
                <Text style={styles.goalTextIncomplete}>Share positive feedback with friends</Text>
              </View>
              <View style={[styles.goalItem, styles.goalIncomplete]}>
                <View style={[styles.goalCheckbox, styles.goalCheckboxIncomplete]} />
                <Text style={styles.goalTextIncomplete}>Create a digital poster about kindness</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.challengesContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Active Challenges</Text>
          </View>

          <ChallengeCard
            title="Body Positivity Challenge"
            description="Create a positive affirmation poster that celebrates what makes you unique"
            points={150}
            difficulty="medium"
            daysLeft={5}
            imageUrl="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />

          <ChallengeCard
            title="Digital Kindness Week"
            description="Send three encouraging messages to friends or classmates this week"
            points={100}
            difficulty="easy"
            daysLeft={3}
            imageUrl="https://images.pexels.com/photos/7282818/pexels-photo-7282818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />

          <ChallengeCard
            title="Creative Expression Contest"
            description="Create digital art that shows what respect means to you"
            points={200}
            difficulty="hard"
            daysLeft={7}
            imageUrl="https://images.pexels.com/photos/3094218/pexels-photo-3094218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
  },
  scrollContent: {
    padding: spacing.lg,
    paddingTop: spacing.xxl,
  },
  header: {
    marginBottom: spacing.lg,
  },
  headerTitle: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: Colors.neutral[900],
  },
  pointsCard: {
    backgroundColor: Colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xl,
    ...shadows.light,
  },
  pointsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsIcon: {
    marginRight: spacing.md,
  },
  pointsLabel: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: Colors.neutral[600],
  },
  pointsValue: {
    fontFamily: fonts.bold,
    fontSize: 28,
    color: Colors.neutral[900],
  },
  redeemButton: {
    backgroundColor: Colors.primary[500],
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.round,
  },
  redeemButtonText: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
    color: Colors.white,
  },
  badgesContainer: {
    marginBottom: spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
    color: Colors.neutral[900],
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: Colors.primary[500],
    marginRight: 2,
  },
  badgesScrollContent: {
    paddingRight: spacing.lg,
  },
  weeklyProgressContainer: {
    marginBottom: spacing.xl,
  },
  progressCard: {
    backgroundColor: Colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    ...shadows.light,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  progressTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: Colors.neutral[900],
    marginLeft: spacing.sm,
  },
  progressStats: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: Colors.primary[500],
  },
  progressBar: {
    height: 8,
    backgroundColor: Colors.neutral[200],
    borderRadius: borderRadius.round,
    marginBottom: spacing.lg,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.primary[500],
    borderRadius: borderRadius.round,
  },
  goalsList: {
    gap: spacing.md,
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goalCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.primary[500],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  goalCheckboxIncomplete: {
    backgroundColor: Colors.neutral[200],
  },
  goalText: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: Colors.neutral[800],
  },
  goalIncomplete: {
    opacity: 0.7,
  },
  goalTextIncomplete: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: Colors.neutral[600],
  },
  challengesContainer: {
    marginBottom: spacing.xl,
  },
});