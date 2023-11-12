# Chronic pain app ??

This is a solution for the [Junction 2023](https://www.junction2023.com/)
Tietoevry challenge
[#PainMgmt](https://www.junction2023.com/challenges-2023/tietoevry).

The app is publicly available at https://tuskaproject-b09f5.web.app

## Development

To start developing the app, make sure you have [Node](https://nodejs.org/en/)
installed.

Install dependencies:

```
npm i
```

Start the development environment

```
npm run dev
```

## Deployment

Deployment is done manually to [Firebase](https://firebase.google.com/).

To publish the app, you need to have the Firebase CLI tools installed

```
npm i -g firebase
```

And all dependencies installed

```
npm i
```

And valid credentials for a Google account which is hosting the app.

Then run the `publish` command (build the app, login to Firebase and deploy the
site)

```
npm run publish
```
