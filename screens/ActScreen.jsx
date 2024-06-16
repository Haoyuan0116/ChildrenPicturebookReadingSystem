import * as React from 'react';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View,Button,Image,TouchableOpacity,FlatList,ImageBackground,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import styles from '../style.js';
import { Back } from '../components/Back';
import { Robot } from '../components/Robot';
import { FixedBox } from '../components/FixedBox';
import { booksData } from '../datas/BooksData';


//演的页面
export function ActScreen({ navigation }) {
    const route = useRoute();
    const { bookId } = route.params;
    const selectedBook = booksData.find(book => book.id === bookId);
    
    const characterString = selectedBook.characters.map((character) => character.name).join('/');
    return (
      <View style={styles.container}>
        <View style={styles.dora}>
        </View>
        <View style={styles.back}>
            <Back/>
        </View>
        <View style={styles.robot}> 
          <Robot urlgive={'../assets/audios/Intro.mp3'}/>
        </View>
        <View style={{width:740, height:200, left:170, top:150, backgroundColor:'transparent',flexDirection:'column',alignItems:'center'}}>
          <Text style={{fontFamily: 'Muyao', fontSize: 80, color: '#84473A',marginVertical: 5}}>{selectedBook.title}</Text>
          <Text style={{fontFamily: 'Muyao', fontSize: 35, color: '#000',marginVertical: 5}}>{selectedBook.author}</Text>
          <Text style={{fontFamily: 'Muyao', fontSize: 20, color: '#84473A',marginVertical: 5}}>{characterString}</Text>
        </View>
        <View style={{width:740, height:280, left:170, top:170, backgroundColor:'transparent',flexDirection: 'row'




        }}>
          <View style={{left:170,top:140,position: 'absolute',}}>
            <TouchableOpacity onPress={() => navigation.navigate('ActorDrawScreen')}>
              <View style={{justifyContent: 'center',alignItems: 'center'}}>
                <FixedBox width={340} height={280} />
                <Image style={{zIndex:1 ,position:'absolute',opacity:0.3}} source={require('../assets/images/Actordataintro.png')}/>
                <Text style={{zIndex:2 ,position:'absolute',fontFamily: 'Muyao', fontSize: 50, color: '#000'}}>人物库</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{right:170,top:140,position: 'absolute',}}>
            <TouchableOpacity onPress={() => navigation.navigate('BackgDrawScreen')}>
              <View style={{justifyContent: 'center',alignItems: 'center'}}>
                <FixedBox width={340} height={280} />
                <Image style={{zIndex:1 ,position:'absolute',opacity:0.3}} source={require('../assets/images/Backgdataintro.png')}/>
                <Text style={{zIndex:2 ,position:'absolute',fontFamily: 'Muyao', fontSize: 50, color: '#000'}}>场景库</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.import}> 
          <TouchableOpacity onPress={() => navigation.navigate('BackgDrawScreen')}>
            <View style={styles.addButton}>
            <Image source={require('../assets/images/Act.png')}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }