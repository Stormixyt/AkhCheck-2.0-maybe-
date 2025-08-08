
import nacl from 'tweetnacl'
import { encodeUTF8, decodeUTF8, encodeBase64, decodeBase64 } from 'tweetnacl-util'

// Generate a keypair (client-side)
export function generateKeyPair() {
  const kp = nacl.box.keyPair()
  return {
    publicKey: encodeBase64(kp.publicKey),
    secretKey: encodeBase64(kp.secretKey)
  }
}

// Encrypt message (sender secretKey must be base64)
export function encryptMessage(message: string, recipientPublicKeyBase64: string, senderSecretKeyBase64: string) {
  const recipientPublicKey = decodeBase64(recipientPublicKeyBase64)
  const senderSecretKey = decodeBase64(senderSecretKeyBase64)
  const nonce = nacl.randomBytes(nacl.box.nonceLength)
  const cipher = nacl.box(decodeUTF8(message), nonce, recipientPublicKey, senderSecretKey)
  return {
    ciphertext: encodeBase64(cipher),
    nonce: encodeBase64(nonce)
  }
}

// Decrypt message
export function decryptMessage(ciphertextBase64: string, nonceBase64: string, senderPublicKeyBase64: string, recipientSecretKeyBase64: string) {
  const cipher = decodeBase64(ciphertextBase64)
  const nonce = decodeBase64(nonceBase64)
  const senderPublicKey = decodeBase64(senderPublicKeyBase64)
  const recipientSecretKey = decodeBase64(recipientSecretKeyBase64)
  const msg = nacl.box.open(cipher, nonce, senderPublicKey, recipientSecretKey)
  if (!msg) return null
  return encodeUTF8(msg)
}
