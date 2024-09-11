import {buildSHA1Hash, buildSHA256Hash, buildSHA384Hash, buildSHA512Hash} from "./src/builder/hash/SHAGenerator.js";

console.log(buildSHA1Hash('hello world'));
console.log(buildSHA512Hash('hello world!'));
console.log(buildSHA384Hash('hello world!'));
console.log(buildSHA256Hash('hello world!'));

