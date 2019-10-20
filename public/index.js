const accessInput = document.getElementById("access");
const downloadButton = document.getElementById("download");
const denied = document.getElementById("denied");
let accessValue = accessInput.value;
let hasAccess;
denied.style.visibility = "hidden";
downloadButton.style.visibility = "hidden";

function initialLoad() {
    hasAccess = false;
    denied.style.visibility = "hidden";
    downloadButton.style.visibility = "hidden";
}

function writeAccessKey () {
    accessValue = accessInput.value;
}

function submitAccessKey() {
    console.log("submitted Access with: ", accessValue);
    if (accessValue === alphaAcessKey) {
        console.log("Access Granted!");
        hasAccess = true;
        downloadButton.style.visibility = "visible";
        denied.style.visibility = "hidden";
    }
    else {
        console.log("access denied!");
        denied.style.visibility = "visible";
        downloadButton.style.visibility = "hidden";
    }
}

