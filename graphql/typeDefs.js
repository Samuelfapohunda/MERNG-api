const {  gql } = require("apollo-server");


module.exports = gql`
scalar FileUpload

  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
    user: ID!
  }

type File {
  url: String!
}

  type Comment {
    id: ID!
    createdAt: String! 
    username: String!
    body: String! 
  }

  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }

  type User {
    id: ID!
    email: String!
    token: String!
    username: String! 
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Query {
    getPosts: [Post]
    getPost(postId: ID): Post
    getUserPost(userId: ID): User
    getUsers: [User] 
    # uploads: [File] 
    hello:  String!
    getUser(userId: ID):User
  }
 
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID): String!
    createComment(postId: ID!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    uploadFile(file: FileUpload!): File!
  }

  type Subscription {
    newPost: Post!
  }

`;
