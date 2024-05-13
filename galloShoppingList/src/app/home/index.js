import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import ItemList from '../../components/ItemList';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <ImageBackground
        source={require('../../assets/background.jpg')}
        resizeMode='repeat'
        style={{flex: 1, justifyContent: 'flex-start'}}
      >
        <View style={styles.header}>
         <Text style={styles.title}>Lista de Produtos</Text>
         <Ionicons name="trash" size={32} color='#fff' />
        </View>

        {/* Lista de Produto */}
        <ItemList item={"café"}></ItemList>
        <ItemList item={"uva"}></ItemList>

        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput 
              color= '#FFF'
              fontSize={18}
              placeholderTextColor='#aeaeae'
              placeholder='Digite o nome do produto...'
            />
          </View>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name='add' size={36} color='fff'/>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="light" backgroundColor='#000'/>
    </SafeAreaView>
  )
}

