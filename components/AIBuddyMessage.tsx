import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Volume2, ThumbsUp, ThumbsDown } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { fonts, spacing, borderRadius, shadows } from '@/constants/Theme';

type AIBuddyMessageProps = {
  message: string;
  isTyping?: boolean;
  onSpeak: () => void;
};

export function AIBuddyMessage({ message, isTyping = false, onSpeak }: AIBuddyMessageProps) {
  const [feedback, setFeedback] = useState<'none' | 'like' | 'dislike'>('none');
  
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>🤖</Text>
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.messageContainer}>
          {isTyping ? (
            <View style={styles.typingContainer}>
              <View style={styles.typingDot} />
              <View style={[styles.typingDot, styles.typingDotMiddle]} />
              <View style={styles.typingDot} />
            </View>
          ) : (
            <Text style={styles.messageText}>{message}</Text>
          )}
        </View>
        
        {!isTyping && (
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.actionButton} onPress={onSpeak}>
              <Volume2 size={18} color={Colors.primary[500]} />
            </TouchableOpacity>
            
            <View style={styles.feedbackContainer}>
              <TouchableOpacity 
                style={[
                  styles.feedbackButton, 
                  feedback === 'like' && styles.activeFeedbackButton
                ]}
                onPress={() => setFeedback(feedback === 'like' ? 'none' : 'like')}
              >
                <ThumbsUp 
                  size={18} 
                  color={feedback === 'like' ? Colors.white : Colors.neutral[600]} 
                />
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[
                  styles.feedbackButton, 
                  feedback === 'dislike' && styles.activeFeedbackButtonDislike
                ]}
                onPress={() => setFeedback(feedback === 'dislike' ? 'none' : 'dislike')}
              >
                <ThumbsDown 
                  size={18} 
                  color={feedback === 'dislike' ? Colors.white : Colors.neutral[600]} 
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: spacing.md,
    maxWidth: '90%',
  },
  avatarContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primary[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  avatarText: {
    fontSize: 20,
  },
  contentContainer: {
    flex: 1,
  },
  messageContainer: {
    backgroundColor: Colors.neutral[100],
    borderRadius: borderRadius.lg,
    borderTopLeftRadius: 0,
    padding: spacing.md,
    ...shadows.light,
  },
  messageText: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: Colors.neutral[800],
    lineHeight: 22,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  actionButton: {
    padding: spacing.xs,
  },
  feedbackContainer: {
    flexDirection: 'row',
  },
  feedbackButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.neutral[200],
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing.xs,
  },
  activeFeedbackButton: {
    backgroundColor: Colors.secondary[500],
  },
  activeFeedbackButtonDislike: {
    backgroundColor: Colors.warning[500],
  },
  typingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
    width: 60,
  },
  typingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary[400],
    margin: 4,
    opacity: 0.5,
  },
  typingDotMiddle: {
    opacity: 0.8,
  },
});