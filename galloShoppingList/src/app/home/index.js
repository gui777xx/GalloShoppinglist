import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'

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
      </ImageBackground>
      <StatusBar style="light" backgroundColor='#000'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})