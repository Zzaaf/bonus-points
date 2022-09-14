const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

const PORT = process.env.PORT ?? 4000;

app.get('/data', async(req, res) => {
  const response = await fetch('https://script.google.com/a/macros/elbrusboot.camp/s/AKfycbwgEiBpNOXviQ2H5K2cV0Ah1j2ZU98k9lbzDByZrWbsH1QiqvylIeo5k7KS871JXSaq/exec')
  const data = await response.text(); //response.json по идее, когда подписаться получится и ответ прийдет норм
  res.json({ data: data });
})

app.listen(PORT, () => {
  console.log(`Bonus server has been started on port: ${PORT}`);
})
