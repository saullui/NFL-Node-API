import databaseResponseCheck from "./routesUtils.js";

function rookie2024Get(rookies2024Table, app){
    app.get("/api/v1/rookies2024/:id", async function (request, response, next) {
        let result = await rookies2024Table.rookie2024Get(request.params.id);
        response.json(result[0][0]);
    });
}

function rookies2024Get(rookies2024Table, app){
    app.get("/api/v1/rookies2024", async function (request, response, next) {
        let results = await rookies2024Table.rookies2024Get();
        response.json(results);
    })
}

function rookie2024Post(rookies2024Table, app){
    app.post("/api/v1/rookies2024", async function (request, response, next) { 
        if (Object.keys(request.body).length === 0) {
            response.status(400).json({
                error: "Bad Request",
                message: "There is no body in the request"
            })
        } else if(Object.keys(request.body).length !=4){
            response.status(400).json({
                error: "Bad Request",
                message: "Not the right amount of required fields"
            })
        } else {
            let results = await rookies2024Table.rookie2024Post(request.body);
            let dbResponse = databaseResponseCheck(results);
            if (dbResponse){
                response.status(dbResponse.statusCode).json(dbResponse.bodyResponse);
            }else {
                response.status(201).json(results);
            }
        }
    })
}

function rookie2024Put (rookies2024Table, app){
    app.put("/api/v1/rookies2024/:id", async function(request, response, next) {
        if (Object.keys(request.body).length === 0) {
            response.status(400).json({
                error: "Bad Request",
                message: "There is no body in the request"
            })
        } else if (Object.keys(request.body).length !=4 ){
            response.status(400).json({
                error: "Bad Request",
                message: "Not the right amount of required fields"
            })
        } else {
            let results = await rookies2024Table.rookie2024Put(request.body, request.params.id);
            let dbResponse = databaseResponseCheck(results);
            if (dbResponse){
                response.status(dbResponse.statusCode).json(dbResponse.bodyResponse);
            } else {
                response.status(201).json(results);
            }
        }
    })
}

function rookie2024Delete (rookies2024Table, app){
    app.delete("/api/v1/rookies2024/:id", async function (request, response, next){
        let results = await rookies2024Table.rookie2024Delete(request.params.id)
        let dbResponse = databaseResponseCheck(results);
        if (dbResponse){
            response.status(dbResponse.statusCode).json(dbResponse.bodyResponse)
        }else {
            response.status(201).json(results);
        }
    })
}

export default {
    rookie2024Get,
    rookies2024Get,
    rookie2024Post,
    rookie2024Put,
    rookie2024Delete
}