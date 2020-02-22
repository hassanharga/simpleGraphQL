const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require('graphql');


// hardcoded data
// const customars = [
//   {
//     id: 1,
//     name: 'ali',
//     email: 'a@a.com',
//     age: 22,
//   },
//   {
//     id: 2,
//     name: 'ahmed',
//     email: 'ah@ah.com',
//     age: 11,
//   },
//   {
//     id: 3,
//     name: 'saad',
//     email: 'sa@sa.com',
//     age: 77,
//   },
//   {
//     id: 4,
//     name: 'mostafa',
//     email: 'mo@mo.com',
//     age: 66,
//   },
//   {
//     id: 5,
//     name: 'mohamed',
//     email: 'mo@mo.com',
//     age: 74,
//   },

// ];


// customar type
const customarType = new GraphQLObjectType({
  name: 'customar',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

// root query
const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customar: {
      type: customarType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parentValue, args) {
        // for hardcoded array
        // for (let x = 0; x < customars.length; x += 1) {
        //   if (customars[x].id === args.id) {
        //     return customars[x];
        //   }
        // }
        return axios.get(`http://localhost:3000/customars/${args.id}`)
          .then((res) => res.data);
      },
    },
    customars: {
      type: GraphQLList(customarType),
      resolve() {
        return axios.get('http://localhost:3000/customars/')
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: rootQuery,
});
