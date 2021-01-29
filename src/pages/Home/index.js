import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import database from '@react-native-firebase/database'
import firebase from '../../config/Firebase'
import { CardKontak } from '../../components';
export default class Home extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 kontaks: {},
			 kontaksKey: []
		}
	}

	componentDidMount(){
		firebase.database().ref("Kontak").once('value', (querySnapShot) => {
			let data = querySnapShot.val() ? querySnapShot.val() : {};
			let kontakItem = {...data};
			this.setState({
				kontaks : kontakItem,
				kontaksKey : Object.keys(kontakItem)
			})
		})
	}
	
	render() {
		const { kontaks, kontaksKey} = this.state
		
		return (
			<View style={styles.page}>
				<View style={styles.header}>
					<Text style={styles.title}>Daftar Kontak</Text>
					<View style={styles.garis}></View>
				</View>
				<View style={styles.listKontak}>
					{kontaksKey.length > 0 ? (
						kontaksKey.map((key) => (
						<CardKontak key={key} kontakItem={kontaks[key]} id={key}/>
						))
					) : (
						<Text>Daftar Kosong</Text>
					)}
				</View>
				
				
				
				<View style={styles.wrapperButton}>
					<TouchableOpacity
						style={styles.btnTambah}
						onPress={() => this.props.navigation.navigate('TambahKontak')}
					>
						<FontAwesomeIcon color="white" icon={faPlus} size={20} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1
	},
	header : {
		paddingHorizontal : 30,
		paddingTop : 30
	},
	title : {
		fontSize : 20,
		fontWeight : 'bold',
	},
	garis : {
		borderWidth : 1,
		marginTop : 10,
	},
	wrapperButton: {
		flex: 1,
		position: 'absolute',
		bottom: 0,
		right: 0,
		margin: 30
	},
	listKontak : {
		paddingHorizontal : 30,
		marginTop : 20,
	},
	btnTambah: {
		padding: 20,
		backgroundColor: 'skyblue',
		borderRadius: 30,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5
	}
});
