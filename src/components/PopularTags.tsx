import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const TAGS = [
  'Christmas',
  "Valentine's Day",
  'Birthday',
  "New Year's Day",
  'Easter',
  'Independence Day',
  'Labor Day',
  'Thanksgiving',
  'Halloween',
];

const PopularTags = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular categories</Text>
      <ScrollView
        contentContainerStyle={styles.tagsContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {TAGS.map((tag, index) => (
          <TouchableOpacity key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  tag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    margin: 6,
  },
  tagText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default PopularTags;