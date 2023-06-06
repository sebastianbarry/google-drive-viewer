import utils from './utils.js'
 
let CLIENT_ID = "890478643384-32qojcj7o7hvlliaqgbfkri3bkgs4vto.apps.googleusercontent.com"
let REDIRECT_URI = "http://127.0.0.1:5500/profile.html"
let SCOPES = 'https://www.googleapis.com/auth/drive'
 
let button = document.getElementById('button')
 
button.addEventListener('click',signIn)
 
function signIn() {
 
  utils.signIn(CLIENT_ID,REDIRECT_URI,SCOPES)
 
}