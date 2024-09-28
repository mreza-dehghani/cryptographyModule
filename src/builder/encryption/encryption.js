export const encrypt = (plainText, options = {key: '', iv: ''}) => {
    const key = options?.key ?? crypto.randomBytes(32).toString('base64'); // 256-bit key
    const iv = options?.iv ?? crypto.randomBytes(16).toString('base64'); // Initialization vector

    const cipher = crypto.createCipheriv('aes-256-ctr', key, iv);

    let encrypted = Buffer.concat([iv, cipher.update(plainText, 'utf8'), cipher.final()]);
    return {iv: iv, key: key, encryptedData: encrypted.toString('base64')};
}