import databaseResponseCheck from "./routesUtils.js";

function saulFFTeamPlayerGet(saulFFTeamTable, app) {
    app.get("/api/v1/saulFFTeam/:id", async function(request, response, next) {
        let result = await saulFFTeamTable.saulFFTeamPlayerGet(request.params.id);
        response.json(result[0][0]);
    })
}

function saulFFTeamGet(saulFFTeamTable, app){
    app.get("/api/v1/saulFFTeam", async function(request, response, next) {
        let results = await saulFFTeamTable.saulFFTeamGet();
        response.json(results)
    })
}

function saulFFTeamPost(saulFFTeamTable, app){
    app.post("/api/v1/saulFFTeam", async function(request, response, next) {
        if (Object.keys(request.body).length === 0){
            response.status(400).json({
                error: "Bad Request",
                message: "There is no body in the post request"
            })
        } else if (Object.keys(request.body).length != 4){
            response.status(400).json({
                error: "Bad Request",
                message: "Not the right amount of required fields (4)"
            })
        } else {
            let results = await saulFFTeamTable.saulFFTeamPost(request.body);
            let dbResponse = databaseResponseCheck(results);
            if (dbResponse) {
                response.status(dbResponse.statusCode).json(dbResponse.bodyResponse)
            } else {
                response.status(201).json(results)
            }
        }
    })
}

function saulFFTeamPut(saulFFTeamTable, app){
    app.put("/api/v1/saulFFTeam/:id", async function (request, response, next){
        if (Object.keys(request.body).length === 0) {
            response.status(400).json({
                error: "Bad request",
                message: "There is no body in the update request"
            })
        } else if (Object.keys(request.body).length != 4) {
            response.status(400).json({
                error: "Bad Request",
                message: "Not the right amount of required fields"
            })
        } else {
            let results = await saulFFTeamTable.saulFFTeamPut(request.body, request.params.id);
            let dbResponse = databaseResponseCheck(results);
            if (dbResponse) { 
                response.status(dbResponse.statusCode).json(dbResponse.bodyResponse)
            } else {
                response.status(201).json(results);
            }
        }
    })
}

function saulFFTeamDelete(saulFFTeamTable, app){
    app.delete("/api/v1/saulFFTeam/:id", async function(request, response, next) {
        let results = await saulFFTeamTable.saulFFTeamDelete(request.params.id)
        let dbResponse = databaseResponseCheck(results);
        if (dbResponse){
            response.status(dbResponse.statuscode).json(dbResponse.bodyResponse)
        } else {
            response.status(201).json(results)
        }
    })
}

export default {
    saulFFTeamPlayerGet,
    saulFFTeamGet,
    saulFFTeamPost,
    saulFFTeamPut,
    saulFFTeamDelete
}