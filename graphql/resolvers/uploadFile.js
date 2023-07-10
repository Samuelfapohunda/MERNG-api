const { AuthenticationError, GraphQLUpload } = require("apollo-server");
const path = require('path')
const fs = require('fs')

const Post = require("../../models/Post");
const checkAuth = require("../../utils/check-auth");

module.exports = {
  FileUpload: GraphQLUpload,
Query: {
  hello: () => 'Hello World'
},
  Mutation: {
   uploadFile: async (parent, {file}) => {
  const {createReadStream, filename, mimetype, encoding} = await file

  const stream = createReadStream()
  const pathName =path.join(__dirname, `/public/images/${filename}`)
  await stream.pipe(fs.createWriteStream(pathName))
 
  return {
    url:`http://localhost:5000/images/${filename}`,
  }
    }
   }
  }