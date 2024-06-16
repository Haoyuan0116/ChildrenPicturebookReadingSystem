import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Button,Image,TouchableOpacity,FlatList,ImageBackground,ScrollView } from 'react-native';
import { Audio } from 'expo-av';

//播放声音
// async function playSound({urlgive}) {
//     // console.log('Loading Sound');
//     // console.log(urlgive);
//     const { sound } = await Audio.Sound.createAsync( require({urlgive}));
//     // const { sound } = await Audio.Sound.createAsync(require('../assets/audios/Intro.mp3'));
  
//     // console.log('Playing Sound');
    
//     await sound.playAsync();
  
//     return null;
//   }

//   async function playSound({ urlgive }) {
//     try {
//         const soundModule = await import(urlgive);
//         const { sound } = await Audio.Sound.createAsync(soundModule.default);
//         await sound.playAsync();
//     } catch (error) {
//         console.error('Error loading sound:', error);
//     }
// }

//音频数据
const VoicesData = [
    {id:0, url: require('../assets/audios/Intro.mp3')},
    {id:1, url: require('../assets/audios/3pigIntro.mp3')},
    {id:2, url: require('../assets/audios/3pigIntro.mp3')},
    {id:3, url: require('../assets/audios/3pigIntro.mp3')},
  ];

//声音数据
const TextData = [
    {id:1, text:'小朋友们，你们好呀，欢迎来到绘本世界，在这里你可以看自己想看的绘本！用自己的双手对绘本进行演绎，快选择一本自己感兴趣的绘本吧！'},
    {id:2, text:'三只小猪是一则著名的童话故事，接下来请你根据你的兴趣从听、说、演三个模块中选择一个你最感兴趣的模块开启绘本之旅吧！'},
    {id:3, text:'小朋友，欢迎进入绘本演绎阶段！在人物库中请你运用自己的想象，画出绘本中涉及到的所有人物。'},
    {id:4, text:'小朋友，欢迎进入绘本演绎阶段！在场景库中请你运用自己的想象，画出你进行演绎时所涉及到的所有场景。'},
  ];

//语音按钮
const Voicebut = () =>{
    return(
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.voicebutton}>
          <Image source={require('../assets/images/Voice.png')}/>
        </View>
      </TouchableOpacity>
    );
  
  }

export const Robot = ({Voiceid,textnum,showVoiceButton = true}) =>{
    console.log(Voiceid);
    const [showBox, setShowBox] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false); // 用于保存音频播放状态
    const [sound, setSound] = useState(null); // 用于保存音频对象

    const playSound = async ({ url }) => {
      if (isPlaying) { // 如果当前正在播放音频，则停止播放
        await sound.stopAsync();
        setIsPlaying(false);
        return;
      }

      console.log('VoiceData[url]');
      console.log(VoicesData[url]);
      // console.log(url);
      const { sound: newSound } = await Audio.Sound.createAsync(VoicesData[url].url);
      await newSound.playAsync();
      setIsPlaying(true);
      setSound(newSound);
    };
  
    const setbox = () => {
      setShowBox(!showBox);
    }
  
    const textIn = TextData.find(item => item.id === textnum)?.text;
    // console.log('robot');
    // console.log(showBox);
    return(
      // <TouchableOpacity onPress={() => {playSound(urlgive);}}>
      <View style={{flexDirection: 'row',width:540}}>
        <TouchableOpacity onPress={() => {playSound({url:Voiceid}),setbox()}}>
          <View style={styles.assiant}>
          <Image source={require('../assets/images/Robot.png')}/>
          </View>
        </TouchableOpacity>
        
        {showBox && <View style={styles.messagebox}>
          <View style={styles.messageboxinner}>
            <View style={{margin:15}}>
            <Text style={{ fontFamily: 'Muyao', fontSize: 20, color: '#84473A'}}>{textIn}</Text>
            </View>
            {showVoiceButton && <View style={{ bottom: 10, right: 340, position: 'absolute' }}><Voicebut /></View>}
          </View>
        </View>}
      </View>
      
  
    );
  };
