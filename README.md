# cryptographyModule

## Overview

This repository provides a set of cryptographic tools and utilities implemented in Node.js. The project offers support for hashing, encryption, decryption, RSA key generation, signing, and verifying signatures. It is designed to simplify the process of implementing secure cryptographic functionalities in your applications.

## Features

- **Hashing**: Create secure hashes using various algorithms such as SHA-1 SHA-384 SHA-256 and SHA-512.
- **Encryption/Decryption**: Symmetric encryption using AES algorithms.
- **RSA Key Generation**: Generate public/private key pairs for RSA encryption.
- **Digital Signing**: Sign data using private keys.
- **Signature Verification**: Verify the authenticity of signed data using public keys.

## Installation

Clone the repository and install dependencies:


## USAGE
### Hashing

### Hashing

Create a secure hash using SHA-256:

```javascript
// Example data
const data = "Hello World";
const hash = hashData(HASHING_ALGORITHM.SHA256, data);
console.log(`Hash: ${hash}`);
```