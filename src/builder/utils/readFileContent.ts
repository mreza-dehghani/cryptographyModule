import * as fs from "node:fs";

/**
 * read file content as binary
 * @param filePath absolute file path
 * @returns {string} its buffer of read file
 */
export const readFileContent = (filePath: string): string => {
    try {
        fs.existsSync(filePath)
    } catch (error) {
        throw new Error(`Could not read file: ${filePath}\n,Error: ${error}`);
    }
    return fs.readFileSync(filePath, {encoding: 'utf8'});
}