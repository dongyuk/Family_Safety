const mongoose = require('mongoose');

// Define Schemes
const InfoSchema = new mongoose.Schema({
    seq: { type: Number, required: true, unique: true },
    user_id: { type: String, required: true },
    password: { type: String, required: true },
    latitude: { type: Number, required: true }, 
    longitude: { type: Number, required: true },  
    azimuth: { type: Number, required: true },
    timestamps: {type: Date, default: Date.now}
});

// Create Model & Export
module.exports = mongoose.model('Info', InfoSchema);