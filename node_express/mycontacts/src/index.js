const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hellow Word');
});

//subindo express em uma porta
app.listen(3000, () => console.log('🔥 Server starter at http://localhost:3000'));
