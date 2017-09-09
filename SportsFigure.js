const mongoose = require('mongoose');

const SportsFiguresSchema = {
  name: String,
  pictureUrl: String,
  sport: String,
  achievements: [ String ]
}


    module.exports = function(db) {
      return db.model('SportsFigure', SportsFiguresSchema)
    };
