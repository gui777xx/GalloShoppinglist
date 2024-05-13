import React from 'react'
import { styles } from './style'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity } from 'react-native'


export default function ItemList({item, markItem, unmarkedItem, removeItem}) {
  return (
    <View style={styles.itemList}>
        <View style={{ flex: 1}}>
            <Text style={styles.itemToBuy}>{item}</Text>
        </View>

        <TouchableOpacity 
          style={styles.actionIcon}
          onPress={() => markItem(item)}
        >
            <Ionicons name='bag-check-outline' size={24} color='#fff' />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.actionIcon, {backgroundColor: 'darkred'}]}
          onPress={() => removeItem(item)}
        >
            <Ionicons name='trash-bin-outline' size={24} color='#fff' />
        </TouchableOpacity>
    </View>
  )
}