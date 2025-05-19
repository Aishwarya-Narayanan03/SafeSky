import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { FileText, TriangleAlert as AlertTriangle, Clock, ChartBar as BarChart2, LayoutGrid as Layout } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { fonts, spacing, borderRadius, shadows } from '@/constants/Theme';
import { AlertCard } from '@/components/AlertCard';
import { ContentSummaryCard } from '@/components/ContentSummaryCard';

const { width } = Dimensions.get('window');

const chartWidth = width - (spacing.lg * 2);

export default function ParentDashboardScreen() {
  const [timeRange, setTimeRange] = useState('week');
  
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50],
        color: () => Colors.primary[500],
        strokeWidth: 2
      }
    ],
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Parent Dashboard</Text>
        </View>

        <View style={styles.alertsContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Alerts</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>

          <AlertCard
            title="Potential exposure to negative content"
            description="Emma may have been exposed to content with negative body image themes"
            time="2 hours ago"
            severity="medium"
          />

          <AlertCard
            title="Extended screen time detected"
            description="Jake has exceeded the daily screen time limit by 45 minutes"
            time="Yesterday"
            severity="low"
          />
        </View>

        <View style={styles.insightsContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Activity Insights</Text>
            <View style={styles.timeRangeSelector}>
              <TouchableOpacity 
                style={[
                  styles.timeRangeButton, 
                  timeRange === 'day' && styles.activeTimeRange
                ]}
                onPress={() => setTimeRange('day')}
              >
                <Text style={[
                  styles.timeRangeText,
                  timeRange === 'day' && styles.activeTimeRangeText
                ]}>Day</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[
                  styles.timeRangeButton, 
                  timeRange === 'week' && styles.activeTimeRange
                ]}
                onPress={() => setTimeRange('week')}
              >
                <Text style={[
                  styles.timeRangeText,
                  timeRange === 'week' && styles.activeTimeRangeText
                ]}>Week</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[
                  styles.timeRangeButton, 
                  timeRange === 'month' && styles.activeTimeRange
                ]}
                onPress={() => setTimeRange('month')}
              >
                <Text style={[
                  styles.timeRangeText,
                  timeRange === 'month' && styles.activeTimeRangeText
                ]}>Month</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Screen Time (minutes)</Text>
            <LineChart
              data={chartData}
              width={chartWidth}
              height={180}
              chartConfig={{
                backgroundColor: Colors.white,
                backgroundGradientFrom: Colors.white,
                backgroundGradientTo: Colors.white,
                decimalPlaces: 0,
                color: () => Colors.primary[500],
                labelColor: () => Colors.neutral[600],
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '5',
                  strokeWidth: '2',
                  stroke: Colors.primary[500],
                  fill: Colors.white,
                },
                propsForBackgroundLines: {
                  stroke: Colors.neutral[200],
                  strokeDasharray: '5, 5',
                },
              }}
              bezier
              style={styles.chart}
            />
          </View>

          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Clock size={24} color={Colors.primary[500]} />
              <Text style={styles.statValue}>3.2h</Text>
              <Text style={styles.statLabel}>Avg. Screen Time</Text>
            </View>
            <View style={styles.statCard}>
              <AlertTriangle size={24} color={Colors.warning[500]} />
              <Text style={styles.statValue}>5</Text>
              <Text style={styles.statLabel}>Weekly Alerts</Text>
            </View>
            <View style={styles.statCard}>
              <Layout size={24} color={Colors.secondary[500]} />
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Apps Used</Text>
            </View>
            <View style={styles.statCard}>
              <BarChart2 size={24} color={Colors.primary[500]} />
              <Text style={styles.statValue}>78%</Text>
              <Text style={styles.statLabel}>Safe Content</Text>
            </View>
          </View>
        </View>

        <View style={styles.summaryContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Content Summary</Text>
            <TouchableOpacity>
              <FileText size={20} color={Colors.primary[500]} />
            </TouchableOpacity>
          </View>

          <ContentSummaryCard
            title="Educational Content"
            percentage={65}
            color={Colors.secondary[500]}
            topics={["Science", "History", "Math"]}
          />

          <ContentSummaryCard
            title="Entertainment"
            percentage={25}
            color={Colors.primary[500]}
            topics={["Animation", "Music", "Games"]}
          />

          <ContentSummaryCard
            title="Social Media"
            percentage={10}
            color={Colors.warning[500]}
            topics={["YouTube", "Discord", "TikTok"]}
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
  viewAllText: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: Colors.primary[500],
  },
  alertsContainer: {
    marginBottom: spacing.xl,
  },
  insightsContainer: {
    marginBottom: spacing.xl,
  },
  timeRangeSelector: {
    flexDirection: 'row',
    backgroundColor: Colors.neutral[200],
    borderRadius: borderRadius.round,
    padding: 2,
  },
  timeRangeButton: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.round,
  },
  activeTimeRange: {
    backgroundColor: Colors.white,
    ...shadows.light,
  },
  timeRangeText: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: Colors.neutral[600],
  },
  activeTimeRangeText: {
    color: Colors.primary[500],
  },
  chartContainer: {
    backgroundColor: Colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.lg,
    ...shadows.light,
  },
  chartTitle: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: Colors.neutral[800],
    marginBottom: spacing.sm,
  },
  chart: {
    marginVertical: spacing.sm,
    borderRadius: borderRadius.lg,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    backgroundColor: Colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    alignItems: 'center',
    ...shadows.light,
  },
  statValue: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: Colors.neutral[900],
    marginVertical: spacing.xs,
  },
  statLabel: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: Colors.neutral[600],
    textAlign: 'center',
  },
  summaryContainer: {
    marginBottom: spacing.xl,
  },
});