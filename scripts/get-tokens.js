const fs = require('fs');
const axios = require('axios');

console.log('Fetching tokens')

if (!fs.existsSync('tokens')){
  fs.mkdirSync('tokens');
}

axios.get('https://www.britishgas.co.uk/nucleus/tokens/js/ns-tokens.js')
  .then(response => {
    fs.writeFile('tokens/ns-tokens.js', response.data, function (err) {
      if (err) throw err;

      console.log('> Saved tokens/ns-tokens.js')
    });
  })
  .catch(err => {
    console.log(err)
  });

axios.get('https://www.britishgas.co.uk/nucleus/tokens/json/ns-tokens.json')
  .then(response => {
    fs.writeFile('tokens/ns-tokens.json', JSON.stringify(response.data), function (err) {
      if (err) throw err;

      console.log('> Saved tokens/ns-tokens.json')
    });
  })
  .catch(err => {
    console.log(err)
  });