import React from 'react';
import GridView from 'react-native-super-grid';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default SpotifyLoginInitial = (props) => {
  return (
    <GridView
      itemDimension={130}
      items={props.items}
      style={styles.gridView}
      renderItem={item => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
        {item.type!=='info' ? <Text style={styles.itemName}>{item.name}</Text> : <Text style={styles.gridPrompts}>{item.name}</Text>}
        {item.type=='button' ?
        <TouchableHighlight onPress={() => props.navigation.navigate('UserAssertion')}>
          <Text style={styles.gridButton}>Continue</Text>
        </TouchableHighlight> : null }
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    backgroundColor: '#666',
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  gridPrompts: {
    color: '#c0c0c0',
    fontSize: 18,
    fontWeight: '600'
  },
  gridButton: {
    paddingTop: 8,
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  }
});
