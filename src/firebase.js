import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCQIyzY4VlKSYJugd0S1AngPpXLUrUNRq4',
	authDomain: 'react-chat-app-b7ce0.firebaseapp.com',
	projectId: 'react-chat-app-b7ce0',
	storageBucket: 'react-chat-app-b7ce0.appspot.com',
	messagingSenderId: '555409339651',
	appId: '1:555409339651:web:f58061c8d9560ec4692536',
};

export const auth = firebase.initializeApp(firebaseConfig).auth();
