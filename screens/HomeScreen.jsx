import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Button,Image,TouchableOpacity,FlatList,ImageBackground,ScrollView } from 'react-native';
import styles from '../style.js';
import { Robot } from '../components/Robot';
import { booksData } from '../datas/BooksData';

//进入导入页面
const Import = () =>{
    const navigation = useNavigation();
    return(
      <TouchableOpacity onPress={() => navigation.navigate('TestScreen')}>
        <View style={styles.addButton}>
        <Image source={require('../assets/images/add.png')}/>
      </View>
      </TouchableOpacity>
    );
  
  }

const BookList = () => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('BookInfoScreen', { bookId: item.id })}>
        <View style={styles.bookItem}>
          <View style={styles.book}>
          <Image
          style={styles.image}
          source={item.image}
          />
          <Image
          style={styles.imageshader}
          source={require('../assets/images/shade.png')}
          />
          </View>
        </View>
      </TouchableOpacity>
    );
  
    return (
      <FlatList
        data={booksData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={ false }
      />
    );
  };

export function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.dora}>
        </View>
        <View style={styles.header}>
          <View style={{ bottom:0 }}>
              <Image source={require('../assets/images/logo.png')}/>
          </View>
        </View>
        <View style={styles.bookShelf}>
          <BookList/>
        </View>
        <View style={styles.robot}> 
          {/* <Robot urlgive={'../assets/audios/Intro.mp3'} textnum={1}/> */}
          <Robot Voiceid={0} textnum={1} showVoiceButton={false}/>
        </View>
        <View style={styles.import}> 
          <Import/>
        </View>
      </View>
    );
  }