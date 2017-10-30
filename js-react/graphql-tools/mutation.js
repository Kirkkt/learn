import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';
import { find, filter } from 'lodash';

// This example demonstrates a simple server with some
// relational data: Posts and Authors. You can get the
// posts for a particular author, and vice-versa

// Read the complete docs for graphql-tools here:
// http://dev.apollodata.com/tools/graphql-tools/generate-schema.html

const typeDefs = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    posts: [Post] # the list of Posts by this author
  }

  type Post {
    id: Int!
    title: String
    author: Author
    votes: Int
  }

  # the schema allows the following query:
  type Query {
    posts: [Post]
    author(id: Int!): Author
  }

  # this schema allows the following mutation:
  type Mutation {
    upvotePost (
      postId: Int!
    ): Post
  }
`;

const resolvers = (() => {
  const authors = [
    { id: 1, firstName: 'Tom', lastName: 'Coleman' },
    { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
    { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
  ];

  const posts = [
    { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
    { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
    { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
    { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
  ];

  return {
    Query: {
      posts: () => posts,
      author: (_, { id }) => find(authors, { id: id }),
    },
    Mutation: {
      upvotePost: (_, { postId }) => {
        const post = find(posts, { id: postId });
        if (!post) {
          throw new Error(`Could not find post with id ${postId}`);
        }
        post.votes += 1;
        return post;
      },
    },
    Author: {
      posts: (author) => filter(posts, { authorId: author.id }),
    },
    Post: {
      author: (post) => find(authors, { id: post.authorId }),
    },
  }
})()

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const query = id => `
query PostsForAuthor {
  author(id: ${id}) {
    firstName
    posts {
      title
      votes
    }
  }
}
`

const mutation = id => `
mutation UpVote {
  upvotePost(postId: ${id}) {
    id
  }
}
`

const showPostsForAuthor = id => graphql(schema, query(id)).then((result) => console.log('Show post: ', JSON.stringify(result, null, 2)) || Promise.resolve(result))

const upvotePost = id => graphql(schema, mutation(id)).then((result) => console.log('Upvote post: ', JSON.stringify(result, null, 2)) || Promise.resolve(result))

showPostsForAuthor(2)
  .then(() => upvotePost(3))
  .then(() => showPostsForAuthor(2))
