import crypto from 'crypto';

export const buildSHA256Hash = (base64String) => {
    const hash = crypto.createHash('sha256');
    return hash.update(base64String);
}

export const buildSHA512Hash = (base64String) => {
    const hash = crypto.createHash('sha512');
    return hash.update(base64String);
}
