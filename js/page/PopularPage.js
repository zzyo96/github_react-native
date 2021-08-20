import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class popularPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>PopularPage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4312dd',
  },
  welcome: {
    fontsize: '20px',
    margin: 10,
    textAlign: 'center',
  },
});