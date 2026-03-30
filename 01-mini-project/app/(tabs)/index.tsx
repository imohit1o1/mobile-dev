import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Color';
import { StatusBar } from 'expo-status-bar';
import { FilterOptions, Tasks } from '@/constants/Tasks';
import Header from '@/components/Header';
import DateSelector from '@/components/DateSelector';
import FilterTabs from '@/components/FilterTabs';
import TaskCard from '@/components/TaskCard';
import { useTaskFilter } from '@/hooks/useTaskFilter';

const Home = () => {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState<FilterOptions>("All");

  const filteredTasks = useTaskFilter(Tasks, activeFilter);

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top }
      ]}
    >
      <StatusBar style='light' />
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
        ListHeaderComponent={
          <>
            <Header />
            <DateSelector />
            <FilterTabs selected={activeFilter} onSelect={setActiveFilter} />
          </>
        }
        contentContainerStyle={styles.list}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  list: {
    paddingBottom: 24
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
})