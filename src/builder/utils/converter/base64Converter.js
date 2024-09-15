import readline from "node:readline";

/**
 * encode incoming string or content to base64 string.
 * @param string origin
 * @returns {string} base64
 */
export const base64Encode = (string) => {
    return Buffer.from(string).toString('base64');
}

/**
 * decode base64 string to origin string or content.
 * @param base64
 * @returns {string}
 */
export const base64Decode = (base64) => {
    return Buffer.from(base64, 'base64').toString('ascii');
}

/**
 * simple command line module to test base64 converter.
 * @returns {Promise<void>}
 */
export const base64ConverterTest = async () => {
    try {

        const readLine = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        await readLine.question("insert yor string to convert:\n", function (string) {
            const base64 = base64Encode(string);
            console.log(`Original input: ${base64Decode(base64)}`);
            console.log(`Base64 output: ${base64}`);
            readLine.close();
        });

        readLine.on("close", function () {
            process.exit(0);
        });
    } catch (error) {
        console.error(error);
    }
}