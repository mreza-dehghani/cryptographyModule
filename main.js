import version from './src/version.js'

const moduleWorker = async () => {
    try {
        console.log(`Crypto Module ${version}\n`);

    } catch (error) {
        console.error(error);
    }
}

moduleWorker();