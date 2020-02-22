/* eslint-disable no-console */
const express = require('express');
const expressGraphQl = require('express-graphql');

const schema = require('./schema');

const app = express();

app.use('/graphql', expressGraphQl({
  schema,
  graphiql: true,
}));

const port = 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
