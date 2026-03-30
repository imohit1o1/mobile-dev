import { useMemo } from 'react';
import { Task, FilterOptions } from '@/constants/Tasks';

export const useTaskFilter = (tasks: Task[], activeFilter: FilterOptions) => {
  const filteredTasks = useMemo(() => {
    if (activeFilter === 'All') {
      return tasks;
    }

    // Map filter options to task status values
    const statusMap: Record<FilterOptions, string> = {
      'All': '',
      'To do': 'To-do',
      'In Progress': 'In Progress',
      'Completed': 'Done',
    };

    const targetStatus = statusMap[activeFilter];

    return tasks.filter(task => task.status === targetStatus);
  }, [tasks, activeFilter]);

  return filteredTasks;
};