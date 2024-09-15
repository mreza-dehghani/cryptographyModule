import version from './src/version.js'
import {hashData, HASHING_ALGORITHM} from './src/builder/hash/SHAGenerator.js';
import {base64ConverterTest, base64Decode, base64Encode} from "./src/builder/utils/converter/base64Converter.js";
import readline from "node:readline";

const moduleWorker = async () => {
    try {
        console.log(`Crypto Module ${version}\n`);
        await base64ConverterTest();

    } catch (error) {
        console.error(error);
    }
}

moduleWorker();