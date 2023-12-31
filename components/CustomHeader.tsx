import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Text,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Ionicons
          style={styles.searchIcon}
          name="ios-search"
          size={20}
          color={Colors.medium}
        />
        <TextInput style={styles.input} placeholder="Dishes, Restaurants" />
      </View>
      <Link href={'/'} asChild>
        <TouchableOpacity style={styles.optionBtn}>
          <Ionicons name="options-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.bike}
            source={require('@/assets/images/bike.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer}>
          <Text style={styles.title}>Delivery • Now</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.subtitle}>Nepal</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileBtn}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  container: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  bike: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    flex: 1,
  },
  profileBtn: {
    backgroundColor: Colors.lightGray,
    padding: 10,
    borderRadius: 50,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchContainer: {
    height: 60,
    backgroundColor: '#fff',
  },
  searchSection: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    color: Colors.mediumDark,
  },
  searchIcon: {
    paddingLeft: 10,
  },
  optionBtn: {
    padding: 10,
    borderRadius: 50,
  },
});

export default CustomHeader;
