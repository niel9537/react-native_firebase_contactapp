import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert  } from 'react-native';
import { InputData }   from '../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database'
import firebase from '../../config/Firebase'

class TambahKontak extends Component {
    constructor(props) {
        super(props)
        this.state = {
             nama: '',
             nomorHP: '',
             alamat: '',
        }
    }

    onChangeText = (namaState, value) => {
        this.setState({
            [namaState] : value
        })
    }
    
    
    onSubmit = () =>{
        if(this.state.nama && this.state.nomorHP && this.state.alamat){
            const kontakReferensi = firebase.database().ref('Kontak');
            const kontak = {
                nama : this.state.nama,
                nomorHP : this.state.nomorHP,
                alamat : this.state.alamat,
            }
            kontakReferensi
                .push(kontak)
                .then((data) => {
                    Alert.alert('Sukses', 'Kontak Tersimpan');
                    this.props.navigation.replace('Home');
                }) 
                .catch((error) => {
                    console.log("error : ", error);
                })
        }else{
            Alert.alert('Error', 'Nama, NomorHP, dan Alamat wajib diisi');
        }
       
    };
    render() {
		return (  
			<View>
				<InputData label="Nama" placeholder="Masukan Nama" onChangeText={this.onChangeText} value={this.state.nama} namaState="nama"/>
				<InputData label="No. HP" placeholder="Masukan No. HP" keyboardType="number-pad" onChangeText={this.onChangeText} value={this.state.nomorHP} namaState="nomorHP" />
				<InputData label="Alamat" placeholder="Masukan Alamat" isTextArea={true} onChangeText={this.onChangeText} value={this.state.alamat} namaState="alamat" />
                <TouchableOpacity style={styles.tombol} onPress={()=> this.onSubmit()}>
                    <Text style={styles.textTombol}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>
            </View>
		);
	}
}

export default TambahKontak;

const styles = StyleSheet.create({
    tombol : {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,

    },
    textTombol : {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    }
});

