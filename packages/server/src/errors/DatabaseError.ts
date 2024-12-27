import { CustomError } from "./CustomError";

export default class DatabaseError extends CustomError {
    private static readonly _statusCode = 400;
    private readonly _code: number;
    private readonly _logging: boolean;
    private readonly _context: { [key: string]: unknown};

    constructor(params?: {code?: number, message?: string, logging?: boolean, context?: { [key: string]: unknown }}) {
        const { code, message, logging } = params || {};

        super(message || "Something went wrong");
        this._code = code || DatabaseError._statusCode;
        this._logging = logging || false;
        this._context = params?.context || {};

        Object.setPrototypeOf(this, DatabaseError.prototype);
    }

    get errors() {
        return [{ message: this.message, context: this._context }];
    }

    get statusCode() {
        return this._code;
    }

    get logging() {
        return this._logging;
    }
}
