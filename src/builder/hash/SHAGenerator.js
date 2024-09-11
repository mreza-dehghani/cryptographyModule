import crypto from 'crypto';

function buildHash(algorithm, string) {
    const hash = crypto.createHash(algorithm);
    hash.update(string);
    return hash.digest('hex');
}

export const buildSHA1Hash = (string) => {
    return buildHash('sha1', string);
}

export const buildSHA256Hash = (string) => {
    return buildHash('sha256', string);
}

export const buildSHA384Hash = (string) => {
    return buildHash('sha384', string);
}

export const buildSHA512Hash = (string) => {
    return buildHash('sha512', string);
}
