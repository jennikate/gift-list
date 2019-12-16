// const port = 8000
const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gift-list'
// const dbURIPrefix = 'mongodb://localhost/'
// const dbName = 'gift-list'
// const dbURI = dbURIPrefix + dbName
const secret = 'whatever'
const APIKey = ''

module.exports = {
  port,
  dbURI,
  secret,
  APIKey
}