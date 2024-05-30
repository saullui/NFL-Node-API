import makeApplication from '../../app.js'
import request from "supertest"
import { jest } from "@jest/globals"


const createPlayersTable = jest.fn()
const createTeamsTable = jest.fn()
const createleagueLeadersTable = jest.fn()
const createStadiumsTable = jest.fn()
const createRookies2024Table = jest.fn()

const app = makeApplication(
    {createPlayersTable}, 
    {createTeamsTable}, 
    {createStadiumsTable}, 
    {createleagueLeadersTable}, 
    {createRookies2024Table})

it("should return a status 200", async () => {
    await request(app)
        .get("/api/v1/health")
        .then((res) => {
            expect(res.status).toBe(200)
        })
})

it("should return a JSON message containing OK", async () => {
    await request(app)
        .get("/api/v1/health")
        .then((res) => {
            expect(res.body.message).toContain("OK")
        })
})
