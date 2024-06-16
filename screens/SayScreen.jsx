import * as React from 'react';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,Image,TouchableOpacity,FlatList,ImageBackground,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import styles from '../style.js';
import { Back } from '../components/Back';
import { Robot } from '../components/Robot';
import { FixedBox } from '../components/FixedBox';
import { booksData } from '../datas/BooksData';
import { constructors } from 'react-native-canvas/dist/webview-binders.js';


//说页面的章节目录
const ChartList = ({selectedBook}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [imageSource, setImageSource] = useState(require('../assets/images/SmSayrebut.png'));
    const parseText = (text) => {
      return text.replace(/、/g, '\n');
    };
    console.log(imageSource);
    const UploadSuccess = () => {
      //根据当前图像来切换图像
      // const newImageSoure = modelVisible ? require('../assets/images/SmUpload.png') : require('../assets/images/SmSucc.png');
      const newImageSource = require('../assets/images/SmSucc.png');
      setImageSource(newImageSource);
      console.log('UploadSuccess')
      // 设置 modalVisible 状态为相反的值
      // setModalVisible(!modalVisible);
    }
    
    const renderItem = ({ item }) => {
      
      return (
      <View style={{width:320,height:500,backgroundColor:'transparent',justifyContent: 'center',alignItems: 'center',}}>
        <FixedBox width={300} height={400} />
        <Text style={{position:'absolute',zIndex:1,top:130,fontFamily: 'Muyao', fontSize: 30, color: '#84473A'}}>{item.sectiontitle}</Text>
        <Text style={{position:'absolute',zIndex:1,top:180,width:230,textAlign: 'center', alignItems: 'center',fontFamily: 'Muyao', fontSize: 17, color: '#000'}}>{item.sectioncha}</Text>
        <Text style={{position:'absolute',zIndex:1,top:240,width:230,textAlign: 'center', alignItems: 'center',fontFamily: 'Muyao', fontSize: 17, color: '#84473A'}}>{parseText(item.sectioncont)}</Text>
        <View style={{top:330,width:200,height:75,position:'absolute',zIndex:1,flexDirection:'row',justifyContent: 'space-between'}}>
          <View style={{width:50,height:50,marginHorizontal: 10}}>
          <TouchableOpacity onPress={() => {setModalVisible(true);}}>
            <Image style={styles.image} source={require('../assets/images/SmSaybut.png')}/>
          </TouchableOpacity>
          </View>
          <View style={{width:50,height:50,marginHorizontal: 10}}>
          <TouchableOpacity onPress={() => {handleVoiceButtonPress}}>
            <Image style={styles.image} source={imageSource}/>
          </TouchableOpacity>
          </View>
          <View style={{width:50,height:50,marginHorizontal: 10}}>
          {/* <TouchableOpacity onPress={() => {UploadSuccess}}> */}
          <TouchableOpacity onPress={UploadSuccess}>
            <Image style={styles.image} source={require('../assets/images/SmUpload.png')}/>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      );
    };
  
    return (
      <FlatList
        data={selectedBook.sections}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={ false }
      />
    );
  };

//说的页面
export function SayScreen({ navigation }) {
    const [showBox, setShowBox] = useState(false);
    const [textIn, setTextIn] = useState('恭喜你读完了这个故事！接下来你可以对这个故事进行自由演绎，但在此之前，我想和你玩个游戏，请你根据给出的人物和情节叙述这个故事，闯关成功后即可进入演绎！');
    const route = useRoute();
    const { bookId } = route.params;
    const selectedBook = booksData.find(book => book.id === bookId);

    const setbox = () => {
      setShowBox(!showBox);
    }

    const Voicebut = () =>{
      return(
        <TouchableOpacity onPress={handleVoiceButtonPress}>
          <View style={styles.voicebutton}>
            <Image source={require('../assets/images/Voice.png')}/>
          </View>
        </TouchableOpacity>
      );
    }

    const handleVoiceButtonPress = () => {
      // 在此处更新文本内容或执行其他逻辑
      setTextIn('你说得很对，小花猪选择砖头确实是因为它知道砖头可以建造最坚固的房子。那你觉得在现实生活中，什么材料可以建造坚固的房子呢？');
    };

    return (
      <View style={styles.container}>
        <View style={{top:70,left:300,flexDirection:'row',alignItems: 'center'}}>
          <Text style={{ fontFamily: 'Muyao', fontSize: 60, color: '#84473A'}}>{selectedBook.title}</Text>
          <View style={{width:20}}></View>
          <Text style={{ fontFamily: 'Muyao', fontSize:40 , color: '#000'}}>{selectedBook.author}</Text>
        </View>
        <View style={{top:90}}>
          <ChartList selectedBook={selectedBook}/>
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
          
          
          {/* <Robot Voiceid={1} textnum={3} showVoiceButton={false}/> */}
        </View>
        <View style={styles.import}> 
            <View style={styles.addButton}>
            <Image source={require('../assets/images/Say.png')}/>
            </View>
        </View>
      </View>
    );
  }