import databaseResponseCheck from "./routesUtils.js"

function stadiumGet(stadiumsTable, app){
    app.get("/api/v1/stadiums/:id", async function (request, response, next){
        let result = await stadiumsTable.stadiumGet(request.parms.id)
        response.json(result[0][0])
    })
}

function stadiumsGet(stadiumsTable, app){
    app.get("/api/v1/stadiums", async function (request, response, next){
        let results = await stadiumsTable.stadiumsGet()
        response.json(results)
    })
}

function stadiumPost(stadiumsTable, app){
    app.post("/api/v1/stadiums", async function (request, response, next){
        if (Object.keys(request.body).length === 0) {
            response.status(400).json({
                error: "Bad Request",
                message: "There is no body in that post request",
            })
        }else { 
            let results = await stadiumsTable.stadiumPost(request.body)
            let dbResponse = databaseResponseCheck(results);
            if (dbResponse) {
                response.status(dbResponse.statusCode).json(dbResponse.bodyResponse);
            }else {
                response.status(201).json(results);
            }
        }
    })
}

function stadiumPut(stadiumsTable, app){
    app.put("/api/v1/players/:id", async function (request, response, next) {
        if(Object.keys(request.body).length === 0 ) {
            response.status(400).json({
                error: "Bad Request",
                message: "There is no body in the update request",
            })
        } else { 
            let results = await stadiumsTable.stadiumPut(request.body, request.parms.id);
            let dbResponse = databaseResponseCheck(results);
            if (dbResponse){
                response.status(dbResponse.statusCode).json(dbResponse.bodyResponse);
            }else {
                response.status(201).json(results)
            }
        }
    })
}

function stadiumDelete(stadiumsTable, app){
    app.delete("/api/v1/stadiums/:id", async function (request, response, next){
        // if(Object.keys(request.body).length === 0) {
        //     response.status(400).json({
        //         error: "Bad request",
        //         message: "There is no body in the delete request"
        //     })
        // } else {
        let results = await stadiumsTable.stadiumDelete(request.params.id);
        let dbResponse = databaseResponseCheck(results)
        if (dbResponse){
            response.status(dbResponse.statusCode).json(dbResponse.bodyResponse)
        } else {
            response.status(201).json(results)
        }
    }
)}


export default{
    stadiumGet,
    stadiumsGet,
    stadiumPost,
    stadiumPut,
    stadiumDelete
}