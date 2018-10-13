const {app, BrowserWindow} = require('electron')
const { ipcMain } = require('electron')

const electron = require('electron')
const dialog = electron.dialog

const path = require('path')
const fp = path.resolve('ewApp/wUI/index.html')

const { Ver, MBake } =  require('../lib/Base.js')


let renWindow
function createWindow () {
   renWindow = new BrowserWindow({width: 800, height: 600})
   renWindow.setMenu(null)
   renWindow.setTitle('On hi')

   renWindow.loadFile(fp)

   renWindow.webContents.openDevTools()
   renWindow.on('closed', function () {
      renWindow = null
   })
}
app.on('ready', createWindow)
app.on('activate', function () {
   // On OS X it's common to re-create a window in the app when the
   // dock icon is clicked and there are no other windows open.
   if (renWindow === null) {
      createWindow()
   }
})

app.on('window-all-closed', function () {
   // On OS X it is common for applications and their menu bar
   // to stay active until the user quits explicitly with Cmd + Q
   //if (process.platform !== 'darwin') {
      app.quit()
   //}
})


// IPC
ipcMain.on('broMsgS', (event, arg) => {
   console.log(arg) // prints "ping"
   event.returnValue = 'SS'
})
ipcMain.on('broMsgA', (event, arg) => {
   console.log(arg) // prints "ping"
   event.sender.send('mainMsg1', 'AA')
})
ipcMain.on('FOLDER', (event, arg) => {
   console.log(arg) // prints "ping"
})



console.log(new Ver().ver())


exports.selectDirectory = function () {
  dialog.showOpenDialog(renWindow, {properties:['openDirectory']}, function(dn){
   console.log(dn[0])
  })

}