import './FileSystemStatsObject.js';
import './FileSystemDirectoryEntity.js';
import TypeUtils from "@norjs/utils/Type";

/**
 * Subset of NodeJS fs module.
 *
 * @interface
 */
export class FileSystemModule {

    /**
     *
     * @param path {string}
     * @returns {boolean}
     */
    existsSync (path) {}

    /**
     *
     * @param path {string}
     * @param options {{recursive:boolean, mode:number}}
     */
    mkdirSync (path, options = {recursive: false, mode: 0o777}) {}

    /**
     *
     * @param path {string}
     * @param options {{bigint: boolean}} If `true`, numeric values should be returned as `bigint`
     * @returns {FileSystemStatsObject}
     */
    statSync (path, options = {bigint: false}) {}

    /**
     *
     * @param path {string}
     */
    unlinkSync (path) {}

    /**
     *
     * @param path {string}
     * @param mode {number}
     */
    chmodSync (path, mode) {}

    /**
     * Read from a file synchronously.
     *
     * @param file {string}
     * @param encoding {string|null}
     * @param flag {string}
     * @returns {string|Buffer} If encoding is specified, the function returns `string`.
     */
    readFileSync (path, {encoding = null, flag = "r"}) {}

    /**
     * Write to a file synchronously.
     *
     * @param file {string}
     * @param data {string|Buffer}
     * @param encoding {string}
     * @param mode {integer}
     * @param flag {string}
     */
    writeFileSync (file, data, {encoding = 'utf8', mode = 0o666, flag = "w"}) {}

    /**
     *
     * @param path {string}
     * @param encoding {string}
     * @param withFileTypes {boolean} If `true`, will return FileSystemDirectoryEntity objects
     * @returns {string[]|FileSystemDirectoryEntity[]}
     */
    readdirSync (path, {encoding='utf8', withFileTypes= false}) {}

    /**
     *
     * @param filename {string}
     * @param [persistent] {boolean}
     * @param [recursive] {boolean}
     * @param [encoding] {string}
     * @param [listener] {Function}
     */
    watch (
        filename,
        {
            persistent = true,
            recursive = false,
            encoding = 'utf8'
        } = {},
        listener = undefined
    ) {}

}

TypeUtils.defineType(
    "FileSystemModule",
    TypeUtils.classToObjectPropertyTypes(FileSystemModule),
    {
        acceptUndefinedProperties: true
    }
);

// noinspection JSUnusedGlobalSymbols
export default FileSystemModule;
