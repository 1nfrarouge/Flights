const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create
};

async function index(req, res) {
  const flights = await Flight.find({});
  res.render('flights/index', { title: 'All Flights', flights });
}

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add Flight' });
}

async function create(req, res) {
  try {
    const flight = new Flight(req.body);
    await flight.save();
    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.error(err);
    res.render('flights/new', { title: 'Add Flight' });
  }
}
