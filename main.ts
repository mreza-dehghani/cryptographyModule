import version from './src/version'

const moduleWorker = async () => {
    try {
        console.log(`Crypto Module ${version}\n`);

    } catch (error) {
        console.error(error);
    }
}

moduleWorker();

