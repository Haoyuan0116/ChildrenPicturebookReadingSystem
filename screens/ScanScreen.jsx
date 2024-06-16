import React, { useState } from 'react';
import { StyleSheet, Text, View,Button,Image,TouchableOpacity,FlatList,ImageBackground,ScrollView } from 'react-native';
import styles from '../style.js';

//导入页面
export function ScanScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.dora}>
            </View>
            <View style={styles.header}>
                <View style={{ bottom: 0 }}>
                    <Image source={require('../assets/images/logo.png')} />
                </View>
            </View>
            <View style={styles.robot}>
                <TouchableOpacity onPress={() => { setModalVisible(true); }}>
                    <View style={styles.assiant}>
                        <Image source={require('../assets/images/Robot.png')} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.import}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={styles.addButton}>
                        <Image source={require('../assets/images/Back.png')} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
