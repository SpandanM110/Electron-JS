const { app, BrowserWindow, ipcMain, Notification } = require("electron");


let list = document.getElementById("list");
let newTask = document.getElementById("newTask");

document.getElementById("addTask").addEventListener('click', () => {
    list.insertAdjacentHTML('beforeend', `<li class="list-group-item">${newTask.value}</li>`);
    ipcRenderer.invoke('show-notification', newTask.value);
    newTask.value = '';
});

ipcMain.handle('show-notification', (event, ...args) => {
    const notification = {
        title: 'New Task',
        body: `Added: ${args[0]}`
    }

    new Notification(notification).show()
});
