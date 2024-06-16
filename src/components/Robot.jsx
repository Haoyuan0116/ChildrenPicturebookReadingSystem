import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Button,Image,TouchableOpacity,FlatList,ImageBackground,ScrollView } from 'react-native';
import { Audio } from 'expo-av';

//播放声音
// async function playSound({urlgive}) {
    async function playSound({urlgive}) {
        // console.log('Loading Sound');
        // console.log(urlgive);
        // const { sound } = await Audio.Sound.createAsync( require({urlgive}));
        const { sound } = await Audio.Sound.createAsync(require('../assets/audios/Intro.mp3'));
      
        // console.log('Playing Sound');
        
        await sound.playAsync();
      
        return null;
      }

//声音数据
const VoicesData = [
    {id:1, text:'小朋友们，你们好呀，欢迎来到绘本世界，在这里你可以看自己想看的绘本！'},
    {id:2, text:'三只小猪'},
    {id:3, text:'三只小猪'},
    {id:4, text:'三只小猪'},
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

export const Robot = ({urlgive,textnum}) =>{
    const [showBox, setShowBox] = useState(false);
  
    const setbox = () => {
      setShowBox(!showBox);
    }
  
    const textIn = VoicesData.find(item => item.id === textnum)?.text;
    // console.log('robot');
    // console.log(showBox);
    return(
      // <TouchableOpacity onPress={() => {playSound(urlgive);}}>
      <View style={{flexDirection: 'row',width:540}}>
        <TouchableOpacity onPress={() => {playSound({urlgive:urlgive}),setbox()}}>
          <View style={styles.assiant}>
          <Image source={require('../assets/images/Robot.png')}/>
          </View>
        </TouchableOpacity>
        
        {showBox && <View style={styles.messagebox}>
          <View style={styles.messageboxinner}>
            <Text>{textIn}</Text>
            <Voicebut/>
            <View ></View>
          </View>
        </View>}
      </View>
      
  
    );
  };
