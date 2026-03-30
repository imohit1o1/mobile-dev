import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import { Tasks } from '@/constants/Tasks'
import { Colors } from '@/constants/Color'
import { Ionicons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import TaskDetail from '@/components/TaskDetail'

const TaskDetailPage = () => {
    const { id } = useLocalSearchParams()
    const insets = useSafeAreaInsets()

    // Find the task by id
    const task = Tasks.find(t => t.id === id)

    if (!task) {
        return (
            <View style={[styles.container, { paddingTop: insets.top }]}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => router.back()}
                        style={styles.iconButton}
                    >
                        <Ionicons name="chevron-back" size={22} color={Colors.textPrimary} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Task Not Found</Text>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="notifications-outline" size={22} color={Colors.textPrimary} />
                    </TouchableOpacity>
                </View>
                <View style={styles.notFoundContainer}>
                    <Ionicons name="alert-circle-outline" size={64} color={Colors.textSecondary} />
                    <Text style={styles.notFoundTitle}>Task Not Found</Text>
                    <Text style={styles.notFoundText}>
                        The task you're looking for doesn't exist.
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={styles.iconButton}
                >
                    <Ionicons name="chevron-back" size={22} color={Colors.textPrimary} />
                </TouchableOpacity>

                <Text style={styles.title}>Task Details</Text>

                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="notifications-outline" size={22} color={Colors.textPrimary} />
                </TouchableOpacity>
            </View>
            <TaskDetail task={task} />
        </View>
    )
}

export default TaskDetailPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 12,
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: Colors.surfaceLight,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: Colors.textPrimary
    },
    notFoundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    notFoundTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.textPrimary,
        marginTop: 20,
        marginBottom: 8,
    },
    notFoundText: {
        fontSize: 16,
        color: Colors.textSecondary,
        textAlign: 'center',
        lineHeight: 22,
    },
})