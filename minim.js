import { GraphQLError, parse } from 'graphql';

const query = `
  query {
    user(id: "1") {
      id
      name
    }
  }
`;

try {
  // Parse the query string into an AST
  const ast = parse(query);
  console.log('Parsed AST:', ast);
} catch (error) {
  // If there's an error parsing the query, create a GraphQLError instance
  const gqlError = new GraphQLError('Failed to parse query', { originalError: error });
  console.error(gqlError);
}
