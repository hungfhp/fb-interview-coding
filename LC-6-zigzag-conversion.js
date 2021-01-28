/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
//  1 4 7
//  1 7 13 <- 1
//  2 8 14 <- 2


var convert = function (s, numRows) {
  const block = numRows * 2 - 2
  const num_blocks = Math.floor(s.length / block)
  const block_cols = num_blocks * (numRows - 1)
  const left_str = Math.floor(s.length % block)
  const left_cols = left_str > numRows ? left_str - numRows + 1 : 1

  const numCols = block_cols + left_cols

  let step = numRows - 1
  let res = ''

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (col % step === 0) {
        let index = (col/step) * block + row 
        if (index < s.length) {
          p(s[index])
        }
      } else {
        if ((row + col) % step === 0) {
          let index = Math.floor(col/step) * block + numRows + (col % step) - 1
          // console.log(index)
          p(s[index] + index)
        } else {
          p(' ')
        }
      }
    
    }
    p('\n')

  }
};

function p(content) {
  process.stdout.write(content)
}

convert("ABCDEFGHIJKL", 3)

puqidstpelzjwptlnyxhcbrundefinedozzawncgajfgkcwdzsebeqduymlszukamdundefinedlkpiaxgivqbhgzfcljux
puqidstpelzjwptlnyxhcbriozzawncgajfgkcwdzsebeqduymlszukamdclkpiaxgivqbhgzfcljux