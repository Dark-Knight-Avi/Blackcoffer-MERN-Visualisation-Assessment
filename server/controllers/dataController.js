const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'jsondata.json');

exports.getData = (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server Error');
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      res.status(200).json(jsonData);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });
};
