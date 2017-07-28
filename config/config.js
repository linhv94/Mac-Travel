/**
 * Created by kieronqtran on 7/27/17.
 */
/*
 * Be sure to setup your config values before running this code. You can
 * set them using environment variables or modifying the config file in /config.
 *
 */
require('dotenv').config(); // Loading config from .env file

export const APP_ID = process.env.MESSENGER_APP_ID;

// App Secret can be retrieved from the App Dashboard
export const APP_SECRET = process.env.MESSENGER_APP_SECRET;

export const API_VERSION = process.env.FACEBOOK_API_VERSION || 'v2.9';

// Arbitrary value used to validate a webhook
export const VALIDATION_TOKEN = process.env.MESSENGER_VALIDATION_TOKEN;

export const PAGE_ID = process.env.FACEBOOK_PAGE_ID;

// Generate a page access token for your page from the App Dashboard
export const PAGE_ACCESS_TOKEN = process.env.MESSENGER_PAGE_ACCESS_TOKEN;

export const SERVER_PORT = process.env.PORT || 5000;
// URL where the app is running (include protocol). Used to point to scripts and
// assets located at this address.
export const SERVER_URL = process.env.SERVER_URL;

export const environments = {
    production: process.env.NODE_ENV === 'production',
};

if (!(APP_SECRET && VALIDATION_TOKEN && PAGE_ACCESS_TOKEN && SERVER_URL)) {
    console.error('Missing config values');
    process.exit(1);
}
