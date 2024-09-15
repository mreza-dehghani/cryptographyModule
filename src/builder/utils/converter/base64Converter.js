export const base64Encode = (string) => {
    return Buffer.from(string).toString('base64');
}

export const base64Decode = (base64) => {
    return Buffer.from(base64, 'base64').toString('ascii');
}