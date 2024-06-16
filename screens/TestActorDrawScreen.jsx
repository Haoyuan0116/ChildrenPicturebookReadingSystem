import * as React from 'react';
import * as FileSystem from 'expo-file-system';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { useRef } from 'react';
import { StyleSheet, Text, View,Button,Image,TouchableOpacity,FlatList,ImageBackground,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import { parseDataUri } from 'uri-js';
import SignatureScreen from 'react-native-signature-canvas';
import styles from '../style.js';
import { Back } from '../components/Back';
import { Robot } from '../components/Robot';
import { FixedBox } from '../components/FixedBox';
import { PeopleData } from '../screens/TestScreen.jsx';



//下载图片
const downloadImage = async (url, filename) => {
    console.log("进来了！！！！！！！！！！！！！！！！");
    // 解析 data URL
    // const parsedDataUrl =parseDataUri(url);
    console.log("来了么");
    const path = FileSystem.documentDirectory + filename; // 使用文档目录作为保存路径
    console.log("文件保存路径:", path);
    console.log("文件下载路径:", url);
    // const result = await FileSystem.downloadAsync(url, path);
    // console.log(result.uri); // 打印出图片的本地路径
    try {
      // 写入文件
      await FileSystem.writeAsStringAsync(path, url, {
        encoding: FileSystem.EncodingType.Base64,
      });
      console.log("文件已成功保存到:", path);
    } catch (error) {
      console.error("保存文件时出错:", error);
    }
  };


//绘本人物绘制
export function ActorDrawScreen({ onOK }) {
    const ref = useRef();
  
    let imageObject = null;
  
    const [signature, setSign] = useState(null);
  
    const ChangeColor = (color) => {
      ref.current.changePenColor(color);
    }
  
    const ChangeThick = (a,b) => {
      ref.current.changePenSize(a,b);
    }
  
    const Clear = () => {
      ref.current.clearSignature();
    }
  
    const Undo = () => {
      ref.current.undo();
    }
  
    const Readpic = () => {
      ref.current.readSignature();
    }
  
    const Getpic = () => {
      ref.current.getData();
    }
  
    const handleOK = (signature) => {
      const path = FileSystem.cacheDirectory + "sign.png";
      console.log(signature);
      FileSystem.writeAsStringAsync(
      path,
      signature.replace("data:image/png;base64,", ""),
      { encoding: FileSystem.EncodingType.Base64 }
      )
      // .then(() => FileSystem.getInfoAsync(path))
      .then(() => {
        // 将 Base64 数据添加到数组中
        const imageObject = { id: PeopleData.length + 1, base64: signature };
        PeopleData.push(imageObject);
        console.log('保存的图片数据数组:', PeopleData);
      })
      .then(console.log)
      .catch(console.error);
      console.log(signature);
      setSign(signature);
      const numofPD = PeopleData.length;
      const idPD = numofPD + 1;
      imageObject = {id:idPD,url:signature};
      PeopleData.push(imageObject);
      console.log('11111111111111111111111111111111111111111');
      console.log(PeopleData);
      const person = PeopleData.find(person => person.id === 1);
      signature = person.url;
      setSign(signature);
      console.log("准备进入！！！！！！！！！！");
      downloadImage(signature, 'signature.jpg');
    };
  
  
    const handleEmpty = () => {
      // console.log("Empty");
    };
  
    const style = `.m-signature-pad--footer
      .button {
        background-color: red;
        color: #FFF;
      }`;
    
    return (
      <View style={styles.draw}>
        <View style={styles.preview}>
          {signature ? (
            <Image
              resizeMode={"contain"}
              style={{ width: 335, height: 114 }}
              source={{ uri: signature }}
            />
          ) : null}
        </View>
        <View style={styles.dora}>
        </View>
        <View style={styles.header}>
          <View style={{width:70,height:434,backgroundColor:'transparent',left:980,top:40,position:'absolute'}}>
            <View style={{width:70,height:70,backgroundColor:'transparent'}}>
                <TouchableOpacity onPress={() => {setModalVisible(true);}}>
                <View style={styles.assiant}>
                <Image source={require('../assets/images/Dpen.png')}/>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{width:40,height:21,backgroundColor:'transparent'}}></View>
            <View style={{width:70,height:70,backgroundColor:'transparent'}}>
                <TouchableOpacity onPress={() => {Undo()}}>
                <View style={styles.assiant}>
                <Image source={require('../assets/images/Dundo.png')}/>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{width:40,height:21,backgroundColor:'transparent'}}></View>
            <View style={{width:70,height:70,backgroundColor:'transparent'}}>
                <TouchableOpacity onPress={() => {Clear()}}>
                <View style={styles.assiant}>
                <Image source={require('../assets/images/Dbin.png')}/>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{width:40,height:21,backgroundColor:'transparent'}}></View>
            <View style={{width:70,height:70,backgroundColor:'transparent'}}>
                <TouchableOpacity onPress={() => {setModalVisible(true);}}>
                <View style={styles.assiant}>
                <Image source={require('../assets/images/Dcam.png')}/>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{width:40,height:21,backgroundColor:'transparent'}}></View>
            <View style={{width:70,height:70,backgroundColor:'transparent'}}>
                <TouchableOpacity onPress={() => {Readpic();
                                                  Getpic();}}>
                <View style={styles.assiant}>
                <Image source={require('../assets/images/Dsave.png')}/>
                </View>
                </TouchableOpacity>
            </View>
          </View>
          <View style={styles.colordict}>
            <View style={{width:726,height:40,backgroundColor:'transparent',flexDirection:'row'}}>
              <View style={{width:40,height:40,backgroundColor:'transparent'}}>
                    <TouchableOpacity onPress={() => {ChangeColor('#FC4AA2');}}>
                    <View style={styles.assiant}>
                    <Image source={require('../assets/images/Color1.png')}/>
                    </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:9,height:40,backgroundColor:'transparent'}}></View>
              <View style={{width:40,height:40,backgroundColor:'transparent'}}>
                    <TouchableOpacity onPress={() => {ChangeColor('#FC011A');}}>
                    <View style={styles.assiant}>
                    <Image source={require('../assets/images/Color2.png')}/>
                    </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:9,height:40,backgroundColor:'transparent'}}></View>
              <View style={{width:40,height:40,backgroundColor:'transparent'}}>
                    <TouchableOpacity onPress={() => {ChangeColor('#FE6A03');}}>
                    <View style={styles.assiant}>
                    <Image source={require('../assets/images/Color3.png')}/>
                    </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:9,height:40,backgroundColor:'transparent'}}></View>
              <View style={{width:40,height:40,backgroundColor:'transparent'}}>
                    <TouchableOpacity onPress={() => {ChangeColor('#FECD00');}}>
                    <View style={styles.assiant}>
                    <Image source={require('../assets/images/Color4.png')}/>
                    </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:9,height:40,backgroundColor:'transparent'}}></View>
              <View style={{width:40,height:40,backgroundColor:'transparent'}}>
                    <TouchableOpacity onPress={() => {ChangeColor('#91D201');}}>
                    <View style={styles.assiant}>
                    <Image source={require('../assets/images/Color5.png')}/>
                    </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:9,height:40,backgroundColor:'transparent'}}></View>
              <View style={{width:40,height:40,backgroundColor:'transparent'}}>
                    <TouchableOpacity onPress={() => {ChangeColor('#04B728');}}>
                    <View style={styles.assiant}>
                    <Image source={require('../assets/images/Color6.png')}/>
                    </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:9,height:40,backgroundColor:'transparent'}}></View>
              <View style={{width:40,height:40,backgroundColor:'transparent'}}>
                    <TouchableOpacity onPress={() => {ChangeColor('#00AFFD');}}>
                    <View style={styles.assiant}>
                    <Image source={require('../assets/images/Color7.png')}/>
                    </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:9,height:40,backgroundColor:'transparent'}}></View>
              <View style={{width:40,height:40,backgroundColor:'transparent'}}>
                    <TouchableOpacity onPress={() => {ChangeColor('#2865EC');}}>
                    <View style={styles.assiant}>
                    <Image source={require('../assets/images/Color8.png')}/>
                    </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:9,height:40,backgroundColor:'transparent'}}></View>
              <View style={{width:40,height:40,backgroundColor:'transparent'}}>
                    <TouchableOpacity onPress={() => {ChangeColor('#000000');}}>
                    <View style={styles.assiant}>
                    <Image source={require('../assets/images/Color9.png')}/>
                    </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:9,height:40,backgroundColor:'transparent'}}></View>
              <View style={{width:40,height:40,backgroundColor:'transparent'}}>
                    <TouchableOpacity onPress={() => {ChangeColor('#A43701');}}>
                    <View style={styles.assiant}>
                    <Image source={require('../assets/images/Color10.png')}/>
                    </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:9,height:40,backgroundColor:'transparent'}}></View>
              <View style={{width:40,height:40,backgroundColor:'transparent'}}>
                    <TouchableOpacity onPress={() => {ChangeThick(0.5,2.5);}}>
                    <View style={styles.assiant}>
                    <Image source={require('../assets/images/Thick1.png')}/>
                    </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:9,height:40,backgroundColor:'transparent'}}></View>
              <View style={{width:40,height:40,backgroundColor:'transparent'}}>
                    <TouchableOpacity onPress={() => {ChangeThick(2.5,5);}}>
                    <View style={styles.assiant}>
                    <Image source={require('../assets/images/Thick2.png')}/>
                    </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:9,height:40,backgroundColor:'transparent'}}></View>
              <View style={{width:40,height:40,backgroundColor:'transparent'}}>
                    <TouchableOpacity onPress={() => {ChangeThick(5,7.5);}}>
                    <View style={styles.assiant}>
                    <Image source={require('../assets/images/Thick3.png')}/>
                    </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:9,height:40,backgroundColor:'transparent'}}></View>
              <View style={{width:40,height:40,backgroundColor:'transparent'}}>
                    <TouchableOpacity onPress={() => {ChangeThick(7.5,10);}}>
                    <View style={styles.assiant}>
                    <Image source={require('../assets/images/Thick4.png')}/>
                    </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:9,height:40,backgroundColor:'transparent'}}></View>
              <View style={{width:40,height:40,backgroundColor:'transparent'}}>
                    <TouchableOpacity onPress={() => {ChangeThick(10,12.5);}}>
                    <View style={styles.assiant}>
                    <Image source={require('../assets/images/Thick5.png')}/>
                    </View>
                    </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.back}>
          <Back/>
        </View>
        <View style={{backgroundColor:'transparent',width:880,height:480,left:50,top:46,zIndex:0,justifyContent: 'center',alignItems: 'center',}}>
            <View style={{width:900,height:480,backgroundColor:'transparent',zIndex:0}}>
              <SignatureScreen
                ref={ref}
                backgroundColor={'white'}
                // onErase={Eraser}
                onOK={handleOK}
                onEmpty={handleEmpty}
                descriptionText="Sign"
                // clearText="Clear"
                // confirmText="Save"
                webStyle={style}
              />
            </View>
        </View>
        <View style={styles.robot}> 
          <Robot urlgive={'../assets/audios/Intro.mp3'}/>
        </View>
        <View style={styles.import}> 
            <View style={styles.addButton}>
            <Image source={require('../assets/images/Act.png')}/>
            </View>
        </View>
        <View style={styles.dataset}> 
          <TouchableOpacity onPress={() => {setModalVisible(true);}}>
            <View style={styles.addButton}>
            <Image source={require('../assets/images/Actordata.png')}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }