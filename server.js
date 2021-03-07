const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// const exphbs = require('express-handlebars');

// app.engine('.hbs', exphbs({ extname: '.hbs' }));
// app.set('view engine', '.hbs');
// app.use(express.static('./views/'));

app.get('/', (req, res) => {
res.send('Hello World!')
});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
});