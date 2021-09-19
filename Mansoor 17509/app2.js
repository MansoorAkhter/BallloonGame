const userName = document.getElementById('userName');

const gameDashboard = () => {
  const userName = document.getElementById("userName");

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user.uid);
      console.log(user.email);
      firestore
        .collection("users")
        .doc(user.uid)
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.data();
          console.log(data);
          userName.innerText = data.userName;
        });
    } else {
      console.log("user is signed out");
    }
  });
};

//game

const level = 1;
let lifeCount = 3;

const round = document.getElementById("roundNumber");
const life = document.getElementById("life");
const pop = document.getElementById("pop");
const colorofGame = document.getElementById("colorofGame");

round.innerText = level;
life.innerText = lifeCount;

let popped = 0;

// if(popped < 5) {
//     colorofGame.innerText = "blue";
// }

document.addEventListener("mouseover", function (e) {
  if (popped < 5) {
    colorofGame.innerText = "blue";
    if (e.target.classList.contains("bluee")) {
      e.target.style.backgroundColor = "#ededed";
      e.target.textContent = "POP!";
      popped++;
      pop.innerText = popped;
      e.target.classList.remove("bluee");
      removeEvent(e);
      checkAllPopped();
    } else if (
      e.target.classList.contains("red") ||
      e.target.classList.contains("pink") ||
      e.target.classList.contains("green") ||
      e.target.classList.contains("yellow")
    ) {
      console.log("You missed");
      lifeCount--;
      life.innerText = lifeCount;
      if (lifeCount == 0) {
        alert("Game over");
      }
    }
  } else if (popped < 10) {
    colorofGame.innerText = "red";
    if (e.target.classList.contains("red")) {
      e.target.style.backgroundColor = "#ededed";
      e.target.textContent = "POP!";
      popped++;
      pop.innerText = popped;
      e.target.classList.remove("red");
      removeEvent(e);
      checkAllPopped();
    } else if (
      e.target.classList.contains("bluee") ||
      e.target.classList.contains("pink") ||
      e.target.classList.contains("green") ||
      e.target.classList.contains("yellow")
    ) {
      console.log("You missed");
      lifeCount--;
      life.innerText = lifeCount;
      if (lifeCount == 0) {
        alert("Game over");
      }
    }
  } else if (popped < 15) {
    colorofGame.innerText = "yellow";
    if (e.target.classList.contains("yellow")) {
      e.target.style.backgroundColor = "#ededed";
      e.target.textContent = "POP!";
      popped++;
      pop.innerText = popped;
      e.target.classList.remove("yellow");
      removeEvent(e);
      checkAllPopped();
    } else if (
      e.target.classList.contains("red") ||
      e.target.classList.contains("pink") ||
      e.target.classList.contains("green") ||
      e.target.classList.contains("bluee")
    ) {
      console.log("You missed");
      lifeCount--;
      life.innerText = lifeCount;
      if (lifeCount == 0) {
        alert("Game over");
      }
    }
  } else if (popped < 20) {
    colorofGame.innerText = "green";
    if (e.target.classList.contains("green")) {
      e.target.style.backgroundColor = "#ededed";
      e.target.textContent = "POP!";
      popped++;
      pop.innerText = popped;
      e.target.classList.remove("green");
      removeEvent(e);
      checkAllPopped();
    } else if (
      e.target.classList.contains("red") ||
      e.target.classList.contains("pink") ||
      e.target.classList.contains("bluee") ||
      e.target.classList.contains("yellow")
    ) {
      console.log("You missed");
      lifeCount--;
      life.innerText = lifeCount;
      if (lifeCount == 0) {
        alert("Game over");
      }
    }
  } else if (popped < 25) {
    colorofGame.innerText = "pink";
    if (e.target.classList.contains("pink")) {
      e.target.style.backgroundColor = "#ededed";
      e.target.textContent = "POP!";
      popped++;
      pop.innerText = popped;
      e.target.classList.remove("pink");
      removeEvent(e);
      checkAllPopped();
    } else if (
      e.target.classList.contains("red") ||
      e.target.classList.contains("bluee") ||
      e.target.classList.contains("green") ||
      e.target.classList.contains("yellow")
    ) {
      console.log("You missed");
      lifeCount--;
      life.innerText = lifeCount;
      if (lifeCount == 0) {
        alert("Game over");
      }
    }
  }
});

function removeEvent(e) {
  e.target.removeEventListener("mouseover", function () {});
}

function checkAllPopped() {
  if (popped === 24) {
    console.log("all popped!");
    let gallery = document.querySelector("#balloon-gallery");
    let message = document.querySelector("#yay-no-balloons");
    gallery.innerHTML = "";
    message.style.display = "block";
  }
}
