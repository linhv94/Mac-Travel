# Mac-Travel
RMIT Vietnam Building IT System 2017b

This project is cloned from [Messenger Platform Sample](https://github.com/fbsamples/messenger-platform-samples)

## Setup

Install node.js version 6.11.0 and git version 2.13.2

Open your folder that you wish to store the project in your computer.Then, open your git bash terminal or command line if you are using Window, or terminal if you'are using OSX or Linux. Clone the project to your local computer and install the server dependences.

```
git clone https://github.com/kieronqtran/Mac-Travel.git
cd Mac-Travel
npm install
```
Install [localtunnel](https://github.com/localtunnel/localtunnel) 
```
npm install -g localtunnel
```

## Run

You can start server with `npm start` in the terminal or command line. The default port is 5000.
Open browser and enter url [http://localhost:5000](http://localhost:5000). If you see a big title with content 'RMIT BITS 2017b MacTravel Messenger Demo', it means the server is working.

### Run localtunnel
Open another terminal or command line and run below command:
```
lt --port 5000 --subdomain "rmitbits2017bmactravel"
```
and see the result is `your url is: https://rmitbits2017bmactravel.localtunnel.me`. If there is nothing or recieve `tunnel server offline: getaddrinfo ENOTFOUND localtunnel.me localtunnel.me:80, retry 1s`, it means that someone have taken the url (if there is title 'RMIT BITS 2017b MacTravel Messenger Demo' when accessing the url [https://rmitbits2017bmactravel.localtunnel.me](https://rmitbits2017bmactravel.localtunnel.me) through browser) or you have network problems.

Open browser and enter url [https://rmitbits2017bmactravel.localtunnel.me](https://rmitbits2017bmactravel.localtunnel.me) if there is the same page when you are accessing [http://localhost:5000](http://localhost:5000)

### Chatting with the bot
Everything is already config in Facebook Developer Page. If there are problems, please contact to [this guy (Quang)](https://github.com/kieronqtran). Using your facebook account to chat with MacTravel account. It supposes to be return the exact content if you send messages different than the following keywords or phrase (it has to be exact):
 - image
 - gif
 - audio
 - video
 - file
 - button
 - generic
 - receipt
 - quick reply
 - read receipt
 - typing on
 - typing off
 - account linking
 - You're an awesome chatbot.
 - Are you a human or a robot?

These keywords or phrases show some feature of chatbot can do.

NOTED: Not every keywords and phrase above works sometime due to some weird bugs. However, if the chatbot answers the same content as your, it means the server is working. Still WIP (Work in process) in fixing bugs.