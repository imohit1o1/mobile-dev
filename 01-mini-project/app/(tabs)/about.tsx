
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Color'
import { Ionicons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const AboutScreen = () => {
    const insets = useSafeAreaInsets()

    return (
        <ScrollView
            style={[styles.container, { paddingTop: insets.top }]}
            contentContainerStyle={styles.contentContainer}
        >
            {/* Header Section */}
            <View style={styles.header}>
                <Ionicons name="information-circle" size={48} color={Colors.primary} />
                <Text style={styles.headerTitle}>Learning Journey</Text>
                <Text style={styles.headerSubtitle}>React Native & Expo Exploration</Text>
            </View>

            {/* Completed Assignments */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Ionicons name="checkmark-circle" size={24} color={Colors.statusDone} />
                    <Text style={styles.sectionTitle}>✅ Completed Assignments</Text>
                </View>

                <View style={styles.assignmentCard}>
                    <View style={styles.assignmentItem}>
                        <Ionicons name="filter" size={20} color={Colors.primary} />
                        <Text style={styles.assignmentText}>Filter Functionality</Text>
                    </View>
                    <Text style={styles.assignmentDesc}>
                        Implemented custom hook (useTaskFilter) for filtering tasks by status (All, To-do, In Progress, Completed)
                    </Text>
                </View>

                <View style={styles.assignmentCard}>
                    <View style={styles.assignmentItem}>
                        <Ionicons name="document-text" size={20} color={Colors.primary} />
                        <Text style={styles.assignmentText}>Task Detail Page</Text>
                    </View>
                    <Text style={styles.assignmentDesc}>
                        Created beautiful TaskDetail component with dynamic routing using [id].tsx for individual task views
                    </Text>
                </View>
            </View>

            {/* Learning Topics */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Ionicons name="book" size={24} color={Colors.primary} />
                    <Text style={styles.sectionTitle}>📚 What I Learned</Text>
                </View>

                <View style={styles.learningCard}>
                    <View style={styles.learningItem}>
                        <Ionicons name="navigate" size={20} color={Colors.statusInProgress} />
                        <View style={styles.learningContent}>
                            <Text style={styles.learningTitle}>Navigation Systems</Text>
                            <Text style={styles.learningDesc}>Stack Navigation & Tab Navigation patterns</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.learningCard}>
                    <View style={styles.learningItem}>
                        <Ionicons name="git-branch" size={20} color={Colors.statusInProgress} />
                        <View style={styles.learningContent}>
                            <Text style={styles.learningTitle}>Routing & File Structure</Text>
                            <Text style={styles.learningDesc}>Expo Router, file-based routing, grouping, and dynamic routes [id]</Text>
                        </View>
                    </View>
                </View>

            </View>

            {/* Thanks Section */}
            <View style={styles.section}>
                <View style={styles.thanksCard}>
                    <Ionicons name="heart" size={32} color={Colors.primary} />
                    <Text style={styles.thanksTitle}>Thank You!</Text>
                    <Text style={styles.thanksText}>
                        Special thanks to Hitesh and Suraj Sir for the amazing React Native & Expo tutorials!
                    </Text>
                    <Text style={styles.requestText}>
                        🙏 Please drop more videos on React Native + Expo
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    contentContainer: {
        padding: 20,
        paddingBottom: 40,
    },
    header: {
        alignItems: 'center',
        marginBottom: 32,
        paddingVertical: 20,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: '700',
        color: Colors.textPrimary,
        marginTop: 16,
        marginBottom: 8,
    },
    headerSubtitle: {
        fontSize: 16,
        color: Colors.textSecondary,
        textAlign: 'center',
    },
    section: {
        marginBottom: 32,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        gap: 12,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.textPrimary,
    },
    assignmentCard: {
        backgroundColor: Colors.surface,
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    assignmentItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        gap: 12,
    },
    assignmentText: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.textPrimary,
    },
    assignmentDesc: {
        fontSize: 15,
        color: Colors.textSecondary,
        lineHeight: 22,
        marginLeft: 32,
    },
    learningCard: {
        backgroundColor: Colors.surface,
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    learningItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
    },
    learningContent: {
        flex: 1,
    },
    learningTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.textPrimary,
        marginBottom: 4,
    },
    learningDesc: {
        fontSize: 14,
        color: Colors.textSecondary,
        lineHeight: 20,
    },
    thanksCard: {
        backgroundColor: Colors.surface,
        borderRadius: 20,
        padding: 24,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.border,
    },
    thanksTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.textPrimary,
        marginTop: 16,
        marginBottom: 12,
    },
    thanksText: {
        fontSize: 16,
        color: Colors.textSecondary,
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 16,
    },
    requestText: {
        fontSize: 16,
        color: Colors.primary,
        textAlign: 'center',
        fontWeight: '600',
    },
});

export default AboutScreen