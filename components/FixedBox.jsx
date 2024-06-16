import { StyleSheet, Text, View,Button,Image,TouchableOpacity,FlatList,ImageBackground,ScrollView } from 'react-native';
import styles from '../style.js';

//默认方框
export const FixedBox = ({ width, height }) => {
    const innerWidth = width - 20;
    const innerHeight = height - 20;
    return (
      <View style={[styles.boxstyle, { width, height }]}>
        <View style={[styles.boxstyleinner, { width:innerWidth, height:innerHeight }]}>
        </View>
      </View>
    );
  };
  