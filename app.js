import express from "express";
import healthEndPoint from "./routes/health.js";
import players from "./routes/players.js";
import teams from "./routes/teams.js";
import stadiums from "./routes/stadiums.js";
import leagueLeaders from "./routes/leagueLeaders.js";
import rookies2024 from "./routes/rookies.js";

function makeApplication(playersTable, teamsTable, stadiumsTable, leagueLeadersTable, rookies2024Table) {
  // All code in JS runs top down, unless other declared to run differently.
  // https://www.w3schools.com/js/js_modules.asp
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
  // https://expressjs.com/en/4x/api.html#express
  const app = express();
  // express use() function is configuration parameters for your web server api
  // https://expressjs.com/en/4x/api.html#express.json
  app.use(express.json());
  // https://expressjs.com/en/4x/api.html#express.urlencoded
  app.use(express.urlencoded({ extended: false }));

  //Players CRUD and DB
  playersTable.createPlayersTable();
  players.playerPost(playersTable, app);
  players.playersGet(playersTable, app);
  players.playerGet(playersTable, app);
  players.playerPut(playersTable, app);
  players.playerDelete(playersTable, app);

  // Teams CRUD and DB
  teamsTable.createTeamsTable();
  teams.teamPost(teamsTable, app);
  teams.teamsGet(teamsTable, app);
  teams.teamGet(teamsTable, app);
  teams.teamPut(teamsTable, app);
  teams.teamDelete(teamsTable, app);

  //Stadiums CRUD and DB
  stadiumsTable.createStadiumsTable();
  stadiums.stadiumGet(stadiumsTable, app);
  stadiums.stadiumsGet(stadiumsTable, app);
  stadiums.stadiumPost(stadiumsTable, app);
  stadiums.stadiumPut(stadiumsTable, app);
  stadiums.stadiumDelete(stadiumsTable, app);

  //League Leaders CRUD and DB
  leagueLeadersTable.createleagueLeadersTable();
  leagueLeaders.leagueLeaderGet(leagueLeadersTable, app);
  leagueLeaders.leagueLeadersGet(leagueLeadersTable, app);
  leagueLeaders.leagueLeaderPost(leagueLeadersTable, app);
  leagueLeaders.leagueLeaderPut(leagueLeadersTable, app);
  leagueLeaders.leagueLeaderDelete(leagueLeadersTable, app);

   //2024 rookies CRUD and DB
  rookies2024Table.createRookies2024Table();
  rookies2024.rookie2024Get(rookies2024Table, app);
  rookies2024.rookies2024Get(rookies2024Table, app);
  rookies2024.rookie2024Post(rookies2024Table, app);
  rookies2024.rookie2024Put(rookies2024Table, app);
  rookies2024.rookie2024Delete(rookies2024Table, app);

  /* 
        Use Dependency injection to pass the created web server application
        into the healthEndpoint Function, so that that function has access to
        all of the express framework functionality.
    */
  healthEndPoint(app);

  return app;
}

export default makeApplication;
