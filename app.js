import bodyParser from 'body-parser';
import express from 'express';
import exphbs from 'express-handlebars';
import morgan from 'morgan';
import {verifyRequestSignature} from './helpers/verify-request-signature';
import {SERVER_PORT} from './config/config';
import logger from './helpers/logger';
import router from './controller';

const app = express();

app.engine('hbs', exphbs());
app.set('view engine', 'hbs');
app.use(morgan('combined', {stream: logger.stream}));
app.use(express.static('public'));
app.use(bodyParser.json({verify: verifyRequestSignature}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(router);

// Start server
// Webhooks must be available via SSL with a certificate signed by a valid
// certificate authority.
app.listen(SERVER_PORT, function() {
    console.log(`Node app is running on port ${SERVER_PORT}`);
});
