import crypto from 'crypto'


export const encryptSeed = ({seed, password}) => {
  //console.log(seed,password)
  const json = {status: true, seed}
  const cipher = crypto.createCipher('aes192', password)
  return cipher.update(JSON.stringify(json), 'utf8', 'hex') +
    cipher.final('hex')
}

export const decryptSeed = ({hash, password}) => {
  //console.log(hash)
  //console.log(password)
  try {
    const decipher = crypto.createDecipher('aes192', password)
    const decrypted = decipher.update(hash, 'hex', 'utf8') +
      decipher.final('utf8')
    const parse = JSON.parse(decrypted)
    return parse.status ? parse.seed : false
  } catch (e) {
    console.log(e)
    return false
  }
}


