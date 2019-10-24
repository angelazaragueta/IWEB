import {combineReducers} from 'redux';
import {QUESTION_ANSWER, CHANGE_QUESTION, SUBMIT, INIT_QUESTIONS} from './actions';

function score(state= 0, action={}){
	switch(action.type){
		case SUBMIT:
		   case SUBMIT:
            let puntuacion = 0;
            for (let i= 0; i < action.payload.questions.length; i++){
                if (action.payload.questions[i].answer === action.payload.questions[i].userAnswer) {
                    puntuacion += 1;
                }
            }            
           return puntuacion;
        case INIT_QUESTIONS:
        	return 0;		
		default: 
		return state;
	}
}

function finished(state= false, action={}){
	switch(action.type){
		case SUBMIT:
			return finished(true);
		case INIT_QUESTIONS:
			return finished(false);
		default: 
		return state;
	}
}

function currentQuestion(state= 0, action={}){
	switch(action.type){
		case CHANGE_QUESTION:
			return action.payload.currentQuestion;
		case INIT_QUESTIONS:
			return 0;
		default: 
		return state;
	}
}

function questions(state= [], action={}){
	switch(action.type){
		case QUESTION_ANSWER:
			return state.map((question, i) => {
				return{...question, 
							userAnswer: action.payload.index === i ?
										action.payload.answer: question.userAnswer}
			})
		case INIT_QUESTIONS:
			return action.payload.questions;
		default: 
		return state;
	}
}


const GlobalState = (combineReducers({
	score,
	finished,
	currentQuestion,
	questions
}));

export default GlobalState;