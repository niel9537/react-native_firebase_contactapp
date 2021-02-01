import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

const CardKontak = ({id, kontakItem, navigation, removeData}) => {
    return (
        <TouchableOpacity  style={styles.container} onPress={() => navigation.navigate('DetailKontak', {id :id})}>
           <View>
               <Text style={styles.nama}>
                   {kontakItem.nama}
               </Text>
               <Text style={styles.noHP}>
                   No. HP : {kontakItem.nomorHP}
               </Text>
               
           </View>
           <View style={styles.icon}>
            <FontAwesomeIcon icon={faEdit} color={'skyblue'} size={25} onPress={() => navigation.navigate('EditKontak', {id :id})}/>
            <FontAwesomeIcon icon={faTimes} color={'skyblue'} size={25} onPress={() => removeData(id)}/>
           </View>
        </TouchableOpacity>
    )
}

export default CardKontak

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        padding: 15,
        backgroundColor : 'white',
        borderRadius : 5,
        marginBottom : 20,
        shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5
    },
    nama : {
        fontWeight : 'bold',
        fontSize : 16
    },
    noHP : {
        color : 'gray',
        fontSize : 12
    },
    icon : {
        flexDirection : 'row',
        flex: 1,
        justifyContent : 'flex-end',
        alignItems : 'center',
    }
})
