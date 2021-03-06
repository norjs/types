import TypeUtils from "@norjs/utils/Type";

/**
 * This interface describes a subset of the API in NodeJS `http.ServerResponse`.
 *
 * @see https://nodejs.org/api/http.html#http_class_http_serverresponse
 * @interface
 */
export class HttpResponseObject {

    /**
     * @returns {number}
     */
    get statusCode () {}

    /**
     * @param value {number}
     */
    set statusCode (value) {}

    /**
     *
     * @param name {string}
     * @param value {*}
     */
    setHeader (name, value) {}

    /**
     *
     * @param code {number}
     * @param headers {Object}
     */
    writeHead (code, headers) {}

    /**
     *
     * @param chunk {string|Buffer}
     * @param encoding {string}
     * @param callback {Function}
     */
    write (chunk, encoding = "utf8", callback=undefined) {}

    /**
     *
     */
    end () {}

}

TypeUtils.defineType(
    "HttpResponseObject",
    TypeUtils.classToObjectPropertyTypes(HttpResponseObject),
    {
        acceptUndefinedProperties: true
    }
);

export default HttpResponseObject;
