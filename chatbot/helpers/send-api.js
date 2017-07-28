import request from 'request';
import {PAGE_ACCESS_TOKEN, API_VERSION} from '../../config/config';

/*
 * Call the Send API. The message data goes in the body. If successful, we'll
 * get the message id in a response
 *
 */
export function callSendAPI(messageData, cb) {
    const callback = cb || responseHandler;
    request({
        uri: `https://graph.facebook.com/${API_VERSION}/me/messages`,
        qs: {access_token: PAGE_ACCESS_TOKEN},
        method: 'POST',
        json: messageData,

    }, callback);
}

function responseHandler(error, response, body) {
    if (!error && response.statusCode === 200) {
        const recipientId = body.recipient_id;
        const messageId = body.message_id;

        if (messageId) {
            console.log('Successfully sent message with id %s to recipient %s',
                messageId, recipientId);
        } else {
            console.log('Successfully called Send API for recipient %s',
                recipientId);
        }
    } else {
        console.error('Failed calling Send API',
            response.statusCode, response.statusMessage, body.error);
    }
}
