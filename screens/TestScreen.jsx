import * as React from 'react';
import * as FileSystem from 'expo-file-system';
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
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

//人物数据
const PeopleData = [];

export function TestScreen({ navigation }) {

    // 在组件内部定义一个状态用于保存图片数据
const [imageData, setImageData] = useState(null);

    // 在组件初始化时加载图片数据
    useEffect(() => {
        if (PeopleData.length > 0) {
            loadImageData();
        }
    }, []);

    const loadImageData = async () => {
        const imageData = [];
        for (let i = 0; i < PeopleData.length; i++) {
            const path = PeopleData[i].base64;
            const base64Data = await FileSystem.readAsStringAsync(path, {
                encoding: FileSystem.EncodingType.Base64,
            });
            imageData.push(base64Data);
        }
        setImageData(imageData);
    };

    return (
        <View style={styles.container}>
            <View>
                {imageData && imageData.map((data, index) => (
                    <Image key={index} source={{ uri: `data:image/png;base64,${data}` }} style={{ width: 100, height: 100 }} />
                ))}
            </View>
        </View>
    );
  }