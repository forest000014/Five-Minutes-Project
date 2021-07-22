const express = require('express');
const mysql = require('mysql2'); // version
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.set('port', process.env.PORT || 3001);

// Express only serves static assets in production
console.log('NODE_ENV: ', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  // Return the main index.html, so react-router render the route in the client
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('client/build', 'index.html'));
  });
}

const host = 'localhost';
const user = 'root';
const pswd = 'sql2021!'; // 보안에 유의할 것!!
const dbname = 'habit';

// config db ====================================
const pool = mysql.createPool({
  host: host,
  user: user,
  password: pswd,
  port: '3306',
  database: dbname
});

const COLUMNS = ['user_id', 'habit_id', 'day', 'num']; //

app.get('/api/records', (req, res) => {
  const user_id = req.query.user_id;

  if (!user_id) {
    res.json({
      error: 'Missing required parameters'
    });
    return;
  }

  let queryString = ``;
  if (user_id == '*') {
    queryString = `SELECT * from records`;
  } else {
    queryString = `SELECT * from records WHERE user_id = '${user_id}'`;
  }

  pool.query(queryString, function(err, rows, fields) {
    if (err) {
      console.log(err);
      throw err;
    }

    if (rows.length > 0) {
      res.json(
        rows.map(entry => {
          const e = {};
          COLUMNS.forEach(c => {
            e[c] = entry[c];
          });
          //e[11] = 123; //
          return e;
        })
      );
    } else {
      res.json([]);
    }
  });
});

// post로 바꿔야 할 것 같다. 사용자가 임의로 url을 변경하여 데이터를 추가할 수 있으니. 서비스에서 제공하는 입력 폼을 통해서만 추가할 수 있게 하고 싶다.
app.get('/api/add_records', (req, res) => {
  const user_id = req.query.user_id;
  const habit_id = req.query.habit_id;
  const day = req.query.day;
  const num = req.query.num;

  if (!user_id || !habit_id || !day || !num) {
    res.json({
      error: 'Missing required parameters'
    });
    return;
  }

  let queryString = `insert into habit.records (user_id, habit_id, day, num) VALUES ('${user_id}', '${habit_id}', '${day}', ${num});`;

  pool.query(queryString, function(err, res) {
    if (err) throw err;
    res.json([]);
    console.log('insert succeeded.');
  });
});


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
