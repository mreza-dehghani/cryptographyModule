import crypto from 'crypto';

export const HASHING_ALGORITHM = {
    SHA1: 'sha1',
    SHA256: 'sha256',
    SHA384: 'sha384',
    SHA512: 'sha512',
}

export const hashData = (algorithm, string) => {
    const hash = crypto.createHash(algorithm);
    hash.update(string);
    return hash.digest('hex');
}
