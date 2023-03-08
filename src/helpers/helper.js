const connection = require('../configs/db');
module.exports = {
  // Error Handling
  response: (res, result, status, err) => {
    const results = {};
    if (status == 200 ) results.status = 'success';
    else results.status = 'error';
    results.statusCode = status;
    results.result = result;
    results.err = err || null;
    res.status(status);
    res.json(results);
  },
  actionQuery:(...arg) =>{
    return new Promise((resolve, reject) => {
      connection.query(...arg, (error, results) => {
        if (!error) {
          resolve(results);
        } else {
          reject(error);
        }
      });
    });
  }
}