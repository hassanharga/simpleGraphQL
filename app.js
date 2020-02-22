/* eslint-disable no-console */
const express = require('express');
const expressGraphQl = require('express-graphql');

const schema = require('./schema');

const app = express();

app.use('/graphql', expressGraphQl({
  schema,
  graphiql: true,
}));

app.listen(3001, () => {
  console.log('listening on port 3000');
});
