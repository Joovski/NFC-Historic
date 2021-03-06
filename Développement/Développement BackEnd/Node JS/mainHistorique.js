const {app} = require("electron");
const smartcard = require('smartcard'); // https://github.com/santigimeno/node-pcsclite

function createWindow(){
  mainWindow.loadFile("indexHistorique.html");
  mainWindow.setMenuBarVisibility(false);
  mainWindow.webContents.openDevTools();
}

// Gestion de la carte (https://github.com/PierreLAURENT94/MiniProj2 )
app.whenReady().then(createWindow);

  const Devices = smartcard.Devices;
  const devices = new Devices();
  devices.on("device-activated", DetectionCarte);


function DetectionCarte(event){
  const currentDevices = event.devices;
  var device = event.device;
  device.on("card-inserted", CarteConnecte);
}

// Récupération d'Identifiant
  const id = smartcard.id;
  const id = new id();
  devices.on("",RecuperationId)

function RecuperationId(event){
  
}