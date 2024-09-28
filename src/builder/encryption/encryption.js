/**
 * AES-256-CTR is a symmetric encryption algorithm that uses a 256-bit key and operates in counter (CTR) mode.
 * In this mode, data is encrypted in blocks, and a unique counter value is combined with the key to produce a stream
 * of pseudo-random data that gets XORed with the plaintext. This allows for efficient encryption and decryption,
 * as you can process data in parallel. It's also important to use a unique initialization vector (IV) for each encryption
 * session to ensure security.
 * CTR stands for "Counter." In this mode, a counter value is combined with a nonce or initialization vector (IV)
 * to generate a unique stream of data for encryption.
 *
 * @param plainText original data
 * @param options accepts key and initial vector
 * @returns {{encryptedData: string, iv: (*|string), key: (*|string)}} encrypted data
 */
export const encrypt = (plainText, options = {key: '', iv: ''}) => {
    const key = options?.key ?? crypto.randomBytes(32).toString('base64'); // 256-bit key
    const iv = options?.iv ?? crypto.randomBytes(16).toString('base64'); // Initialization vector

    const cipher = crypto.createCipheriv('aes-256-ctr', key, iv);

    let encrypted = Buffer.concat([iv, cipher.update(plainText, 'utf8'), cipher.final()]);
    return {iv: iv, key: key, encryptedData: encrypted.toString('base64')};
}