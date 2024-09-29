import version from './src/version.js'
import {generateRsaKeyPair} from "./src/builder/keyPairs/generateKeyPairs.js";
import {encryptMessage} from "./src/builder/encryption/asymmetricEncryption.js";
import {decryptMessage} from "./src/builder/decryption/asymmetricDecryption.js";

const moduleWorker = async () => {
    try {
        console.log(`Crypto Module ${version}\n`);

        // Example usage
        const message = "Hello, World!";
        const {privateKey, publicKey} = generateRsaKeyPair();
        const encryptedMessage = encryptMessage(message, publicKey);
        console.log("Encrypted:", encryptedMessage);

        const decryptedMessage = decryptMessage(encryptedMessage, privateKey);
        console.log("Decrypted:", decryptedMessage);

    } catch (error) {
        console.error(error);
    }
}

moduleWorker();