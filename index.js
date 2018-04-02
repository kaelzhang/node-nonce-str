const C = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

function nonce (length = 32, chars = C) {
  const max = chars.length
  let nonce = ''

  for (let i = 0; i < length; i ++) {
    nonce += chars.charAt(Math.floor(Math.random() * max))
  }

  return nonce
}

nonce.CHARS = C

module.exports = nonce
