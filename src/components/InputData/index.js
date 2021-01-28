import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Value } from 'react-native-reanimated'

const InputData = ({label, placeholder, keyboardType, isTextArea, onChangeText, namaState, value}) => {
    if(isTextArea){
        return (
            <>
                <Text style={styles.label}> {label} : </Text>
                <TextInput 
                multiline={true}
                numberOfLines={4}
                placeholder={placeholder} 
                style={styles.textInputArea}
                keyboardType={keyboardType}
                value={value}
                onChangeText={(text) => onChangeText(namaState, text)}/>
            </>
        )
    }

    return (
        <>
            <Text style={styles.label}> {label} : </Text>
            <TextInput placeholder={placeholder} style={styles.textInput}
            keyboardType={keyboardType} value={Value}
            onChangeText={(text) => onChangeText(namaState, text)}/>
        </>
    )
}

export default InputData;
const styles = StyleSheet.create({
    label : {
        marginBottom : 5,
        fontSize : 16,

    },
    textInput : {
        borderWidth : 1,
        borderColor: 'grey',
        borderRadius : 5,
        padding : 10,
        marginBottom : 10,
    },
    textInputArea : {
        textAlignVertical: 'top',
        borderWidth : 1,
        borderColor: 'grey',
        borderRadius : 5,
        padding : 10,
        marginBottom : 10,
    }
})
