const records = require('./records').records

const getRecord = recordNo => {
  if (recordNo > records.length) throw new Error('Wrong recordNo')
  return {
    context_uri: records[recordNo],
    offset: {
      position: 0
    }
  }
}

module.exports = {
  getRecord
}
