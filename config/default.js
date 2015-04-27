module.exports = {
	"port" : 9000,
	mongo: {
    uri: 'mongodb://localhost/ecommerce',
    options: {
      db: {
        safe: true
      }
    }
  }
}
