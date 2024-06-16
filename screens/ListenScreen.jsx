import * as React from 'react';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View,Button,Image,TouchableOpacity,FlatList,ImageBackground,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import styles from '../style.js';
import { Back } from '../components/Back';
// import { Robot } from '../components/Robot';
import { FixedBox } from '../components/FixedBox';
import { booksData } from '../datas/BooksData';

//播放声音
// async function playSound({urlgive}) {
//   // console.log('Loading Sound');
//   // console.log(urlgive);
//   // const { sound } = await Audio.Sound.createAsync( require({urlgive}));
//   const { sound } = await Audio.Sound.createAsync(require('../assets/audios/Intro.mp3'));

//   // console.log('Playing Sound');
  
//   await sound.playAsync();

//   return null;
// }


const soundList = {
  '3pig1.mp3' : require('../assets/audios/3pig1.mp3'),
  '3pig2.mp3' : require('../assets/audios/3pig2.mp3'),
  '3pig3.mp3' : require('../assets/audios/3pig3.mp3'),
  '3pig4.mp3' : require('../assets/audios/3pig4.mp3'),
  '3pig5.mp3' : require('../assets/audios/3pig5.mp3'),
  '3pig6.mp3' : require('../assets/audios/3pig6.mp3'),
  '3pig7.mp3' : require('../assets/audios/3pig7.mp3'),
  '3pig8.mp3' : require('../assets/audios/3pig8.mp3'),
  '3pig9.mp3' : require('../assets/audios/3pig9.mp3'),
  '3pig10.mp3' : require('../assets/audios/3pig10.mp3'),
}


//说页面的章节目录
const PageList = ({selectedBook, onButtonPress}) => {
  const [isPlaying, setIsPlaying] = useState(false); // 用于保存音频播放状态
  const [sound, setSound] = useState(null); // 用于保存音频对象

  // const onButtonPress = () => {};

  const playSound = async ({ url }) => {
    if (isPlaying) { // 如果当前正在播放音频，则停止播放
      await sound.stopAsync();
      setIsPlaying(false);
      return;
    }

    const { sound: newSound } = await Audio.Sound.createAsync(soundList[url]);
    await newSound.playAsync();
    setIsPlaying(true);
    setSound(newSound);
  };

  const renderItem = ({ item }) => (
    <View style={{width:700,height:500,backgroundColor:'transparent',justifyContent: 'center',alignItems: 'center',}}>
      <View style={{width:75,height:75,left:330,top:340,position:'absolute',zIndex:1}}>
        <TouchableOpacity onPress={() => {playSound({ url: item.voiceover });onButtonPress();}}>
          <Image style={styles.image} source={require('../assets/images/Saybut.png')}/>
        </TouchableOpacity>
        </View>
      <View style={{width:566,height:450,backgroundColor:'transparent',justifyContent: 'center',alignItems: 'center',borderWidth: 3,borderColor: '#84473A',borderStyle: 'dashed',borderRadius:'5'}}>
      <Image style={styles.imagebook} source={item.photo}/>
      </View>
    </View>
  );
  
    return (
      <FlatList
        data={selectedBook.contents}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={ false }
      />
    );
  };

//听的页面
export function ListenScreen({ navigation }) {

    const [textIn, setTextIn] = useState('你觉得为什么小花猪决定用砖头建房子，而不是用稻草或木头呢？');
    const route = useRoute();
    const { bookId } = route.params;
    const selectedBook = booksData.find(book => book.id === bookId);

    const handleVoiceButtonPress = () => {
      // 在此处更新文本内容或执行其他逻辑
      setTextIn('你说得很对，小花猪选择砖头确实是因为它知道砖头可以建造最坚固的房子。那你觉得在现实生活中，什么材料可以建造坚固的房子呢？');
    };

    const Voicebut = () =>{
      return(
        <TouchableOpacity onPress={handleVoiceButtonPress}>
          <View style={styles.voicebutton}>
            <Image source={require('../assets/images/Voice.png')}/>
          </View>
        </TouchableOpacity>
      );
    }
    const handleButtonPress = () => {
      // 处理按钮按下事件，触发Robot组件的功能
      console.log('按钮被按下了！触发Robot组件的功能');
      setShowBox(!showBox);
    };
    const Robot = ({urlgive,textnum}) =>{
        //声音数据
      const VoicesData = [
        {id:1, text:'小朋友们，你们好呀，欢迎来到绘本世界，在这里你可以看自己想看的绘本！'},
        {id:2, text:'三只小猪'},
        {id:3, text:'三只小猪'},
        {id:4, text:'三只小猪'},
      ];
      //语音按钮
      // const textIn = VoicesData.find(item => item.id === textnum)?.text;
      return(
        <View style={{flexDirection: 'row',width:540}}>
          <TouchableOpacity onPress={() => {setbox()}}>
            <View style={styles.assiant}>
            <Image source={require('../assets/images/Robot.png')}/>
            </View>
          </TouchableOpacity>
        </View>
      );
    };
    
    return (
      <View style={styles.container}>
        <View style={{top:70,left:300,flexDirection:'row',alignItems: 'center'}}>
          <Text style={{ fontFamily: 'Muyao', fontSize: 60, color: '#84473A'}}>{selectedBook.title}</Text>
          <View style={{width:20}}></View>
          <Text style={{ fontFamily: 'Muyao', fontSize:40 , color: '#000'}}>{selectedBook.author}</Text>
        </View>
        <View style={{top:90}}>
          <PageList selectedBook={selectedBook} onButtonPress={handleButtonPress}/>
        </View>
        <View style={styles.dora}>
        </View>
        <View style={styles.header}>
        </View>
        <View style={styles.back}>
          <Back/>
        </View>
        <View style={styles.robot}> 
          <View style={{flexDirection: 'row',width:540}}>
            <TouchableOpacity onPress={() => {setbox()}}>
              <View style={styles.assiant}>
              <Image source={require('../assets/images/Robot.png')}/>
              </View>
            </TouchableOpacity>
            {showBox && <View style={styles.messagebox}>
            <View style={styles.messageboxinner}>
            <View style={{margin:15}}>
            <Text style={{ fontFamily: 'Muyao', fontSize: 20, color: '#84473A'}}>{textIn}</Text>
            </View>
            <View style={{bottom:10, right:340, position:'absolute'}}><Voicebut/></View>
            </View>
          </View>}
          </View> 
        </View>
        <View style={styles.import}> 
            <View style={styles.addButton}>
            <Image source={require('../assets/images/Listen.png')}/>
            </View>
        </View>
      </View>
    );
  }