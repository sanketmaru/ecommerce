module.exports = {
	"port" : 9000,
	mongo: {
    uri: 'mongodb://127.0.0.1:27017/ecommerce',
    options: {
      db: {
        safe: true
      }
    }
  }
};
