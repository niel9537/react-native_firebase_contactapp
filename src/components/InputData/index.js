import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const InputData = ({label, placeholder, keyboardType, isTextArea, onChangeText, namaState, value}) => {
    return (
        <View>
            <Text style={styles.label}> {label} : </Text>
            <TextInput 
            multiline={isTextArea}
            numberOfLines={isTextArea ? 4 : 1}
            placeholder={placeholder} 
            style={isTextArea ? styles.textInputArea : styles.textInput}
            keyboardType={keyboardType}
            value={value}
            onChangeText={(text) => onChangeText(namaState, text)}/>
        </View>
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
