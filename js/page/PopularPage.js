import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

export default class popularPage extends Component {
  render() {
    const TabNavigator = createAppContainer(
      createMaterialTopTabNavigator({
        PopularTab1: {
          screen: PopularTab,
          navigationOptions: {
            title: 'tab1',
          },
        },
        PopularTab2: {
          screen: PopularTab,
          navigationOptions: {
            title: 'tab2',
          },
        },
      }),
    );

    return (
      <View style={styles.container}>
        <TabNavigator />
      </View>
    );
  }
}

class PopularTab extends Component {
  render() {
    return (
      <View>
        <Text>PopularTab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});
