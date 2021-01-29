import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CardKontak = ({key, kontakItem}) => {
    return (
        <View>
           <Text key={key}>{kontakItem.nama}</Text>
        </View>
    )
}

export default CardKontak

const styles = StyleSheet.create({})
