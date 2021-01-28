import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import TambahKontak from '../TambahKontak';

export default class Home extends React.Component {
	render() {
		return (
			<View style={styles.page}>
				<Text> Home </Text>
				<View style={styles.wrapperButton}>
					<TouchableOpacity
						style={styles.btnTambah}
						onPress={() => this.props.navigation.navigate(TambahKontak)}
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
	wrapperButton: {
		flex: 1,
		position: 'absolute',
		bottom: 0,
		right: 0,
		margin: 30
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
