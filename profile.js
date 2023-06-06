import utils from "./utils.js";

let params = utils.getParamsFromURL(location.href);
let ACCESS_TOKEN = "";
let redirect_url = "http://127.0.0.1:5500/index.html";
let button = document.getElementById("logout");
let fileImage = document.getElementById("files");

console.log(params);

utils.saveOAuth2Info(params, "profile.html", "info");

let info = JSON.parse(localStorage.getItem("info"));
ACCESS_TOKEN = info.access_token;

form.onsubmit = uploadFile;

function uploadFile(e) {
  e.preventDefault();
  console.log(files.files[0])

  var metadata = {
    name: Date.now() + files.files[0].name, // Filename at Google Drive
    mimeType:files.files[0].type, // mimeType at Google Drive
    //parents: ["##googldrivefolderid##"], // Folder ID at Google Drive
  };

  var form = new FormData();
  form.append(
    "metadata",
    new Blob([JSON.stringify(metadata)], { type: "application/json" })
  );
  form.append("userpic", files.files[0]);

  fetch(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id",
    {
      method: "POST",
      headers: new Headers({ Authorization: "Bearer " + ACCESS_TOKEN }),
      body: form,
    }
  )
    .then((res) => {
      return res.json();
    })
    .then(function (val) {
      console.log(val);
      files.value = "";
      alert("file Uploaded")
    });
}

button.onclick = logout;
 
function logout() {
  utils.logout(ACCESS_TOKEN, redirect_url);
}