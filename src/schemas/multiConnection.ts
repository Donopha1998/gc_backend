const mongoose = require('mongoose');
var user = require("mongeese").create();

const options = {
    useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
    /* other options */
}

class connectDB {
    constructor() {

    }
    createConnection = function (url:any) {
        user.connect(url, options)
    }
    getUserDBConnection = function () {
        return user
    }
}

export const dbConnect = new connectDB();