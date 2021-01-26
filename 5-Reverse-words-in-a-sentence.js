var sentence = "Hello World!"

let text_arr = sentence.split(' ')

let rev_sentence = text_arr.map(text => {
  return text.split('').reverse().join('')
}).join(' ')

console.log(rev_sentence)