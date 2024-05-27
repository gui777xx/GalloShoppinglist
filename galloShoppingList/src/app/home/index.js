import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import ItemList from '../../components/ItemList';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home() {
  const [textInput, setTextInput] = useState('');
  const [item, setItems] = useState([]);
  useEffect(() => {
    getItemFromDevice();
  }, []);
  useEffect(() => {
    saveItemToDevice(item);
  }, [item]);

  const saveItemToDevice = async (item) => {
    try {
      const itemJson = JSON.stringify(item);
      await AsyncStorage.setItem('galloshoppinglist', itemJson);

    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  }

  const getItemFromDevice = async () => {
    try {
      const item = await AsyncStorage.getItem('galloshoppinglist');
      if (item != null) {
        setItems(JSON.parse(item));
      }
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  }

  const addItem = () => {
    // console.log(textInput);
    if (textInput == '') {
      Alert.alert('Ocorreu um Problema ;(', ' por favor, informe o nome do produto!!');
    } else {
      const newItem = {
        id: Math.random(),
        name: textInput,
        bought: false
      };
      setItems([...item, newItem]);
      setTextInput('');
    }
  }

  const markItemBought = itemId => {
    const newItem = item.map((item) => {
      if (item.id == itemId) {
        return { ...item, bought: true }
      }
      return item;
    });
    setItems(newItem);
  }

  const unmarkItemBought = itemId => {
    const newItem = item.map((item) => {
      if (item.id == itemId) {
        return { ...item, bought: false }
      }
      return item;
    });
    setItems(newItem);
  }

  const removeItem = itemId => {
    Alert.alert('Excluir produto?', 'confirma a exclusão deste produto?',
      [
        {
          text: 'sim', onPress: () => {
            const newItem = item.filter(item => item.id != itemId);
            setItems(newItem);
          }
        },
        {
          text: 'Cancelar',
          style: 'cancel'
        }
      ])
  }

  const removeAll = () => {
    Alert.alert('Limpar lista?', 'Confirma a exclusão de todos os produtos de sua lista?',
      [{
        text: 'Sim',
        onPress: () => { setItems([]) }
      }, {
        text: 'Cancelar',
        style: 'Cancel',
      }])
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/background.jpg')}
        resizeMode='repeat'
        style={{ flex: 1, justifyContent: 'flex-start' }}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Lista de Produtos</Text>
          <Ionicons name="trash" size={32} color='#fff' onPress={removeAll} />
        </View>

        {/* Lista de Produto */}
        <FlatList
          contentContainerStyle={{ padding: 20, paddingBottom: 100, color: "#fff" }}
          data={item}
          renderItem={({ item }) =>
            <ItemList
              item={item}
              markItem={markItemBought}
              unmarkedItem={unmarkItemBought}
              removeItem={removeItem}
            />
          }

        />


        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput
              color='#FFF'
              fontSize={18}
              placeholderTextColor='#aeaeae'
              placeholder='Digite o nome do produto...'
              value={textInput}
              onChangeText={(text) => setTextInput(text)}
            />
          </View>
          <TouchableOpacity style={styles.iconContainer} onPress={addItem}>
            <Ionicons name='add' size={36} color='fff' />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="light" backgroundColor='#000' />
    </SafeAreaView>
  )
}

