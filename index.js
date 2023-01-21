const express = require('express');
const app = express();
const router = express.Router();
app.use(router);
app.set('view engine', 'ejs');

app.use('/', function (request, response) {
    response.render('index')
})

router.get('/lava_verify=KP9DQwAat8XBfMiUm6GST2k0joNlgeHrc7xYRzIv3Wp1Cu4n', function (request, response) {
    response.render('main.ejs')
})

app.listen('https://smmquoto-production.up.railway.app', () => {
    console.log('Server started on port 3000');
});

