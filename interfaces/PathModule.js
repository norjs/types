import TypeUtils from "@norjs/utils/Type";

/**
 * Subset of NodeJS 'path' module.
 *
 * @interface
 */
export class PathModule {

    /**
     *
     * @param path {string}
     * @returns {string}
     */
    dirname (path) {}

    /**
     *
     * @param paths {string[]}
     * @returns {string}
     */
    join (...paths) {}

    /**
     *
     * @param paths {string[]}
     * @returns {string}
     */
    resolve (...paths) {}

    /**
     * Path separator, "\\" on Windows, "/" on POSIX.
     *
     * @returns {string}
     */
    get sep () {
        return "\\";
    }

    /**
     * Path delimiter
     * @returns {string}
     */
    get delimiter () {
        return ":";
    }

}

TypeUtils.defineType(
    "PathModule",
    TypeUtils.classToObjectPropertyTypes(PathModule),
    {
        acceptUndefinedProperties: true
    }
);

// noinspection JSUnusedGlobalSymbols
export default PathModule;
