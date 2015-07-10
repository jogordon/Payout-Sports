var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
  name: String,
  position: String,
  team: String,
  ftsyPts: {type: Number, default: 0},
  passYds: {type: Number, default: 0},
  rushYds: {type: Number, default: 0},
  recvYds: {type: Number, default: 0},
  passTds: {type: Number, default: 0},
  rushTds: {type: Number, default: 0},
  recvTds: {type: Number, default: 0},
  ints:    {type: Number, default: 0},
  fumbles: {type: Number, default: 0},
  sacks:   {type: Number, default: 0},
  safties: {type: Number, default: 0},
  rtrnTDs: {type: Number, default: 0},
  fieldGl: [Number]
});

mongoose.model('Player', PlayerSchema);