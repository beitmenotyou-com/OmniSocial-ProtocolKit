const openpgp = require("openpgp");

async function encryptMessage(message, publicKeyArmored) {
  const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });
  const encrypted = await openpgp.encrypt({
    message: await openpgp.createMessage({ text: message }),
    encryptionKeys: publicKey
  });
  return encrypted;
}

async function decryptMessage(encrypted, privateKeyArmored, passphrase) {
  const privateKey = await openpgp.decryptKey({
    privateKey: await openpgp.readPrivateKey({ armoredKey: privateKeyArmored }),
    passphrase
  });

  const message = await openpgp.readMessage({ armoredMessage: encrypted });
  const { data: decrypted } = await openpgp.decrypt({
    message,
    decryptionKeys: privateKey
  });
  return decrypted;
}

module.exports = { encryptMessage, decryptMessage };
