const accessInput = document.getElementById("access");
const downloadWindows = document.getElementById("download-windows");
const downloadMac = document.getElementById("download-mac");
const denied = document.getElementById("denied");
let accessValue = accessInput.value;
let hasAccess;
denied.style.visibility = "hidden";
downloadWindows.style.visibility = "hidden";
downloadMac.style.visibility = "hidden";

function initialLoad() {
    hasAccess = false;
    denied.style.visibility = "hidden";
    downloadWindows.style.visibility = "hidden";
    downloadMac.style.visibility = "hidden";
}

function writeAccessKey () {
    accessValue = accessInput.value;
}

function submitAccessKey() {
    if (accessValue === alphaAcessKey) {
        console.log("Access Granted!");
        hasAccess = true;
        downloadWindows.style.visibility = "visible";
        downloadMac.style.visibility = "visible";
        denied.style.visibility = "hidden";
    }
    else {
        denied.style.visibility = "visible";
        downloadWindows.style.visibility = "hidden";
        downloadMac.style.visibility = "hidden";
    }
}

