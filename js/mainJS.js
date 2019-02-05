firebase.auth().onAuthStateChanged(function(user){
  if(user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";


    var user = firebase.auth().currentUser;

    if(user != null){
      var email_id = user.email;
      var email_verified = user.emailVerified;

      if (email_verified) {
        document.getElementById("verify_btn").style.display = "none";
      } else {
        document.getElementById("verify_btn").style.display = "block";
      }

      document.getElementById("user_para").innerHTML = "Welcome : " + email_id + "<br/> Verified : " + email_verified;
    }

  } else {
    // No user is signed in.
    
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});

function login() {
  var userEmail = document.getElementById('email_field').value;
  var userPassword = document.getElementById('password_field').value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    window.alert("Error : " + errorMessage);

    // ...
  });

}

function create_account(){
  var userEmail = document.getElementById('email_field').value;
  var userPassword = document.getElementById('password_field').value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout() {
  firebase.auth().signOut();
}

function send_verification() {

  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    // Email sent.
    window.alert("Verification Send");
  }).catch(function(error) {
    // An error happened.
    window.alert("Error : " + error.message);
  });

}

