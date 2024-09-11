import crypto from 'crypto';

/**
 * Enumeration types of a valid hashing algorithms.
 * @type {{SHA256: string, SHA1: string, SHA384: string, SHA512: string}}
 */
export const HASHING_ALGORITHM = {
    SHA1: 'sha1',
    SHA256: 'sha256',
    SHA384: 'sha384',
    SHA512: 'sha512',
}

/**
 *
 * @param algorithm accepts one of hashing algorithms from related enumeration type
 * @param string input data that will be hashed in string (suggested format is base64)
 * @returns {string} hashed data returns in 'HEX' format
 */
export const hashData = (algorithm, string) => {
    try {
        const hash = crypto.createHash(algorithm);
        hash.update(string);
        return hash.digest('hex');
    } catch (error) {
        throw new Error(`Hashing data failed,\n${error}`);
    }
}
