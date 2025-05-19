import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform,
  Animated
} from 'react-native';
import { Send, Mic, ThumbsUp, ThumbsDown } from 'lucide-react-native';
import * as Speech from 'expo-speech';
import { Colors } from '@/constants/Colors';
import { fonts, spacing, borderRadius, shadows } from '@/constants/Theme';
import { AIBuddyMessage } from '@/components/AIBuddyMessage';
import { UserMessage } from '@/components/UserMessage';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  emotion?: 'happy' | 'sad' | 'worried' | 'confused' | 'neutral';
};

const suggestedTopics = [
  "I feel sad today",
  "Someone is bullying me",
  "I don't like how I look",
  "Why do I feel different?",
  "I'm worried about something",
];

const emotionalResponses = {
  sad: [
    "I hear you're feeling sad. That's completely okay and normal. Would you like to talk about what's making you feel this way?",
    "Sometimes when we're sad, it helps to do things we enjoy. What usually makes you smile?",
    "You're so brave for sharing your feelings. Remember, it's okay to not be okay sometimes. Would you like to try some cheerful activities together?"
  ],
  bullied: [
    "I'm so sorry you're experiencing bullying. That must be really hard. Remember, it's not your fault at all.",
    "You're very brave for talking about this. Have you told a trusted adult about what's happening?",
    "Your safety and happiness are really important. Let's think about ways to handle this together."
  ],
  bodyImage: [
    "Every person is unique and beautiful in their own way. What makes you special isn't just how you look.",
    "Sometimes we can be too hard on ourselves. What would you say to a friend who felt this way?",
    "Your worth isn't determined by your appearance. Let's talk about all the amazing things that make you, YOU!"
  ],
  different: [
    "Feeling different is something many people experience. What makes us unique also makes us special!",
    "Being different isn't a bad thing - it's what makes you uniquely you. Want to explore what makes you special?",
    "Many great people in history stood out because they were different. Would you like to hear some stories?"
  ],
  worried: [
    "It's normal to feel worried sometimes. Would you like to talk about what's on your mind?",
    "When we're worried, taking deep breaths can help. Should we try some calming exercises together?",
    "You're not alone in feeling this way. Let's break down what's worrying you and tackle it together."
  ]
};

export default function BuddyScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm your AI Buddy. I'm here to listen and chat about anything that's on your mind. How are you feeling today?",
      sender: 'ai',
      timestamp: new Date(),
      emotion: 'happy'
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const translateY = bounceAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10],
  });

  const detectEmotion = (text: string): 'happy' | 'sad' | 'worried' | 'confused' | 'neutral' => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('sad') || lowerText.includes('hurt') || lowerText.includes('cry')) {
      return 'sad';
    }
    if (lowerText.includes('worry') || lowerText.includes('scared') || lowerText.includes('afraid')) {
      return 'worried';
    }
    if (lowerText.includes('confus') || lowerText.includes('don\'t understand')) {
      return 'confused';
    }
    if (lowerText.includes('happy') || lowerText.includes('great') || lowerText.includes('love')) {
      return 'happy';
    }
    return 'neutral';
  };

  const getAIResponse = (message: string): { text: string; emotion: Message['emotion'] } => {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('sad') || lowerMsg.includes('unhappy')) {
      return {
        text: emotionalResponses.sad[Math.floor(Math.random() * emotionalResponses.sad.length)],
        emotion: 'sad'
      };
    }
    
    if (lowerMsg.includes('bully') || lowerMsg.includes('mean')) {
      return {
        text: emotionalResponses.bullied[Math.floor(Math.random() * emotionalResponses.bullied.length)],
        emotion: 'worried'
      };
    }
    
    if (lowerMsg.includes('look') || lowerMsg.includes('ugly') || lowerMsg.includes('fat')) {
      return {
        text: emotionalResponses.bodyImage[Math.floor(Math.random() * emotionalResponses.bodyImage.length)],
        emotion: 'sad'
      };
    }
    
    if (lowerMsg.includes('different') || lowerMsg.includes('weird')) {
      return {
        text: emotionalResponses.different[Math.floor(Math.random() * emotionalResponses.different.length)],
        emotion: 'confused'
      };
    }
    
    if (lowerMsg.includes('worry') || lowerMsg.includes('scared')) {
      return {
        text: emotionalResponses.worried[Math.floor(Math.random() * emotionalResponses.worried.length)],
        emotion: 'worried'
      };
    }

    return {
      text: "I'm here to listen and help. Could you tell me more about how you're feeling?",
      emotion: 'neutral'
    };
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const userEmotion = detectEmotion(inputText);
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
      emotion: userEmotion
    };

    setMessages([...messages, newUserMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);

    setTimeout(() => {
      const aiResponse = getAIResponse(inputText);
      const newAIMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse.text,
        sender: 'ai',
        timestamp: new Date(),
        emotion: aiResponse.emotion
      };

      setMessages(prev => [...prev, newAIMessage]);
      setIsTyping(false);

      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }, 1500);
  };

  const speakMessage = (message: string) => {
    Speech.speak(message, {
      language: 'en',
      pitch: 1.0,
      rate: 0.9,
    });
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <View style={styles.header}>
        <Animated.View style={[styles.avatarContainer, { transform: [{ translateY }] }]}>
          <Text style={styles.avatarText}>🤖</Text>
        </Animated.View>
        <Text style={styles.headerText}>Your AI Buddy</Text>
        <Text style={styles.headerSubtext}>I'm here to listen and help!</Text>
      </View>

      <ScrollView 
        ref={scrollViewRef}
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
      >
        {messages.map((message) => (
          message.sender === 'user' ? (
            <UserMessage 
              key={message.id} 
              message={message.text}
              emotion={message.emotion}
            />
          ) : (
            <AIBuddyMessage 
              key={message.id} 
              message={message.text}
              emotion={message.emotion}
              onSpeak={() => speakMessage(message.text)}
            />
          )
        ))}

        {isTyping && (
          <AIBuddyMessage 
            message="Thinking..." 
            isTyping={true}
            onSpeak={() => {}}
          />
        )}
      </ScrollView>

      <View style={styles.suggestedContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.suggestedContent}
        >
          {suggestedTopics.map((topic, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.suggestedTopic}
              onPress={() => setInputText(topic)}
            >
              <Text style={styles.suggestedText}>{topic}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tell me how you're feeling..."
          placeholderTextColor={Colors.neutral[400]}
          value={inputText}
          onChangeText={setInputText}
          multiline
          maxLength={500}
        />
        <TouchableOpacity 
          style={styles.micButton}
          onPress={() => {/* Implement voice input */}}
        >
          <Mic size={20} color={Colors.neutral[600]} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.sendButton, 
            inputText.length > 0 ? styles.sendButtonActive : null
          ]}
          onPress={handleSendMessage}
          disabled={inputText.length === 0}
        >
          <Send size={20} color={inputText.length > 0 ? Colors.white : Colors.neutral[400]} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
  },
  header: {
    paddingTop: spacing.xxl,
    paddingBottom: spacing.lg,
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[200],
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
    ...shadows.medium,
  },
  avatarText: {
    fontSize: 40,
  },
  headerText: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: Colors.neutral[900],
  },
  headerSubtext: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: Colors.neutral[600],
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: spacing.lg,
    paddingTop: spacing.md,
  },
  suggestedContainer: {
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[200],
    paddingVertical: spacing.sm,
    backgroundColor: Colors.white,
  },
  suggestedContent: {
    paddingHorizontal: spacing.lg,
  },
  suggestedTopic: {
    backgroundColor: Colors.primary[100],
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.round,
    marginRight: spacing.sm,
  },
  suggestedText: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: Colors.primary[600],
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[200],
  },
  input: {
    flex: 1,
    backgroundColor: Colors.neutral[100],
    borderRadius: borderRadius.round,
    paddingHorizontal: spacing.md,
    paddingVertical: Platform.OS === 'ios' ? spacing.sm : 2,
    fontFamily: fonts.regular,
    fontSize: 16,
    maxHeight: 100,
    color: Colors.neutral[800],
  },
  micButton: {
    marginHorizontal: spacing.sm,
    padding: spacing.sm,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.neutral[300],
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonActive: {
    backgroundColor: Colors.primary[500],
  },
});