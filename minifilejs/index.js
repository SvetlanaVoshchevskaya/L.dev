const fs = require('fs');
const path = require('path');

const deleteComent = nameFile => {
  const pathFile = path.join(__dirname, './', 'src', nameFile + '.js');
  fs.readFile(pathFile, (error, data) => {
    if (error) throw error;
    const chekingJsFile = Buffer.from(data).toString();
    const pattern = /(?:(?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:(?<!\:|\\\|\')\/\/.*))/g;
    const newJsFile = chekingJsFile.replace(pattern, '');
    fs.writeFile(pathFile, newJsFile, error => {
      if (error) throw error;
    });
  });
};

deleteComent();
