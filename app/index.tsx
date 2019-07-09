import React from "react";
import { View, Text } from "react-native";
import styles from "./index.scss";

// const styles = {};
export default () => (
  <View style={{ margin: 50 }}>
    <Text style={styles.emptyComponentText}>Blank text</Text>
  </View>
);
