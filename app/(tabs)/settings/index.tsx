import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Settings, User, Bell, Lock, Shield, CircleHelp as HelpCircle, LogOut, ChevronRight, Clock } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { fonts, spacing, borderRadius, shadows } from '@/constants/Theme';

type SettingSectionProps = {
  title: string;
  children: React.ReactNode;
};

const SettingSection = ({ title, children }: SettingSectionProps) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionContent}>
      {children}
    </View>
  </View>
);

type SettingItemProps = {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  rightElement?: React.ReactNode;
  onPress?: () => void;
};

const SettingItem = ({ icon, title, subtitle, rightElement, onPress }: SettingItemProps) => (
  <TouchableOpacity style={styles.settingItem} onPress={onPress}>
    <View style={styles.settingItemLeft}>
      {icon}
      <View style={styles.settingItemTextContainer}>
        <Text style={styles.settingItemTitle}>{title}</Text>
        {subtitle && <Text style={styles.settingItemSubtitle}>{subtitle}</Text>}
      </View>
    </View>
    <View style={styles.settingItemRight}>
      {rightElement || <ChevronRight size={20} color={Colors.neutral[400]} />}
    </View>
  </TouchableOpacity>
);

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [contentFilteringEnabled, setContentFilteringEnabled] = useState(true);
  const [screenTimeEnabled, setScreenTimeEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.profileAvatar}>
            <Text style={styles.profileAvatarText}>PF</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Parker Family</Text>
            <Text style={styles.profileEmail}>parker.family@example.com</Text>
          </View>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <SettingSection title="Account">
          <SettingItem 
            icon={<User size={22} color={Colors.primary[500]} />}
            title="Account Information"
            onPress={() => {}}
          />
          <SettingItem 
            icon={<Bell size={22} color={Colors.warning[500]} />}
            title="Notifications"
            subtitle="Control your notification preferences"
            rightElement={
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: Colors.neutral[300], true: Colors.primary[300] }}
                thumbColor={notificationsEnabled ? Colors.primary[500] : Colors.neutral[100]}
              />
            }
          />
          <SettingItem 
            icon={<Lock size={22} color={Colors.error[500]} />}
            title="Privacy & Security"
            onPress={() => {}}
          />
        </SettingSection>

        <SettingSection title="Child Safety">
          <SettingItem 
            icon={<Shield size={22} color={Colors.secondary[500]} />}
            title="Content Filtering"
            subtitle="Set age-appropriate content restrictions"
            rightElement={
              <Switch
                value={contentFilteringEnabled}
                onValueChange={setContentFilteringEnabled}
                trackColor={{ false: Colors.neutral[300], true: Colors.primary[300] }}
                thumbColor={contentFilteringEnabled ? Colors.primary[500] : Colors.neutral[100]}
              />
            }
          />
          <SettingItem 
            icon={<Clock size={22} color={Colors.primary[500]} />}
            title="Screen Time Management"
            subtitle="Set daily limits and schedules"
            rightElement={
              <Switch
                value={screenTimeEnabled}
                onValueChange={setScreenTimeEnabled}
                trackColor={{ false: Colors.neutral[300], true: Colors.primary[300] }}
                thumbColor={screenTimeEnabled ? Colors.primary[500] : Colors.neutral[100]}
              />
            }
          />
        </SettingSection>

        <SettingSection title="Support">
          <SettingItem 
            icon={<HelpCircle size={22} color={Colors.primary[500]} />}
            title="Help Center"
            subtitle="Get help and contact support"
            onPress={() => {}}
          />
          <SettingItem 
            icon={<Settings size={22} color={Colors.neutral[700]} />}
            title="About GuardianBuddy"
            subtitle="Version 1.0.0"
            onPress={() => {}}
          />
        </SettingSection>

        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color={Colors.error[500]} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
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
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    ...shadows.light,
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  profileAvatarText: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: Colors.primary[500],
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
    color: Colors.neutral[900],
    marginBottom: 2,
  },
  profileEmail: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: Colors.neutral[600],
  },
  editProfileButton: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.round,
    backgroundColor: Colors.neutral[100],
  },
  editProfileText: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: Colors.neutral[700],
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: Colors.neutral[700],
    marginBottom: spacing.sm,
    paddingLeft: spacing.sm,
  },
  sectionContent: {
    backgroundColor: Colors.white,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    ...shadows.light,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[100],
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingItemTextContainer: {
    marginLeft: spacing.md,
    flex: 1,
  },
  settingItemTitle: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: Colors.neutral[900],
  },
  settingItemSubtitle: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: Colors.neutral[600],
    marginTop: 2,
  },
  settingItemRight: {
    marginLeft: spacing.md,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    marginBottom: spacing.xxl,
  },
  logoutText: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: Colors.error[500],
    marginLeft: spacing.sm,
  },
});