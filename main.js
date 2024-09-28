import version from './src/version.js'
import {encrypt} from "./src/builder/encryption/symmetricEncryption.js";
import {decrypt} from "./src/builder/decryption/symmetricDecryption.js";
import crypto from "crypto";

const moduleWorker = async () => {
    try {
        console.log(`Crypto Module ${version}\n`);

        const message = "Hello world!";
        const encrypted = encrypt(message);
        console.log("Encrypted:", encrypted);

        const decrypted = decrypt(encrypted.encryptedData,encrypted.key, encrypted.iv);
        console.log("Decrypted:", decrypted);

    } catch (error) {
        console.error(error);
    }
}

moduleWorker();