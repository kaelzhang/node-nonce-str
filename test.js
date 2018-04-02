import test from 'ava'
import nonce, {CHARS} from '.'

test('nonce', t => {
  const n = nonce(32)

  t.is(n.length, 32, 'length')

  let i = 0
  while (i < n.length) {
    const c = n[i ++]
    t.is(!! ~ CHARS.indexOf(c), true)
  }
})
