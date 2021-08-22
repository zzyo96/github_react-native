import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Mypage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Mypage</Text>
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
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});
