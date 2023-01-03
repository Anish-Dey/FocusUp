import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { color } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return null;

  const renderItems = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex:1
  },
  item: {
    fontSize: fontSizes.md,
    color: color.white,
    paddingTop: spacing.sm
  },
  title: {
    color: color.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});