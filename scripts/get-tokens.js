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

      console.log('Saved tokens/ns-tokens.js')
    });
  })
  .catch(err => {
    console.log(err)
  });