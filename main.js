import version from './src/version.js'
import {hashData, HASHING_ALGORITHM} from './src/builder/hash/SHAGenerator.js';

const moduleWorker = () => {
    console.log(`Crypto Module ${version}\n`);
    console.log(`SHA-1 => ${hashData(HASHING_ALGORITHM.SHA1, 'Hello World!')}`);
    console.log(`SHA-256 => ${hashData(HASHING_ALGORITHM.SHA256, 'Hello World!')}`);
    console.log(`SHA-384 => ${hashData(HASHING_ALGORITHM.SHA384, 'Hello World!')}`);
    console.log(`SHA-512 => ${hashData(HASHING_ALGORITHM.SHA512, 'Hello World!')}`);
}

moduleWorker();