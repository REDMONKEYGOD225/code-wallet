const { contextBridge } = require('electron');
const mysql = require('mysql');

// Configurer la connexion à la base de données MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'zAH:WR{JR=NY%233z9-)*Xf2x3Lgz3?8fnb6!3ev7_z9D/Z6k@',
  database: 'code-wallet'
});

db.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

contextBridge.exposeInMainWorld('wallet', {
  getFragments: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT title FROM fragments', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
});