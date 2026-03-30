import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Task } from '@/constants/Tasks'
import { Colors } from '@/constants/Color'
import { Ionicons } from '@expo/vector-icons'

const STATUS_COLOR = {
  'Done': Colors.statusDone,
  'In Progress': Colors.statusInProgress,
  'To-do': Colors.statusTodo
}

type TaskDetailProps = {
  task: Task
}

const TaskDetail = ({ task }: TaskDetailProps) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={[styles.iconBadge, { backgroundColor: task.icon.backgroundColor }]}>
          <Ionicons name={task.icon.name as any} size={32} color={Colors.primary} />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.category}>{task.category}</Text>
          <Text style={styles.title}>{task.title}</Text>
        </View>
      </View>

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Ionicons name="time-outline" size={20} color={Colors.primary} />
          <Text style={styles.detailLabel}>Time:</Text>
          <Text style={styles.detailValue}>{task.time}</Text>
        </View>

        <View style={styles.detailRow}>
          <Ionicons name="information-circle-outline" size={20} color={STATUS_COLOR[task.status]} />
          <Text style={styles.detailLabel}>Status:</Text>
          <Text style={[styles.detailValue, { color: STATUS_COLOR[task.status] }]}>
            {task.status}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Ionicons name="folder-outline" size={20} color={Colors.textSecondary} />
          <Text style={styles.detailLabel}>Category:</Text>
          <Text style={styles.detailValue}>{task.category}</Text>
        </View>
      </View>

      {/* Description Section */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>
          This task is part of the {task.category.toLowerCase()} project.
          It is currently {task.status.toLowerCase()} and scheduled for {task.time}.
        </Text>
      </View>
    </View>
  )
}

export default TaskDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  iconBadge: {
    width: 60,
    height: 60,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  headerContent: {
    flex: 1,
  },
  category: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 8,
    fontWeight: '500',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.textPrimary,
    lineHeight: 28,
  },
  detailsContainer: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden'
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  detailLabel: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginLeft: 12,
    fontWeight: '500',
    minWidth: 60,
    flexShrink: 0,
  },
  detailValue: {
    fontSize: 16,
    color: Colors.textPrimary,
    fontWeight: '600',
    marginLeft: 8,
    flex: 1,
    flexWrap: 'wrap',
  },
  descriptionContainer: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 15,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
})