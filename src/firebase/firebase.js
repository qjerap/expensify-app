import * as firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDjbQNL91lHMSudcS0fpgPAoWCJY5LAyaw",
    authDomain: "react-blog-5c3d8.firebaseapp.com",
    databaseURL: "https://react-blog-5c3d8.firebaseio.com",
    projectId: "react-blog-5c3d8",
    storageBucket: "react-blog-5c3d8.appspot.com",
    messagingSenderId: "500521749082"
  };
  firebase.initializeApp(config);


  const db = firebase.database();

  

  export { firebase, googleAuthProvider, db as default };

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

































// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
//   });


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     })    

//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Gas',
//     note: '',
//     amount: 109500,
//     createdAt: 11654
// });


// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native'
// });





// database.ref('notes/-LS5TisObsToFld59ydg').remove();



// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const key = snapshot.val();
//     console.log(`${key.name} is a ${key.job.title} at ${key.job.company}.`);
// });

// setTimeout(() => {
//    database.ref('job').update({
//         title: 'Tech'
// })}, 3000);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {
//         console.log('Error fetching data', error);
//     })

// database.ref().set({
//     name: 'Ajerap',
//     age: 31,
//     stressLevel: 6,
//     job: {
//         title: 'barista',
//         company: 'JLB'
//     },
//     location: {
//         city: 'Montreal',
//         country: 'Canada'
//     },
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => { 
//     console.log('This failed.', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'amazon',
//     'location/city': 'Vancouver'
// });

// database.ref()
//         .remove()
//         .then(() => { console.log('Data removed!') })
//         .catch((error) => {
//             console.log('Something went wrong! Error: ', error)
//         });


