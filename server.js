import makeApplication from './app.js'
import playersTable from './database/playersTable.js'
import teamsTable from './database/teamsTable.js'
import stadiumsTable from './database/stadiumsTable.js'
import leagueLeadersTable from './database/leagueLeadersTable.js'
import rookies2024Table from './database/rookies2024Table.js'
import draftProspects2025Table from './database/draftProspects2025Table.js'
import saulFFTeamTable from './database/saulFFTeamTable.js'

/*
    server.js is where we call our webserver function and start and run ]
    our web server.
*/
const application = makeApplication(playersTable, teamsTable, stadiumsTable, leagueLeadersTable, rookies2024Table, draftProspects2025Table, saulFFTeamTable)
application.listen(5000, () => console.log("Listening on port 5000"))

/// npm init to initialize a node project and create a package.json file