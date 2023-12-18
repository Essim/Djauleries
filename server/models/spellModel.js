const mongoose = require('mongoose')
const schema = mongoose.Schema

const spellModel = new schema({
  id: { type: String },
  classId: { type: String },
  altSpellId: { type: String },
  name: { type: String },
  description: { type: String },
  spellIcon:  { type: String },
  apCost: { type: Number },
  cooldown: { type: Number },
  minRange: { type: Number },
  maxRange: { type: Number },
  numPerTurn: { type: Number },
  numPerTurnPerPlayer: { type: Number },
  lineOfSight: { type: Boolean },
  modifiableRange: { type: Boolean },
  areaIcon: { type: String },
  launchDirection: { type: String },
  baseCrit: { type: Number },
})

module.exports = mongoose.model('spell', spellModel)
