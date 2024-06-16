import * as React from 'react';
import * as FileSystem from 'expo-file-system';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { useRef } from 'react';
import { StyleSheet, Text, View,Button,Image,TouchableOpacity,FlatList,ImageBackground,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import SignatureScreen from 'react-native-signature-canvas';
import styles from '../style.js';
import { Back } from '../components/Back';
import { Robot } from '../components/Robot';
import { FixedBox } from '../components/FixedBox';


//绘本背景绘制
export function BackgDrawScreen({ navigation }) {
    const ref = useRef();
  
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
  
    const style = `.m-signature-pad--footer
      .button {
        background-color: red;
        color: #FFF;
      }`;
  
    return (
      <View style={styles.draw}>
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
                <TouchableOpacity onPress={() => {setModalVisible(true);}}>
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
          <View style={{backgroundColor:'transparent',width:880,height:480,left:50,top:46,zIndex:0,justifyContent: 'center',alignItems: 'center',borderColor:'black',borderWidth:'2px'}}>
            <View style={{width:900,height:480,backgroundColor:'transparent',zIndex:0}}>
              <SignatureScreen
                ref={ref}
                backgroundColor={'white'}
                // onErase={Eraser}
                // onOK={handleOK}
                penColor='black'
                // onEmpty={handleEmpty}
                descriptionText="Sign"
                // clearText="Clear"
                // confirmText="Save"
                webStyle={style}
              />
            </View>
        </View>
        <View style={styles.robot}> 
          <Robot Voiceid={1} textnum={4} showVoiceButton={false}/>
        </View>
        <View style={styles.import}> 
            <View style={styles.addButton}>
            <Image source={require('../assets/images/Act.png')}/>
            </View>
        </View>
        <View style={styles.dataset}> 
            <View style={styles.addButton}>
            <Image source={require('../assets/images/Backgdata.png')}/>
            </View>
        </View>
      </View>
    );
  }
  