var firebaseConfig = {
    apiKey: "AIzaSyDh4rBCJuOqqMLermsOvJ982pqbeohri-Y",
    authDomain: "letschat-adf0b.firebaseapp.com",
    databaseURL: "https://letschat-adf0b-default-rtdb.firebaseio.com",
    projectId: "letschat-adf0b",
    storageBucket: "letschat-adf0b.appspot.com",
    messagingSenderId: "533687760016",
    appId: "1:533687760016:web:ebd4fe27cfc6b6d4331415"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
  function addRoom()
  {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="letschat_page.html";
  }
  function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("Room Names : "+Room_names);
        row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
        //End code
  });});}
  getData();
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="letschat_page.js";
  }
  function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }