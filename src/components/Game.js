import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/StyleSheet';


export default class Game extends React.Component{


	render(){
		if(this.props.questions.length === 0){
			return(
				<div className='noQuestions'>
					<h1>QUIZ</h1>
					<p>No hay preguntas disponibles</p>
				</div>
			)
		}else if (this.props.finished){
			return(
				<div className='finish'>
					<h1>QUIZ</h1>
					<p>Cuestionario terminado. Tu puntuación es de: </p>
					<p>{this.props.score} puntos</p>
				</div>
			)

		}else{
			let disabledAnterior= (this.props.currentQuestion === 0);
			let disabledSiguiente= (this.props.currentQuestion === (this.props.questions.length - 1));
	
		return(
			<View styles={styles.game}>
				<View styles={styles.img}>
					<ul>
						<Imagen style={styles.img} src={this.props.question.attachment.url} width="250" height="250"/>
					</ul>
				</View>
				<View style={styles.pistas}>
					<ul>
						{this.props.question.tips.map((tip, index) => 
							<li key={index}> 
								{tip}
							</li>
						)}
					</ul>
				</View>

				<View style={styles.img} >
					<h2>{this.props.question.question}</h2>
					<TextInput type="text" value={this.props.question.userAnswer || ''} onChange={(e) => {this.props.onQuestionAnswer(e.target.value);}}/>
				</View>

				<View style={styles.img}>
					<h3>Autor: {this.props.question.author.username}</h3>
					<ul>
						<Imagen style={styles.imagenAutor} src={this.props.question.author.photo.url} width="100" height="100"/>
					</ul>
				</View>

				<View style={styles.img}>
					<button value="Anterior" disabled={disabledAnterior} onClick={() => {this.props.onChangeQuestion(this.props.currentQuestion - 1)}}> Anterior </button>
					<button value="Siguiente" disabled={disabledSiguiente} onClick={() => {this.props.onChangeQuestion(this.props.currentQuestion + 1)}}> Siguiente </button>
					<button value="Submit" onClick={() => {this.props.onSubmit(this.props.questions)}}> Submit </button>
				</View>
				
			</View>
		);
	}

	}
}