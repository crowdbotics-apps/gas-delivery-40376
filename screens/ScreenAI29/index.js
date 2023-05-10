import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';

const OrderHistoryScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedDateFilter, setSelectedDateFilter] = useState('');
  const [selectedAddressFilter, setSelectedAddressFilter] = useState('');
  const orderHistoryData = [{
    id: '1',
    date: '2021-08-01',
    address: '123 Main St',
    items: ['Item 1', 'Item 2'],
    total: 25.99
  }, {
    id: '2',
    date: '2021-08-02',
    address: '456 Elm St',
    items: ['Item 3', 'Item 4'],
    total: 12.99
  }, {
    id: '3',
    date: '2021-08-03',
    address: '789 Oak St',
    items: ['Item 5', 'Item 6'],
    total: 18.99
  }, {
    id: '4',
    date: '2021-08-04',
    address: '321 Pine St',
    items: ['Item 7', 'Item 8'],
    total: 30.99
  }, {
    id: '5',
    date: '2021-08-05',
    address: '654 Maple St',
    items: ['Item 9', 'Item 10'],
    total: 22.99
  }];
  const filteredData = orderHistoryData.filter(item => {
    if (selectedDateFilter && item.date !== selectedDateFilter) {
      return false;
    }

    if (selectedAddressFilter && item.address !== selectedAddressFilter) {
      return false;
    }

    if (searchText && !item.items.includes(searchText)) {
      return false;
    }

    return true;
  });

  const renderOrderItem = ({
    item
  }) => <View style={styles.orderItemContainer}>
      <Text style={styles.orderItemText}>Date: {item.date}</Text>
      <Text style={styles.orderItemText}>Address: {item.address}</Text>
      <Text style={styles.orderItemText}>Items: {item.items.join(', ')}</Text>
      <Text style={styles.orderItemText}>Total: ${item.total.toFixed(2)}</Text>
    </View>;

  return <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search by item name" value={searchText} onChangeText={text => setSearchText(text)} />
      </View>
      <View style={styles.filtersContainer}>
        <TextInput style={styles.filterInput} placeholder="Filter by date" value={selectedDateFilter} onChangeText={text => setSelectedDateFilter(text)} />
        <TextInput style={styles.filterInput} placeholder="Filter by address" value={selectedAddressFilter} onChangeText={text => setSelectedAddressFilter(text)} />
      </View>
      <FlatList data={filteredData} renderItem={renderOrderItem} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  searchContainer: {
    marginBottom: 10
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  filterInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10
  },
  orderItemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  orderItemText: {
    fontSize: 16,
    marginBottom: 5
  }
});
export default OrderHistoryScreen;