import fs from "node:fs";

/**
 *
 * @param filePath absolute file path
 * @returns {string} its buffer of read file
 */
export const readFileContent = filePath => {
    return fs.readFileSync(filePath, { encoding: 'utf8' });
}