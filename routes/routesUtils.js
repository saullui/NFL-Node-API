export default function databaseResponseCheck(results) {
    if(results.code) {
        if(results.code  === "ER_BAD_NULL_ERROR") {
            return {
                statusCode: 422,
                bodyResponse: { errorCode: results.code, message: results.message}
            }
        } else if(results.code === "ER_PARSE_ERROR"){
            return {
                statusCode: 422,
                bodyResponse: {errorCode: results.code, message: results.message}
            }
        } else if (results.code === "ER_TRUNCATED_WRONG_VALUE_FOR_FIELD") {
            return{
                statusCode: 422,
                bodyResponse: {errorCode: results.code, message: results.message}
            }
        } else if (results.code === "ER_DATA_TOO_LONG"){
            return {
                statusCode: 416,
                bodyResponse: { errorCode: results.ocde, message: results.message}
            }
        } else if (results.code === "ER_BAD_FIELD_ERROR"){
            return { 
                statusCode: 422,
                bodyResponse: { errorCode: results.code, message: results.message}
            }
        } else {
            return {
                statusCode: 500,
                bodyResponse: { error: results.code, message: results.message}
            }
        }
    }
}

