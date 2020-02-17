

  module.exports = function(app,connection){
    app.get('/movies', function (req, res) {  
     
        connection.query('SELECT * from MOVIES', function (error, results, fields) {
            if (error) throw error;
            res.send(results);
            // console.log('The solution is: ', results);
          });

      });
      app.get('/series', function (req, res) {  
     
        connection.query('SELECT * from SERIES', function (error, results, fields) {
            if (error) throw error;
            res.send(results);
            // console.log('The solution is: ', results);
          });

      });
      app.get('/details', function (req, res) {  
        var id = req.query.id;
        connection.query('SELECT * from MOVIES where id = '+ id, function (error, results, fields) {
            if (error) throw error;
            res.send(results);
            // console.log('The solution is: ', results);
          });

      });
      app.get('/sdetails', function (req, res) {  
        var id = req.query.id;
        connection.query('SELECT * from SERIES where id = '+ id, function (error, results, fields) {
            if (error) throw error;
            res.send(results);
            // console.log('The solution is: ', results);
          });

      });
      
  }