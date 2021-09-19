
const signUp = () => {

    const userName = document.getElementById("userName");
    const email = document.getElementById("userEmail");
    const password = document.getElementById("userPassword");

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
            var uid = user.uid;
            console.log(uid);

            const myUser = {
                userName: userName.value,
                email: email.value,
                password: password.value,
            };


            firestore
                .collection("users")
                .doc(user.uid)
                .set(myUser)
                .then(() => {
                    console.log("Data passed in Database");
                    location.href = "login.html";

                })
                .catch((error) => {
                    console.log("User not added");
                    console.log(error);
                });

            // firebase.database().ref(`users/${uid}`).set(myUser)
            //     .then(() => {
            //         location.href = "login.html";
            //     });

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode)
            alert(errorMessage)
            // ..
        });
}



//Login Account
function loginFunc() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            var uid = user.uid;
            console.log(uid);
            // alert("you are signed in")
            location.href = "game.html";
            // ...

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode)
            alert(errorMessage)
        });

}

const logout = ()=>{
    console.log("clicked")
    firebase.auth().signOut().then(()=> {
        console.log("logout hogaya");
        location.href = "login.html"
    }).catch(()=> {
        console.log("ponka")
    })
}


