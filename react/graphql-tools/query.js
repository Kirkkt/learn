import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';

const typeDefs = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
  }

  # the schema allows the following query:
  type Query {
    author(id: Int!): Author
  }
`;

const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
];

const resolvers = {
  Query: {
    author: (_, { id }) => authors.filter(author => author.id === id)[0],
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const query = id => `
query QueryAuthor {
  author(id: ${id}) {
    firstName
    lastName
  }
}
`

const run = id => graphql(schema, query(id)).then((result) => console.log('Got result', JSON.stringify(result, null, 2)));

run(1) // Tom Coleman
run(2) // Sashko Stubailo
