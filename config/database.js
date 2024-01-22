const mongoose = require('mongoose');

module.exports = {
  connect: function() {
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    // shortcut to mongoose.connection object
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`));
  }
};
