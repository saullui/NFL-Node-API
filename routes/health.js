/*
    A health Endpoint is used to test whether the API is up and running
    as it should be in its environment, like production, or non-prod
*/

function healthEndPoint(app) {
    // GET method route, the READ from CRUD.
    /*
     The express get() function takes two parameters, or arguments,
     one being a string with the route you would like the web server
     to set up for you, and the other parameter is a callback function where you do your logic
     for who ever goes to that route.

        A callback is a function passed as an argument to another function
        This technique allows a function to call another function
        A callback function can run after another function has finished
    */
    app.get("/api/v1/health", function (request, response, next) {
    /*
        When the user hits our health route, then you will give them 
        a response saying OK.

        A response is what you send back to the user that goes to your api route.
    */
        response.json({message: "OK"})
        /*
            JSON means JavaScript Object Notation, and it is a way to send
            data over the internet in a human readable format.
            Example of JSON
                {
                    message: "OK"
                }
        */
    })
}
// Always export the function so that it is visible for all of the app
export default healthEndPoint