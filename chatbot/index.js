/**
 * Created by kieronqtran on 7/28/17.
 */
import {
    receivedAuthentication,
    receivedMessage,
    receivedDeliveryConfirmation,
    receivedPostback,
    receivedMessageRead,
    receivedAccountLink,
} from './example-received';

export function messageHandler(data) {
    // Iterate over each entry
    // There may be multiple if batched
    data.entry.forEach(function(pageEntry) {
        // eslint-disable-next-line no-unused-vars
        const pageID = pageEntry.id;
        // eslint-disable-next-line no-unused-vars
        const timeOfEvent = pageEntry.time;

        // Iterate over each messaging event
        pageEntry.messaging.forEach(function(messagingEvent) {
            if (messagingEvent.optin) {
                receivedAuthentication(messagingEvent);
            } else if (messagingEvent.message) {
                receivedMessage(messagingEvent);
            } else if (messagingEvent.delivery) {
                receivedDeliveryConfirmation(messagingEvent);
            } else if (messagingEvent.postback) {
                receivedPostback(messagingEvent);
            } else if (messagingEvent.read) {
                receivedMessageRead(messagingEvent);
            } else if (messagingEvent.account_linking) {
                receivedAccountLink(messagingEvent);
            } else {
                console.log('Webhook received unknown messagingEvent: '
                    , messagingEvent);
            }
        });
    });
}
