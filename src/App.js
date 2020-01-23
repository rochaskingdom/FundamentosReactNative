import React from 'react'
import { View, StyleSheet } from 'react-native'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Simples texto='Flexível!!'/>
				<ParImpar numero={30}/>
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});