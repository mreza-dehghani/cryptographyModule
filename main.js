import version from './src/version.js'
import {hashData, HASHING_ALGORITHM} from './src/builder/hash/SHAGenerator.js';
import {base64Decode, base64Encode} from "./src/builder/utils/converter/base64Converter.js";
import readline from "node:readline";

const moduleWorker = async () => {
    try {
        console.log(`Crypto Module ${version}\n`);

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let str;
        let ans = await rl.question("insert yor string to convert:\n", function (string) {
            str = string
            const base64 = base64Encode(string);
            console.log(`Original input: ${base64Decode(base64)}`);
            console.log(`Base64 output: ${base64}`);
            rl.close();
        });

        rl.on("close", function () {
            process.exit(0);
        });
    } catch (error) {
        console.error(error);
    }
}

moduleWorker();