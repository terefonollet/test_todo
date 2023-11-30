const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema ({
        name: String ,
        surname: String,
        email: email,
        password: Number,
        cratedAt: Date,
        modifiedAt: Date,
        deletedAt: null,
    });

module.exports = mongoose.model("Users", usersSchema);