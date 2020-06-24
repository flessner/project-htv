/*
_100 CONTINUE               Everything OK so far, Client should continue.

_200 OK                     Generic response to indicate a success.
_201 CREATED                New resource has successfully been created. [POST] & [PUT]
_202 ACCEPTED               The request has been recieved, but hasn't been acted upon.

_300 MULTIPLE_CHOICE        There are more than one possible response to this request.
_301 MOVED                  The URI has been changed permanently. New URI is given in response.
_302 FOUND                  The URI has been changed temporarly. Changes may be made to this URI in the future.

_400 BAD_REQUEST            Generic Client Error response, most likely invalid Syntax.
_401 UNAUTHORIZED           The Client must Authenticate itself to get the requested response.
_403 FORBIDDEN              The Client does not have the need Access Rights. The Clients identity is known.
_404 NOT_FOUND              The URI is not recognized or the resource might not exist.
_405 METHOD_NOT_ALLOWED     The method is know to the Server, but is disabled.
_408 REQUEST_TIMEOUT        Server would like to Shutdown this unused connection.
_410 GONE                   The requested content has been permanently deleted.
_426 UPGRADE_REQUIRED       The Server refuses the request, but is willing to process it, if the Client updates.
_429 TOO_MANY_REQUESTS      This is mainly used for Rate Limiting.

_500 INTERNAL_SERVER_ERROR  This is a generic Server Error response.
_501 NOT_IMPLEMENTED        The request method is not supported by the Server and can't be processed.
_502 BAD_GATEWAY            The Server, while working as a Gateway, got an invalid response.
_503 UNAVAILABLE            Mainly used for a currently unavailable Server, potential reason: Maintenance.
_504 GATEWAY_TIMEOUT        The Server, while working as a Gateway couldn't get a response in time.
*/

module.exports = {
    _100(data = {}){
        return {
            statusCode: 100,
            body: JSON.stringify(data)
        };
    },
    _200(data = {}){
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    },
    _201(data = {}){
        return {
            statusCode: 201,
            body: JSON.stringify(data)
        };
    },
    _202(data = {}){
        return {
            statusCode: 202,
            body: JSON.stringify(data)
        };
    },
    _300(data = {}){
        return {
            statusCode: 300,
            body: JSON.stringify(data)
        };
    },
    _301(data = {}){
        return {
            statusCode: 301,
            body: JSON.stringify(data)
        };
    },
    _302(data = {}){
        return {
            statusCode: 302,
            body: JSON.stringify(data)
        };
    },
    _400(data = {}){
        return {
            statusCode: 400,
            body: JSON.stringify(data)
        };
    },
    _401(data = {}){
        return {
            statusCode: 401,
            body: JSON.stringify(data)
        };
    },
    _403(data = {}){
        return {
            statusCode: 403,
            body: JSON.stringify(data)
        };
    },
    _404(data = {}){
        return {
            statusCode: 404,
            body: JSON.stringify(data)
        };
    },
    _405(data = {}){
        return {
            statusCode: 405,
            body: JSON.stringify(data)
        };
    },
    _408(data = {}){
        return {
            statusCode: 408,
            body: JSON.stringify(data)
        };
    },
    _410(data = {}){
        return {
            statusCode: 410,
            body: JSON.stringify(data)
        };
    },
    _426(data = {}){
        return {
            statusCode: 426,
            body: JSON.stringify(data)
        };
    },
    _429(data = {}){
        return {
            statusCode: 429,
            body: JSON.stringify(data)
        };
    },
    _500(data = {}){
        return {
            statusCode: 500,
            body: JSON.stringify(data)
        };
    },
    _501(data = {}){
        return {
            statusCode: 501,
            body: JSON.stringify(data)
        };
    },
    _502(data = {}){
        return {
            statusCode: 502,
            body: JSON.stringify(data)
        };
    },
    _503(data = {}){
        return {
            statusCode: 503,
            body: JSON.stringify(data)
        };
    },
    _504(data = {}){
        return {
            statusCode: 504,
            body: JSON.stringify(data)
        };
    },
};
