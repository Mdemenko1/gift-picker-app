import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type ISearchBar = {
  sanitizeInput: (input: string) => string;
  handleSearch: () => void;
  onTextChange: (text: string) => void;
};

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [categories] = useState([
    'Electronics',
    'Clothing',
    'Books',
    'Home',
    'Toys',
  ]);

  // Handle search with SQL injection protection
  const handleSearch: ISearchBar['handleSearch'] = () => {
    if (!searchQuery.trim()) return;

    const sanitizedQuery = sanitizeInput(searchQuery);

    // Save to search history (limited to 5 items)
    setSearchHistory(prev => [
      sanitizedQuery,
      ...prev.filter(item => item !== sanitizedQuery).slice(0, 4),
    ]);

    // Here you would typically call your API/search function
    console.log('Searching for:', sanitizedQuery);
  };

  // Basic SQL injection sanitization
  const sanitizeInput: ISearchBar['sanitizeInput'] = input => {
    return input
      .replace(/['";\\]/g, '') // Remove common SQL special characters
      .replace(
        /\b(ALTER|CREATE|DELETE|DROP|EXEC|INSERT|SELECT|UPDATE|UNION|WHERE)\b/gi,
        '',
      );
  };

  return (
    <View style={styles.centeredContainer}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredContainer: {
    position: 'absolute',
    top: 0, // Positions from center
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  searchContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(242, 242, 242, 0.8)', // Added transparency (0.7 opacity)    
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBar;
