/**
 * Created by kieronqtran on 7/28/17.
 */
import {APP_ID, PAGE_ID, API_VERSION} from '../config/config';

// eslint-disable-next-line new-cap
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', {
        appId: APP_ID,
        pageId: PAGE_ID,
        fbVersion: API_VERSION,
    });
});

module.exports = router;
