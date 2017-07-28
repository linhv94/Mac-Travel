/**
 * Created by kieronqtran on 7/28/17.
 */
import {Router} from 'express';
import {VALIDATION_TOKEN, environments} from '../config/config';
import {messageHandler} from '../chatbot';

// eslint-disable-next-line new-cap
const router = Router();

router.use(function(req, res, next) {
    if (req.method === 'POST' && !environments.production) {
        console.log(`Message Sent: ${JSON.stringify(req.body, null, 4)}`);
    }
    next();
});

router
    .route('/')
    .get(function(req, res) {
        if (req.query['hub.mode'] === 'subscribe' &&
            req.query['hub.verify_token'] === VALIDATION_TOKEN) {
            console.log('Validating webhook');
            res.status(200).send(req.query['hub.challenge']);
        } else {
            console.error('Failed validation. ' +
                'Make sure the validation tokens match.');
            res.sendStatus(403);
        }
    })
    .post(function(req, res) {
        const data = req.body;
        // Make sure this is a page subscription
        if (data.object === 'page') {
            messageHandler(data);

            // Assume all went well.
            //
            // You must send back a 200, within 20 seconds,
            // to let us know you've successfully received the callback.
            // Otherwise, the request will time out.
            res.sendStatus(200);
        }
    });

module.exports = router;
