const db = require('mongoose');
const PointSchema = require('./utils/PointSchema.js');
const DevSchema = new db.Schema({
    name: String,
    github_username: String,
    biografia: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = db.model('Dev', DevSchema);