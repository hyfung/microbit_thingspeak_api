# microbit_thingspeak_api

This is a sample server deployed locally to use Node.js to catch responses uploaded from Micro:Bit via Thingspeak 8266 Library

# Requirement
* Node.js installed

# Usage

##### Installing dependencies
```bash
npm install
```

##### Starting the server
```bash
npm run dev # With hot reload

npm run start # Without hot reload
```

##### Hitting the API server

By default it listens at port 5000

```
http://${SERVER_IP}:5000/api/v1/thingspeak/
```
