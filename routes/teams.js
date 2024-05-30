import databaseResponseCheck from "./routesUtils.js"

function teamGet(teamsTable, app){
    app.get("/api/v1/teams/:id", async function (request, response, next){
        let result = await teamsTable.teamGet(request.params.id)
        let dbResponse = databaseResponseCheck(result)
        if (dbResponse){
            response.status(dbResponse.statusCode).json(dbResponse.bodyResponse)
        } else {
            response.status(200).json(result[0][0])
        }
    })
}

function teamsGet(teamsTable, app){
    app.get("/api/v1/teams", async function (request, response, next){
        let results = await teamsTable.teamsGet()
        response.json(results)
    })
}        

function teamPost(teamsTable, app){
    app.post("/api/v1/teams", async function (request, response, next){
        if(Object.keys(request.body).length === 0){
            response.status(400).json({
                error: "Bad Request",
                message: "There is no body in the post request"
            })
        } else if(Object.keys(request.body).length != 5){
            response.status(400).json({
                error: "Bad Request",
                message: "Not the right amount of required fields"
            })
        } else {
            let results = await teamsTable.teamPost(request.body)
            let dbResponse = databaseResponseCheck(results)
            if (dbResponse){
                response.status(dbResponse.statusCode).json(dbResponse.bodyResponse)
            }else{
            response.status(201).json(results)
            }
        }
    })
}

function teamPut(teamsTable, app){
    app.put("/api/v1/teams/:id", async function (request, response, next){
        if(Object.keys(request.body).length === 0){
            response.status(400).json({
                error: "Bad Request",
                message: "There is no body in the update request"
            })
        }else if(Object.keys(request.body).length != 5){
            response.status(400).json({
                error: "Bad request",
                message: "Not the right amount of required fields"
            })
        }else{
            let results = await teamsTable.teamPut(request.body, request.parms.id);
            let dbResponse = databaseResponseCheck(results)
            if (dbResponse){
                response.status(dbResponse.statusCode).json(dbResponse.bodyResponse)
            }else{
                response.status(201).json(results);
            }
        }
    })
}

function teamDelete(teamsTable, app){
    app.delete("/api/v1/teams/:id", async function (request, response, next){
        // if(Object.keys(request.body).length === 0){
        //     response.status(400).json({
        //         error: "Bad Requeste",
        //         message: "There is no body in the delete request"
        //     })
        // } else {
            let results = await teamsTable.teamDelete(request.params.id);
            let dbResponse = databaseResponseCheck(results)
            if (dbResponse){
                response.status(dbResponse.statusCode).json(dbResponse.bodyResponse)
            } else {
                response.status(201).json(results);
            }
        }
    )

}


export default {
    teamPost,
    teamsGet,
    teamGet,
    teamPut,
    teamDelete
}

