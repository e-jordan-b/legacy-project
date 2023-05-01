import supertest from 'supertest'
import { app, server } from '../index'
import EventController from '../controllers/event_controller'
import mongoose from 'mongoose'
// import { connectDB, disconnectDB, mongod } from '../db'
import UserModel from '../models/user_model'
import { isExportDeclaration } from 'typescript'
const request = supertest(app)

const eventId = new mongoose.Types.ObjectId().toString()


const mockEvent = {
  owner: "644116416da455b7fc0c8bba",
  title: "Awesome Event",
  description: "This is going to be a fantastic event",
  date: "2023-06-01T19:00:00.000Z",
  location: "123 Main St",
  coordinates: [40.7128, -74.006],
  image: "https://example.com/image.jpg",
  limitAttendees: 50,
  visibility: true,
  invitees: ["Jane Smith", "Bob Johnson"],
  hideFrom: ["user1", "user2"],
  joined: ["Jane Smith"],
  announcements: [],
  canceled: false,
  active: true,
  liked: true
}

const EventPayload = {
  ...mockEvent
}

describe("event", () => {
  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  })
  describe("create event", () => {
    describe("given the correct information", () => {
      it("should return the event payload", async () => {
        const createPostMock = jest
          .spyOn(EventController, 'postEvent')
          // @ts-ignore
          .mockReturnValueOnce(EventPayload);

        const {statusCode, body, headers} = await supertest(app)
        .post('/event')
        // @ts-ignore
        .send(mockEvent)

        expect(statusCode).toBe(201)
        expect(body).toEqual(EventPayload)
        expect(headers['content-type']).toEqual(expect.stringContaining("json"))
      })

      it("values should be defined", async () => {
        const {statusCode, body} = await supertest(app)
        .post('/event')
        .send(mockEvent)

        expect(body.owner).toBeDefined()
        expect(body.title).toBeDefined()
        expect(body.description).toBeDefined()
        expect(body.image).toBeDefined()
        expect(body.location).toBeDefined()
      })

    })
    describe("given the wrong information", () => {
      it("should return status 400", async () => {
        const {statusCode} = await supertest(app)
        .post('/event')
        .send("invalid data")

        expect(statusCode).toBe(400)
      })
    })
  })
})


















// const url: any = process.env.MONGODB_URI

// beforeAll(() => {
//   // await mongoose.connect(url);
//   connectDB();
// });

// afterAll(() => {
//   // await mongoose.connection.close();
//   disconnectDB();
//   server.close();
// });

// describe('API test', () => {

//   describe("get /users", () => {

//     describe("given the required information", () => {
//       test('should return correct status', async () => {
//         const response = await request.get('/users')
//         expect(response.statusCode).toBe(201)
//       }),
//       test('should return json in the content type header', async () => {
//         const response = await request.get('/users')
//         expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
//       })
      // test('should return list of all users in database', async () => {
      //   const { body } = await request.get('/users')
      //   console.log(body)
      //   expect(
//     })
//   })
// })

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