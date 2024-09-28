import version from './src/version.js'
import {encrypt} from "./src/builder/encryption/symmetricEncryption.js";
import {decrypt} from "./src/builder/decryption/symmetricDecryption.js";
import crypto from "crypto";

const moduleWorker = async () => {
    try {
        console.log(`Crypto Module ${version}\n`);

    } catch (error) {
        console.error(error);
    }
}

moduleWorker();