import * as React from 'react';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import { RNCamera } from 'react-native-camera';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image,TouchableOpacity,FlatList,ImageBackground,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import WebCanvas from './WebCanvas'
import { WebView } from 'react-native-webview';
import { Component } from 'react';
import Canvas from 'react-native-canvas';
import { Audio } from 'expo-av';
import Signature from "react-native-signature-canvas";
import SignatureScreen from 'react-native-signature-canvas';
import SignatureView from "react-native-signature-canvas";
import { parseDataUri } from 'uri-js';
import styles from './style.js';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { ScanScreen } from './screens/ScanScreen';
import { HomeScreen } from './screens/HomeScreen';
import { BookInfoScreen } from './screens/BookInfoScreen';
import { ListenScreen } from './screens/ListenScreen';
import { SayScreen } from './screens/SayScreen';
import { ActScreen } from './screens/ActScreen';
import { BackgDrawScreen } from './screens/BakcgDrawScreen';
import { ActorDrawScreen } from './screens/ActorDrawScreen';
import { TestScreen } from './screens/TestScreen';
import { Robot } from './components/Robot';
import { Back } from './components/Back';
import { FixedBox } from './components/FixedBox';
import { booksData } from './datas/BooksData';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'Muyao': require('./assets/fonts/Muyao-Softbrush.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" 
                      component={HomeScreen} 
                      options={{ headerShown: false }} />
        <Stack.Screen name="Scan" component={ScanScreen} options={{ title: 'Scan' , headerShown: false }}/>
        <Stack.Screen name="BookInfoScreen" component={BookInfoScreen} options={{ title: 'BookInfoScreen' , headerShown: false }}/>
        <Stack.Screen name="SayScreen" component={SayScreen} options={{ title: 'SayScreen' , headerShown: false }}/>
        <Stack.Screen name="ActScreen" component={ActScreen} options={{ title: 'ActScreen' , headerShown: false }}/>
        <Stack.Screen name="ListenScreen" component={ListenScreen} options={{ title: 'ListenScreen' , headerShown: false }}/>
        <Stack.Screen name="BackgDrawScreen" component={BackgDrawScreen} options={{ title: 'BackgDrawScreen' , headerShown: false }}/>
        <Stack.Screen name="ActorDrawScreen" component={ActorDrawScreen} options={{ title: 'ActorDrawScreen' , headerShown: false }}/>
        <Stack.Screen name="TestScreen" component={TestScreen} options={{ title: 'TestScreen' , headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

