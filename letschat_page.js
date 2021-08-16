var firebaseConfig = {
    apiKey: "AIzaSyDyGkQtJptVmIiYcNMhx_a11SlfwvBIelE",
    authDomain: "class93-c66b2.firebaseapp.com",
    databaseURL: "https://class93-c66b2-default-rtdb.firebaseio.com",
    projectId: "class93-c66b2",
    storageBucket: "class93-c66b2.appspot.com",
    messagingSenderId: "17795224875",
    appId: "1:17795224875:web:820b187fdb20dc4435216e"
  };
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function back()
{
    window.location="letschat_room.html";
}