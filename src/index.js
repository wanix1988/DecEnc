const { AES, enc } = require('crypto-js');
const { input } = require('@inquirer/prompts');
const { select } = require('@inquirer/prompts');
const { password } = require('@inquirer/prompts');

async function main() {
    const type = await select({
        message: 'Select your choice',
        choices: [
            { name: 'Encrypt', value: 0, description: 'Encrypt your message, need message and password' },
            { name: 'Decrypt', value: 1, description: 'Decrypt the ciphertext, return plaintext, need cipher text and password' }
        ]
    })
    switch (type) {
        case 0: {
            const message = await input({ message: 'Enter your message:' });
            const passwd = await password({ message: 'Enter your password:' });

            console.log('Cipher Text: ', AES.encrypt(message, passwd).toString());
        }
            break;
        case 1: {
            const ciphertext = await input({ message: 'Enter your cipher text:' });
            const passwd = await password({ message: 'Enter your password:' });

            console.log('Plain text: ', AES.decrypt(ciphertext, passwd).toString(enc.Utf8));
        }
            break;
    }
}

main();
