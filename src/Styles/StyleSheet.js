import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pantallaInicio: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center'
  },

  pantallaInicio2: {
    flex: 11,
    justifyContent: 'space-around',
    padding: 6,
  },

  img: {
    width: 300,
    height: 300,
    alignSelf: 'center'

  },

 
  mainScreen: {
  	flex:1,
  	justifyContent:'center',
  },

  navBar: {
  	flex:1,
  	justifyContent:'space-around',
  	alignItems: 'center',
  	backgroundColor: '#9121C1'
  },

  navBarText: {
    fontSize: 30,
    color: 'white'
  },

  game: {
  	flex:11,
    padding: 6,
  	justifyContent:'center'
  },

  content: {
  	flex:3,
  	alignItems: 'center',
    justifyContent:'space-around',

  },

  actionBar: {
  	flex:1,
  	justifyContent:'space-around',
  	alignItems: 'center',
  },

  firstButtonGroup: {
    flexDirection: 'row',
  },

  secondButtonGroup: {
    flexDirection: 'row',
  },

  questionAttachmentContainer: {
    flex: 5,
    borderTopWidth: 25,
    borderTopColor: 'white'
  },

  question: {
    flex: 2,
    justifyContent:'space-around',
    alignItems: 'center',
    borderBottomWidth: 15,
    borderBottomColor: 'white'
  },

   textInputContainer: {
    flex: 1,
    padding: 2


  },

  pistas: {
    flex: 2,
    alignSelf: 'flex-start',
    marginLeft: 50
  },

  questionAttachment: {
    resizeMode:'contain',
  	width: 300,
  	height: 200
  },

  questionTitle: {
	 fontSize: 25,
   color: '#9121C1',
   fontWeight: 'bold'

  },
  questionContent: {
	 fontSize: 20,
   textAlign: 'center'
  },

  textInput: {
    backgroundColor: 'white',
    fontSize: 25,
    borderWidth: 1,
    borderColor: '#9121C1'

  },

  tipsTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left'

  },

  scoreText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  app:{
    flex:1,
    alignItems: 'center',
    justifyContent:'space-around',
  }
});