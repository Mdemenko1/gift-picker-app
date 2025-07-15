import { View, Text, StyleSheet } from 'react-native';

export const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Find your best gift</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 40,
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  title: {
    fontFamily: 'GreatVibes-Regular', // Use the PostScript name exactly
    fontSize: 50,
    fontWeight: '700',
    lineHeight: 60,
    color: 'white',
    textAlign: 'left',
    letterSpacing: -0.5,
  },
});