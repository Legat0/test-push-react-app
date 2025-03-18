// Import the Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js');

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAp2PhvwRe8g9zszT2VIJYsHCD5hTDu83s",
    authDomain: "dev-meteor-ru.firebaseapp.com",
    projectId: "dev-meteor-ru",
    storageBucket: "dev-meteor-ru.firebasestorage.app",
    messagingSenderId: "729506396553",
    appId: "1:729506396553:web:959635897048397e15c958"
  };
  
  
  firebase.initializeApp(firebaseConfig);

  // Retrieve an instance of Firebase Messaging
  const messaging = firebase.messaging();
  
  // Handle background messages
  messaging.onBackgroundMessage((payload) => {
    console.log('Received background message: ', payload);
  
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/path/to/icon.png', // Add your icon path here
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });