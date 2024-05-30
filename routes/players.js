import databaseResponseCheck from "./routesUtils.js";

function playerGet(playersTable, app) {
  app.get("/api/v1/players/:id", async function (request, response, next) {
    let result = await playersTable.playerGet(request.params.id);
    response.json(result[0][0]);
  });
}

function playersGet(playersTable, app) {
  app.get("/api/v1/players", async function (request, response, next) {
    // GET ALL NFL Players
    let results = await playersTable.playersGet();
    response.json(results);
  });
}

function playerPost(playersTable, app) {
  app.post("/api/v1/players", async function (request, response, next) {
    if (Object.keys(request.body).length === 0) {
      response.status(400).json({
        error: "Bad Request",
        message: "There is no body in the post request",
      });
    }else if(Object.keys(request.body).length != 4){
      response.status(400).json({
        error: "Bad Request",
        message: "Not the right amount of required fields"
      }) 
    }else {
      let results = await playersTable.playerPost(request.body);
      let dbResponse = databaseResponseCheck(results);
      if (dbResponse) {
        response.status(dbResponse.statusCode).json(dbResponse.bodyResponse);
      } else {
        //Return a 201 on Posts that are successful - 201 means Created
        response.status(201).json(results);
      }
    }
  });
}

function playerPut(playersTable, app) {
  app.put("/api/v1/players/:id", async function (request, response, next) {
    if (Object.keys(request.body).length === 0) {
      response.status(400).json({
        error: "Bad Request",
        message: "There is no body in the update request",
      });
    } else if (Object.keys(request.body).length != 4){
        response.status(400).json({
          error: "Bad Request",
          message: "Not the right amount of required fields"
        })
    } else {
      let results = await playersTable.playerPut(request.body, request.params.id);
      let dbResponse = databaseResponseCheck(results);
      if (dbResponse) {
        response.status(dbResponse.statusCode).json(dbResponse.bodyResponse);
      } else {
        response.status(201).json(results);
      }
    }
  })
}

function playerDelete(playersTable, app) {
  app.delete("/api/v1/players/:id", async function (request, response, next) {
    // if (Object.keys(request.body).length === 0){
    //   response.status(400).json({
    //     error: "Bad Request",
    //     message: "There is no body in the delete request"
    //   })
    // } else {
    let results = await playersTable.playerDelete(request.params.id);
    let dbResponse = databaseResponseCheck(results);
    if (dbResponse){
      response.status(dbResponse.statusCode).json(dbResponse.bodyResponse)
    } else {
      response.status(201).json(results);
    }
  }
)}

export default {
  playersGet,
  playerGet,
  playerPost,
  playerPut,
  playerDelete,
};
