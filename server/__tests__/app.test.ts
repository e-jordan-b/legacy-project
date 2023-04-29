import supertest from 'supertest'
import { app, server } from '../index'
import mongoose from 'mongoose'
// import { connectDB, disconnectDB, mongod } from '../db'
import UserModel from '../models/user_model'
const request = supertest(app)

const url: any = process.env.MONGODB_URI

beforeEach(async () => {
  await mongoose.connect(url);
});

afterEach(async () => {
  await mongoose.connection.close();
  // server.close();
});

describe('API test', () => {

  describe("get /users", () => {

    describe("given the required information", () => {
      it('should return correct status', async () => {
        const response = await request.get('/users')
        expect(response.statusCode).toBe(201)
      }),
      it('should return json in the content type header', async () => {
        const response = await request.get('/users')
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
      })
      // test('should return list of all users in database', async () => {
      //   const { body } = await request.get('/users')
      //   console.log(body)
      //   expect(
    })
  })
})

// test("should respong with a 201 status code", async () => {
//   const response = await supertest(app).post("/user").send({
//       name: "John Smith",
//       username: "john_smith",
//       profilePicture: "https://example.com/profile.jpg",
//       phone: "+1 (555) 123-4567",
//       email: "john.smith@example.com",
//       age: 30,
//       friends: ["alice", "bob", "charlie"],
//       following: ["xyz", "abc"],
//       savedEvents: ["event1", "event2"],
//       joinedEvents: ["event1"]
//     })
//   expect(response.statusCode).toBe(201)
// })