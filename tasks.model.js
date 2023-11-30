const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const statuses ={
    PENDING: 'PENDING',
    INPROGRESS: 'IN PROGRESS',
    COMPLETED: 'COMPLETED',
}

const tasksSchema = newSchema ({
        title: String,
        description: String,
        status: statuses,
        datestart: Date,
        dateend: Date,
        user: String,
        createdAt: Date,
        modifiedAt: Date,
        deletedAt: null,
});

module.exports = mongoose.model ("Tasks", tasksSchema, statuses );