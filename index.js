const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const express = require('express');
const mysql = require('mysql');

// Créer une application Express
const expressApp = express();

// Configurer la connexion à la base de données MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'code-wallet'
});

db.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

// Route pour récupérer les fragments depuis MySQL
expressApp.get('/fragments', (req, res) => {
  db.query('SELECT title, content FROM fragment', (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  });
});

// Démarrer le serveur Express
expressApp.listen(3000, () => {
  console.log('Serveur Express écoutant sur le port 3000');
});

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Gérer la requête pour récupérer les fragments depuis MySQL
ipcMain.handle('get-fragments', async (event) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT title FROM fragment', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.map(row => row.title));
      }
    });
  });
});