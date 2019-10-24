import React from 'react';
import { Button, View, StatusBar } from 'react-native';
import NavBar from './NavBar';
import { styles } from '../styles/StyleSheet';


export default class StartScreen extends React.Component {

	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}

	onPress(){
		this.props.navigation.navigate('App');
	}
	render() {
		return (
			<View style={styles.pantallaInicio}>
				<StatusBar hidden />
				<NavBar/>
				<View style={styles.pantallaInicio2}>
					<Button color = '#blue' title= "Start" onPress = {this.onPress}/>
				</View>

			</View>
			);
	}
}