import supertest from 'supertest'
import { app, server } from '../index'
import EventController from '../controllers/event_controller'
import Event from '../models/event_model'
import mongoose from 'mongoose'
import User from '../models/user_model'
// import { connectDB, disconnectDB, mongod } from '../db'
// import UserModel from '../models/user_model'
// import { isExportDeclaration } from 'typescript'
// const request = supertest(app)

const mockUser = {
  id: '644116416da455b7fc0c8bba',
  name: "John Doe",
  username: "johndoe",
  profilePicture: "https://example.com/profile-picture.jpg",
  phone: "1234567890",
  email: "johndoe@example.com",
  age: 30,
  friends: ["friend1", "friend2", "friend3"],
  following: ["user1", "user2"],
  savedEvents: ["event1", "event2", "event3"],
  joinedEvents: ["event1", "event3"]
}

const mockEvent = {
  //_id: new mongoose.Types.ObjectId(),//'644fe16e6b60527903d98a97',
  owner: '644116416da455b7fc0c8bba',
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

const mockForPostEventUser = {
  _id: new mongoose.Types.ObjectId(),//'644fe16e6b60527903d98a97',
  owner: '644116416da455b7fc0c8bba',
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

const testUsers = [
  { username: 'user1', email: 'user1@example.com' },
  { username: 'user2', email: 'user2@example.com' },
];

const EventPayload = {
  ...mockEvent
}

describe("Event Controller", () => {
  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    // await mongoose.connection.close();
  })
  describe("POST /event", () => {
    describe("given the correct information", () => {
      it("should return the event payload", async () => {
        const createPostMock = jest
          .spyOn(EventController, 'postEvent')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
          .mockReturnValueOnce(EventPayload);

        const {statusCode, body, headers} = await supertest(app)
        .post('/event')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        .send(mockEvent)

        expect(statusCode).toBe(201)
        expect(body).toEqual(EventPayload)
        expect(headers['content-type']).toEqual(expect.stringContaining("json"))
      })

      it("values should be defined", async () => {
        const {body} = await supertest(app)
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
      it("should return status 400 if the body is empty", async () => {
        const {statusCode} = await supertest(app)
        .post('/event')
        .send()

        expect(statusCode).toBe(400)
      })
    })
  })
  describe("GET /events/:id", () => {
    describe("When called correctly", () => {
      it("should return status 201", async () => {
        const { statusCode } = await supertest(app)
          .get(`/events/${mockUser.id}`)

        expect(statusCode).toBe(201)
      })
      it("should return an array", async () => {
        const response = await supertest(app)
          .get(`/events/${mockUser.id}`)

        expect(Array.isArray(response.body)).toBe(true)
      })
    })
  })
  describe("POST /eventUser", () => {
    describe("When called correctly", () => {
      it("should return status 201 when action is add", async () => {
        const event = await Event.findOne({title: mockEvent.title})
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        mockForPostEventUser._id = event._id
        const { statusCode } = await supertest(app)
        .post('/eventUser')
        .send({...mockEvent, action: "add", eventId: mockForPostEventUser._id})

      expect(statusCode).toBe(201)
      })
      it("should return status 201 when action is removed", async () => {
        const event = await Event.findOne({title: mockEvent.title})
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        mockForPostEventUser._id = event._id
        const { statusCode } = await supertest(app)
        .post('/eventUser')
        .send({...mockEvent, action: "remove", eventId: mockForPostEventUser._id})

      expect(statusCode).toBe(201)
      })
    })
    describe("when called with the wrong eventId", () => {
      it("should return status 400", async () => {
        const { statusCode } = await supertest(app)
        .post('/eventUser')
        .send({action: "remove", eventId: '123'})
      expect(statusCode).toBe(400)
      })
    })
  })
})

describe("User Controller", () => {
  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  })
  describe('POST /user', () => {
    describe("When user is correct", () => {
      it('should return status 201', async () => {
        const { statusCode } = await supertest(app)
          .post('/user')
          .send(mockUser)

        expect(statusCode).toBe(201)
      })
      it('should return json with the new created user', async () => {
        const { body, headers } = await supertest(app)
          .post('/user')
          .send(mockUser)

        expect(body).toEqual(mockUser)
        expect(headers['content-type']).toEqual(expect.stringContaining("json"))
        expect(body.username).toBeDefined()
        expect(body.name).toBeDefined()
        expect(body.phone).toBeDefined()
        expect(body.email).toBeDefined()
        expect(body.profilePicture).toBeDefined()
        expect(body.age).toBeDefined()
      })
    })
    describe("When the information is not correct", () => {
      it('should return status 400', async () => {
        const { statusCode } = await supertest(app)
          .post('/user')
          .send({username: 'Eric'})
        expect(statusCode).toBe(400)
      })
      it('should return json with wrong information', async () => {
        const response = await supertest(app)
          .post('/user')
          .send({username: 'Eric'})
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        expect(response.body).toEqual('wrong information')
      })
    })
  })
  describe('GET /login/:usernam/:password', () => {
    describe('when given the correct information', () => {
      it('should return status 201', async () => {
        const { statusCode } = await supertest(app)
          .get(`/login/${mockUser.username}/123`)

        expect(statusCode).toBe(201)
      })
      it('should return the correct user in JSON', async () => {
        const { body, headers } = await supertest(app)
          .get(`/login/${mockUser.username}/123`)

        expect(body[0].username).toEqual(mockUser.username)
        expect(headers['content-type']).toEqual(expect.stringContaining("json"))
      })
    })
    describe("when the username is not value", () => {
      it("should return status 400", async () => {
        User.find = jest.fn().mockImplementation(() => {
          throw new Error('Error')
        })
        const response = await supertest(app)
        .get(`/login/notcorrect/123`)

      expect(response.status).toBe(400)
      expect(User.find).toBeCalled()
      })
      it("should return json with wrong username", async () => {
        User.find = jest.fn().mockImplementation(() => {
          throw new Error('Error')
        })
        const response = await supertest(app)
        .get(`/login/notcorrect/123`)

      expect(response.body).toEqual('wrong username')
      })
    })
  })
  describe("GET /users", () => {
    describe("When called correctly", () => {
      it("should return status code 201", async () => {
        const { statusCode } = await supertest(app)
          .get(`/users`)
        expect(statusCode).toBe(201)
      })
      it("should return json array", async () => {
        User.find = jest.fn().mockResolvedValue(testUsers)
        const response = await supertest(app)
          .get(`/users`)
        expect(Array.isArray(response.body)).toBe(true)
        expect(User.find).toBeCalled()
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
      })
    })
    describe("When an error ocurs", () => {
      it("should give 400 status", async () => {
        User.find = jest.fn().mockImplementation(() => {
          throw new Error('Error')
        })
        const response = await supertest(app)
        .get(`/users`)

      expect(response.status).toBe(400)
      expect(User.find).toBeCalled()
      })
      it("should return json with something went wrong", async () => {
        User.find = jest.fn().mockImplementation(() => {
          throw new Error('Error')
        })
        const response = await supertest(app)
        .get(`/users`)

      expect(response.body).toEqual('something went wrong')
      })
    })
  })
  describe('GET /user/:userId', () => {
    describe("When called correctly", () => {
      it("should return status 201", async () => {
        const { statusCode } = await supertest(app)
          .get('/user/644116416da455b7fc0c8bba')

        expect(statusCode).toBe(201)
      })
      it("should return the user as json", async () => {
        const testUser = {
          _id: 'testUserId',
          username: 'testUser',
          email: 'testUser@example.com'
        };

        User.find = jest.fn().mockResolvedValue([testUser])

        const response = await supertest(app).get(`/user/${testUser._id}`)

        expect(response.status).toBe(201)
        expect(response.body).toEqual([testUser])
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
      })
    })
    describe("If something goes wrong", () => {
      it('should return status 400', async () => {
        User.find = jest.fn().mockImplementation(() => {
          throw new Error('Error')
        })

        const response = await supertest(app)
          .get('/user/invalidUserId');

        expect(response.status).toBe(400);
      })
      it('should return json with something went wrong', async () => {
        User.find = jest.fn().mockImplementation(() => {
          throw new Error('Error')
        })

        const response = await supertest(app)
          .get('/user/invalidUserId');

        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        expect(response.body).toEqual('something went wrong');
      })
    })
  })
})