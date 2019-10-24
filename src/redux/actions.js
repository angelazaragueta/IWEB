export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SUBMIT = 'SUBMIT';
export const INIT_QUESTIONS = 'INIT_QUESTIONS';

export function questionAnswer(index, answer){
	return{type: QUESTION_ANSWER, payload: {index, answer}};
}

export function changeQuestion(currentQuestion){
	return{type: CHANGE_QUESTION, payload: {currentQuestion}};
}

export function submit(questions){
	return{type: SUBMIT, payload: {questions}};
}

export function initQuestions(questions){
	return{type: INIT_QUESTIONS, payload: {questions}};
}


