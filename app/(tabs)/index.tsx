import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Clock, Bell, BookOpen, Shield } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { fonts, spacing, borderRadius, shadows } from '@/constants/Theme';
import { SafetyStatusCard } from '@/components/SafetyStatusCard';
import { ActivityCard } from '@/components/ActivityCard';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.userName}>Parker Family</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={24} color={Colors.neutral[700]} />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>

        <SafetyStatusCard />

        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActionsContainer}>
          <TouchableOpacity style={styles.quickActionButton}>
            <View style={[styles.quickActionIcon, { backgroundColor: Colors.primary[100] }]}>
              <BookOpen size={24} color={Colors.primary[500]} />
            </View>
            <Text style={styles.quickActionText}>Resources</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.quickActionButton}>
            <View style={[styles.quickActionIcon, { backgroundColor: Colors.secondary[100] }]}>
              <Shield size={24} color={Colors.secondary[500]} />
            </View>
            <Text style={styles.quickActionText}>Safety Tips</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.quickActionButton}>
            <View style={[styles.quickActionIcon, { backgroundColor: Colors.warning[100] }]}>
              <Clock size={24} color={Colors.warning[500]} />
            </View>
            <Text style={styles.quickActionText}>Screen Time</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <ActivityCard 
          title="Emma's AI Buddy Interaction"
          time="2 hours ago"
          description="Had a thoughtful conversation about handling peer pressure in school"
          type="conversation"
        />
        
        <ActivityCard 
          title="Jake's Online Activity"
          time="Yesterday"
          description="Watched educational content about space exploration for 45 minutes"
          type="browsing"
        />
        
        <ActivityCard 
          title="Emma completed a challenge"
          time="2 days ago"
          description="Creativity Challenge: Create a digital artwork about friendship"
          type="challenge"
        />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  welcomeText: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: Colors.neutral[700],
  },
  userName: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: Colors.neutral[900],
  },
  notificationButton: {
    position: 'relative',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.light,
  },
  notificationBadge: {
    position: 'absolute',
    right: 8,
    top: 8,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.error[500],
    borderWidth: 2,
    borderColor: Colors.white,
  },
  sectionTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
    color: Colors.neutral[900],
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionButton: {
    width: '30%',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    ...shadows.light,
  },
  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  quickActionText: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: Colors.neutral[800],
    textAlign: 'center',
  },
});