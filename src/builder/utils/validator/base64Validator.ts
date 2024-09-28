/**
 * check whether incoming base64 is valid or not
 * @param input
 * @returns {boolean}
 */
export const isValidBase64 = (input: string): boolean => {
    try{
        /**
         * base64 regular expression template
         * @type {RegExp}
         */
        const base64regex: RegExp = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

        const firstMethodResult = base64regex.test(input);
        const secondMethodResult = atob(input);
        return !!(firstMethodResult && secondMethodResult);
    } catch(e) {
        return false;
    }
}