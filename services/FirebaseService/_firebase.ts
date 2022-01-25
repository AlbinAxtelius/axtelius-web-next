import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyAaEmcZfX374IfV7-FR4tvbV31DKHcXvck',
	authDomain: 'axtelius-web.firebaseapp.com',
	projectId: 'axtelius-web',
	storageBucket: 'axtelius-web.appspot.com',
	messagingSenderId: '640948589913',
	appId: '1:640948589913:web:a7afbb8c372ee68ca66848',
	measurementId: 'G-D1LRY7FQ73'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
