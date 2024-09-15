import readline from "node:readline";

export const base64Encode = (string) => {
    return Buffer.from(string).toString('base64');
}

export const base64Decode = (base64) => {
    return Buffer.from(base64, 'base64').toString('ascii');
}

export const base64ConverterTest = async () => {
    try {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        await rl.question("insert yor string to convert:\n", function (string) {
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