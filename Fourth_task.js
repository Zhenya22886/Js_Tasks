const fs = require('fs');
const readline = require('readline');


const inputFile = 'monsters.txt'; 
const outputFile = 'filtered_monsters.txt'; 


function processFile(inputFile, outputFile) {
  const readStream = fs.createReadStream(inputFile, { encoding: 'utf-8' });
  const writeStream = fs.createWriteStream(outputFile, { encoding: 'utf-8' });

  const rl = readline.createInterface({ input: readStream });

  rl.on('line', (line) => {
    if (line.length > 5) {
      writeStream.write(line + '\n');
    }
  });

  rl.on('close', () => {
    console.log(`Обробка завершена. Результати записані у файл: ${outputFile}`);
    writeStream.end();
  });

  rl.on('error', (error) => {
    console.error('Сталася помилка під час обробки:', error.message);
  });
}

processFile(inputFile, outputFile);
