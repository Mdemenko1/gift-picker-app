import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// const categories = ['All', 'Birthday', 'Anniversary', 'For Him', 'For Her', 'Kids'];

const CategoryTabs = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
      {/* {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.tab}>
          <Text style={styles.tabText}>{category}</Text>
        </TouchableOpacity>
      ))} */}
    </ScrollView>
  );
};

export default CategoryTabs;

const styles = StyleSheet.create({
  scroll: {
    marginVertical: 20,
    paddingLeft: 20,
  },
  tab: {
    marginRight: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#FFE4E1',
    borderRadius: 20,
  },
  tabText: {
    fontSize: 14,
    color: '#333',
  },
});