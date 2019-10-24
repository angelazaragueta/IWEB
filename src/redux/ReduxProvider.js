import {Provider} from 'react-redux';
import GlobalState from './reducers';
import {createStore} from 'redux';
import React from 'react';
import App from '../App';
import {questions} from "../assets/mock-data";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import StartScreen from '../components/StartScreen';


const AppNavigator = createStackNavigator({
	MainScreen: {
		screen: App
	},
	StartScreen: {
		screen: StartScreen
	}
},{
	initialRouteName: 'StartScreen',
	headerMode: 'none'
});

const AppContainer = createAppContainer(AppNavigator);
export default class ReduxProvider extends React.Component{
	constructor(props){
		super(props);
		this.initialState={
			score: 0,
			finished: false,
			currentQuestion: 0,
			questions: [...questions]
		};
		this.store = this.configureStore();
	}

	render(){
		return(
				<Provider store={this.store}>
					<div style={{height: '100%'}}>
						<App store={this.store}/>
					</div>
				</Provider>
			);
	}

	configureStore(){
		return createStore(GlobalState, this.initialState);
	}
}

