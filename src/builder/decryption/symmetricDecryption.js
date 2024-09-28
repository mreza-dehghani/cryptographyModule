/**
 * decipher the encrypted data with key and iv of generated.
 * @param encryptedText
 * @param key
 * @param iv
 * @returns {string}
 */
export const decrypt = (encryptedText, key, iv) =>{
    const decipher = crypto.createDecipheriv('aes-256-ctr', key, Buffer.from(iv, 'hex'));
    const decrypted = Buffer.concat([decipher.update(Buffer.from(encryptedText, 'hex')), decipher.final()]);
    return decrypted.toString();
}
