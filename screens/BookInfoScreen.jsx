import * as React from 'react';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View,Button,Image,TouchableOpacity,FlatList,ImageBackground,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import styles from '../style.js';
import { Back } from '../components/Back';
import { Robot } from '../components/Robot';
import { booksData } from '../datas/BooksData';


//听按钮
const Listen = ({item}) =>{
  const navigation = useNavigation();
  return(
    <TouchableOpacity onPress={() => navigation.navigate('ListenScreen', { bookId: item })}>
      <View style={styles.addButton}>
      <Image source={require('../assets/images/Listen.png')}/>
    </View>
    </TouchableOpacity>
  );

}

//说按钮
const Say = ({item}) =>{
  const navigation = useNavigation();
  return(
    <TouchableOpacity onPress={() => navigation.navigate('SayScreen', { bookId: item })}>
      <View style={styles.addButton}>
      <Image source={require('../assets/images/Say.png')}/>
    </View>
    </TouchableOpacity>
  );

}

//演按钮
const Act = ({item}) =>{
  const navigation = useNavigation();
  return(
    <TouchableOpacity onPress={() => navigation.navigate('ActScreen', { bookId: item })}>
      <View style={styles.addButton}>
      <Image source={require('../assets/images/Act.png')}/>
    </View>
    </TouchableOpacity>
  );

}

//绘本信息界面
export function BookInfoScreen({}) {
    const route = useRoute();
    const { bookId } = route.params;
    const selectedBook = booksData.find(book => book.id === bookId);
    return (
      <View style={styles.container}>
        <View style={styles.dora}>
        </View>
        <View style={styles.header}>
          <View style={{ bottom:0 }}>
              <Image source={require('../assets/images/logo.png')}/>
          </View>
        </View>
        <View style={styles.back}>
          <Back/>
        </View>
        <View style={styles.InfoCont}>
          <View style={styles.left}>
            <Image style={{zIndex: 0,position: 'absolute',borderRadius: 8}} source={selectedBook.image}/>
            <Image style={{zIndex: 1,position: 'absolute'}} source={require('../assets/images/shade.png')}/>
          </View>
          <View style={styles.right}>
            <View style={{height:180,backgroundColor:'transparent',margin:7}}>
            <View style={{height:110,alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{ fontFamily: 'Muyao', fontSize: 80, color: '#84473A'}}>{selectedBook.title}</Text>
            {/* <Text style={{ fontFamily: 'Muyao', fontSize: 80, color: '#84473A'}}>nihao</Text> */}
            </View>
            <View style={{height:70,alignItems: 'center',justifyContent: 'center',backgroundColor:'transparent'}}>
            <Text style={{ fontFamily: 'Muyao', fontSize: 35}}>{selectedBook.author}</Text>
            </View>
            </View>
            <View style={{height:200,margin:7,flexDirection: 'row'}}>
              <Image style={{zIndex: 0,position: 'absolute'}} source={require('../assets/images/BookInfoBack.png')}/> 
              <View style={{width:143,height:200,backgroundColor:'transparent',justifyContent: 'center',alignItems: 'center',}}>
                <Listen item={selectedBook.id}/>
              </View>
              <View style={{width:143,height:200,backgroundColor:'transparent',justifyContent: 'center',alignItems: 'center',}}>
                <Say item={selectedBook.id}/>
              </View>
              <View style={{width:143,height:200,backgroundColor:'transparent',justifyContent: 'center',alignItems: 'center',}}>
                <Act item={selectedBook.id}/>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.robot}> 
          <Robot Voiceid={1} textnum={2} showVoiceButton={false}/>
        </View>
   
      </View>
    );
  }