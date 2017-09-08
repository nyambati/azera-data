# azera-data
This is the data generator for Azera App

## Data Model
This app users 3 nodes
  - Users
  - Reciepts
  - Categories

## Users Model
This model has the following attributes
  - users
    - uid
    - emailAddress
    - displayName
    - timestamps

## Category Model
This model has the following attributes
  - category
    - name
    - timestamps

## Reciepts Model
This model has the following attributes
  - reciepts
    - imageUrl
    - category
    - user_id
    - tags
    - status
    - timestamps

## Running the script;
To use this script, modify config.js file with the correct firebaseConfig credentials, and the number of users or reciepts you need. Once this is done, run
```bash
$ node index.js
```
This script will create the three nodes and dummy database, You can a
