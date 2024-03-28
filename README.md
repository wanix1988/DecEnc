# 加密和解密文本

## Usage

```
PS > node .\index.js
? Select your choice Encrypt
type:  0
? Enter your message: hello
? Enter your password:
Cipher Text:  U2FsdGVkX18nVD7JXQAQzVl0V95TqBl9y4fP7F5hV4c=
PS > node .\index.js
? Select your choice Decrypt
type:  1
? Enter your cipher text: U2FsdGVkX18nVD7JXQAQzVl0V95TqBl9y4fP7F5hV4c=
? Enter your password:
Plain text:  hello
```

## libraries

- [crypto-js](https://www.npmjs.com/package/crypto-js)
- [inquirer](https://github.com/SBoudrias/Inquirer.js)
