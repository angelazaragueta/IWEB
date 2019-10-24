import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import Game from "./components/Game";
import {questionAnswer, changeQuestion, submit, initQuestions} from './redux/actions';

class App extends Component{
	componentDidMount(){

		let url = "https://quiz.dit.upm.es/api/quizzes/random10wa?token=24f748a42ed54e560630"
		fetch(url)
			.then((response) => response.json())
			.then(json => {
				this.props.dispatch(initQuestions(json))
			})
	}
	render(){
		return(
			<View style={styles.app}>
				<Game style={style.Game} question={this.props.questions[this.props.currentQuestion]}
					  score={this.props.score}
					  finished= {this.props.finished}
					  currentQuestion= {this.props.currentQuestion}					  
					  questions = {this.props.questions}	
					  onQuestionAnswer={(answer) =>{
					  	this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
					  }}
					  onChangeQuestion= {(presentQuestion) => {
					  	this.props.dispatch(changeQuestion(presentQuestion))
					  }}
					  onSubmit= {(questions) => {
					  	this.props.dispatch(submit(questions))
					  }}
					  />
				
			</View>

		);
	}
}

function mapStateToProps(state){
	return{
		...state
	};
}

export default connect(mapStateToProps)(App);