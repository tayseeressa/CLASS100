const firebaseConfig = {
    apiKey: "AIzaSyDLc1GmaeJLImPlADuGkJAebxbMU0oFy_Q",
    authDomain: "kwitter-f9746.firebaseapp.com",
    databaseURL: "https://kwitter-f9746-default-rtdb.firebaseio.com",
    projectId: "kwitter-f9746",
    storageBucket: "kwitter-f9746.appspot.com",
    messagingSenderId: "129082497355",
    appId: "1:129082497355:web:b121db2d34040c01d570ce",
    measurementId: "G-TKRY5TWHLW"
  };
//ADD YOUR FIREBASE LINKS
function addUser(){

    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){

    msg=document.getElementById("msg").value;

    firebase.database().ref(room_name).push({

    name:user_name,
    message:msg,
    like:0

    });
    document.getElementById("msg").value="";
}