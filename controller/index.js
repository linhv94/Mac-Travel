/**
 * Created by kieronqtran on 7/28/17.
 */
import {Router} from 'express';

// eslint-disable-next-line new-cap
const router = Router();

router.use('/authorize', require('./authorize'));
router.use('/webhook', require('./webhook'));
router.use('/', require('./home'));

export default router;
