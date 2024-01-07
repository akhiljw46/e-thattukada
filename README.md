# e-Thattukada

A food order app. Choose dishes from the broad menu and order instantly.

Created using React JS

Hosted on : https://ethattukada.netlify.app

## How to run

### Step 1

Create a `.env` file in the project folder with the following variable :

`REACT_APP_DATABASE_URL` : Enter the [firebase realtime database](https://firebase.google.com/docs/database) URL.

Where, the database has data in following format:

```
"meals":{
    "ITEM_ID": {
            "description": "ITEM_DESCRIPTION",
            "image": "ITEM_IMAGE_URL",
            "name": "ITEM_NAME",
            "price": "ITEM_PRICE"
        },
}

```

### Step 2

Run the following commands:

```
npm install
npm start
```

Enjoy!!
