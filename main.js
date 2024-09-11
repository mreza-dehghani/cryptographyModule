import version from './src/version.js'
import {hashData, HASHING_ALGORITHM} from './src/builder/hash/SHAGenerator.js';

const moduleWorker = () => {
    try {
        console.log(`Crypto Module ${version}\n`);

    } catch (error) {
        console.error(error);
    }
}

moduleWorker();