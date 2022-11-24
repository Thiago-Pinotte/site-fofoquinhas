
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDgZIj4oXwWEXZSq85DDQ2Os3eK156DEwQ",
  authDomain: "kwitter-cf876.firebaseapp.com",
  databaseURL: "https://kwitter-cf876-default-rtdb.firebaseio.com",
  projectId: "kwitter-cf876",
  storageBucket: "kwitter-cf876.appspot.com",
  messagingSenderId: "308514280473",
  appId: "1:308514280473:web:be607845f21dfc92da8688"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    //purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
