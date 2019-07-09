import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationProps, NavigationScreenOptions } from '@react-navigation/core';
import styles from './Screen1.scss';

// const styles = {};
export default class Events extends Component<NavigationProps> {
  public static navigationOptions: NavigationScreenOptions = {
    title: 'Events',
  };

  public render() {
    const { navigation } = this.props;
    return (
      <View style={{ margin: 50 }}>
        <Text style={styles.emptyComponentText}>No upcoming</Text>
      </View>
    );
  }
}
