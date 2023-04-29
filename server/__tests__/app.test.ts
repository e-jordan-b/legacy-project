// const supertest = require('supertest')
// const { app, server} = require('../index')
import supertest from 'supertest'
import { app, server } from '../index'
import { connectDB, disconnectDB } from '../db'
const request = supertest(app)
// const { connectDB, disconnectDB } = require('../db');

describe('API test', () => {
  beforeAll(() => {
    connectDB();
  });

  afterAll(() => {
    disconnectDB();
    server.close();
  });

  describe("get /users", () => {
    describe("given the required information", () => {
      // should save user to the database
      test('should return correct status', async () => {
        const response = await request.get('/users')
        expect(response.statusCode).toBe(201)
      })
      // should respond with a json object containing the user

      // should specify json in the content type header
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