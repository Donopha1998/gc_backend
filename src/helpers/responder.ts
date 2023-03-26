interface ResultWithData {
    success: boolean,
    message: string,
    data: any
}
interface ResultWithMessage {
    success: Boolean,
    message: String,
}

class ResponderClass {
    constructor() { }
    sendFailureMessage = function (message: string, res: any) {
        let result: ResultWithMessage = {
            success: false,
            message: message,
        };
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify(result));
    }
    sendSuccessMessage = function (message: string, res: any) {
        let result: ResultWithMessage = {
            success: true,
            message: message,
        };
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify(result));
    }
    sendSuccessData = function (data: any, message: string, res: any) {
        let result: ResultWithData = {
            success: true,
            message: message,
            data: data
        };
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify(result));
    }
    sendFailureData = function (data: any, message: string, res: any) {
        let result: ResultWithData = {
            success: false,
            message: message,
            data: data
        };
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify(result));
    }
}

export const Responder = new ResponderClass();