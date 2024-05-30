import databaseResponseCheck from "./routesUtils.js";

function leagueLeaderGet(leagueLeadersTable, app){
    app.get("/api/v1/leagueLeaders/:id", async function (request,response, next){
        let result = await leagueLeadersTable.leagueLeaderGet(request.params.id)
        response.json(result[0][0])
    })
}

function leagueLeadersGet(leagueLeadersTable, app){
    app.get("/api/v1/leagueLeaders", async function (request, response, next){
        let results = await leagueLeadersTable.leagueLeadersGet();
        response.json(results)
    })
}

function leagueLeaderPost(leagueLeadersTable, app){
        app.post("/api/v1/leagueLeaders", async function (request, response, next){
            if(Object.keys(request.body).length === 0){
                response.status(400).json({
                    error: "Bad Request",
                    message: "There is no body in the post request",
                })
            } else if (Object.keys(request.body).length != 6){
                response.status(400).json({
                    error: "Bad Request",
                    message: "Not the right amount of required fields",
                })
            } else {
                let results = await leagueLeadersTable.leagueLeaderPost(request.body);
                let dbResponse = databaseResponseCheck(results);
                if (dbResponse) {
                    response.status(dbResponse.statusCode).json(dbResponse.bodyResponse)
                } else {
                    response.status(201).json(results)
                }
            }
        })
}

function leagueLeaderPut(leagueLeadersTable, app) {
    app.put("/api/v1/players/:id", async function(request, response, next){
        if (Object.keys(request.body).length === 0) {
            response.status(400).json({
                error: "Bad Request",
                message: "There is no body in the put request",
            });
        } else {
            let results = await leagueLeadersTable.leagueLeaderPut(request.body, request.params.id);
            let dbResponse = databaseResponseCheck(results)
            if (dbResponse){
                response.status(dbResponse.statusCode).json(dbResponse.bodyResponse)
            } else {
                response.status(201).json(results);
            }
        }
    })
}

function leagueLeaderDelete(leagueLeadersTable, app){
    app.delete("/api/v1/leagueLeaders/:id", async function (request, response, next) {
        // if (Object.keys(request.body).length == 0) {
        //     response.status(400).json({
        //             error: "Bad Request",
        //             message: "There is no body in the delete request"
        //     })       
        // } else {
        let results = await leagueLeadersTable.leagueLeaderDelete(request.params.id);
        let dbResponse = databaseResponseCheck(results)
        if (dbResponse){
            response.status(dbResponse.statusCode).json(dbResponse.bodyResponse)
        } else {
            response.status(201).json(results);
        }
    }
)}

export default{
    leagueLeaderGet,
    leagueLeadersGet,
    leagueLeaderPost,
    leagueLeaderPut,
    leagueLeaderDelete
}