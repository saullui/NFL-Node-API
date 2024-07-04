import databaseResponseCheck from "./routesUtils";

function draftProspect2025Get(draftProspects2025Table, app){
    app.get("/api/v1/draftProspects2025/:id", async function (request, response, next){
        let result = await draftProspects2025Table.draftProspect2025Get(request.parmas.id);
        response.json(result[0][0])
    })
}

function draftProspects2025Get(draftProspects2025Table, app){
    app.get("/api/v1/draftProspects2025", async function (request, response, next){
        let results = await draftProspects2025Table.draftProspects2025Get();
        response.json(results);
    })
}

function draftProspect2025Post(draftProspects2025Table, app){
    app.post("/api/v1/draftProspects2025", async function (request, response, next){
        if (Object.keys(request.body).length === 0) {
            response.status(400).json({
                error: "Bad Request",
                message: "There is no body in the post request"
            })
        } else if (Object.keys(request.body).length != 4){
            response.status(400).json({
                error: "Bad request",
                message: "Not the right amount of required fields"
            })
        } else {
            let results = await draftProspects2025Table.draftProspect2025Post(request.body)
            let dbResponse = databaseResponseCheck(results)
            if (dbResponse){
                response.status(dbResponse.statusCode).json(dbResponse.bodyResponse)
            } else { 
                response.status(201).json(results)
            }
        }
    })
}

function draftProspect2025Put(draftProspects2025Table, app) {
    app.put("/api/v1/draftProspects2025/:id", async function(request, response, next ){
        if (Object.keys(request.body).length === 0){
            response.status(400).json({
                error: "Bad Request",
                message: "Not the right amount of required fields"
            })
        } else if (Object.keys(request.body).length != 4){
            response.status(400).json({
                error:"Bad request",
                message: "Not the right amount of required fields"
            })
        } else {
            let results = await draftProspects2025Table.draftProspect2025Put(request.body, request.params.id)
            let dbResponse = databaseResponseCheck(results)
            if (dbResponse){
                response.status(dbResponse.statusCode).json(dbResponse.bodyResponse)
            } else{
                response.status(201).json(results)
            }
        }
    })
}

function draftProspect2025Delete(draftProspects2025Table, app){
    app.delete("/api/v1/draftProspects2025/:id", async function(request, response, next){
        let results = await draftProspects2025Table.draftProspect2025Delete(request.params.id)
        let dbResponse = databaseResponseCheck(results)
        if (dbResponse){
            response.status(dbResponse.statusCode).json(dbResponse.bodyResponse)
        } else {
            response.status(201).json(results)
        }
    })
}

export default{
    draftProspect2025Get,
    draftProspects2025Get,
    draftProspect2025Post,
    draftProspect2025Put,
    draftProspect2025Delete
}