import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View,Button,Image,TouchableOpacity,FlatList,ImageBackground,ScrollView } from 'react-native';
import styles from '../style.js';

//返回按钮
export const Back = () =>{
    const navigation = useNavigation();
    return(
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.addButton}>
        <Image source={require('../assets/images/Back.png')}/>
      </View>
      </TouchableOpacity>
    );
  
  }