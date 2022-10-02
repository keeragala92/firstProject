import React from 'react';
import {BackHandler, ImageBackground, Text, TouchableOpacity, View} from 'react-native';

import styles from './HomeCC.styles';

class HomeCC extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  onIncrease() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  onDecrease() {
    this.setState({
      count: (this.state.count = 1),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.count}</Text>

        <view style={{flexDirection:'row' Bac}}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.onIncrease()}>
            <Text style={styles.btnTitle}>add Button</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn2}
            onPress={() => this.onDecrease()}>
            <Text style={styles.btnTitle}>- Button</Text>
          </TouchableOpacity>
        </view>
      </View>
    );
  }
}

export default HomeCC;
