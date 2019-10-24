import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../styles/StyleSheet';

export default class NavBar extends React.Component {
  render() {
    return (
    	<View style= {styles.navBar}> 
    		<Text style= {styles.navBarText} > QUIZ game</Text> 
    	</View>      
    );
  }
}