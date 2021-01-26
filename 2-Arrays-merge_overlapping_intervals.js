/*
IN: 
[[1, 3], [2, 4], 59, 63, 0, 88, 0]

OUT: 
[0, 0, 0, 1, 10, 20, 59, 63, 88]
*/

function Pair(first, second) {
  return {
    first,
    second
  }
}

const input = [Pair(1, 5), Pair(3, 1), Pair(4, 6),
  Pair(6, 8), Pair(10, 12), Pair(11, 15)
]


function MergeIntervals(input) {
  var result = []
  result.push(input[0])

  for (let i = 1; i < input.length; i++) {
    const pair = input[i];

    let cur_result = result[result.length - 1]

    if (cur_result.second >= pair.first) {
      cur_result.second = Math.max(cur_result.second, pair.second)
    } else {
      result.push(pair)
    }
  }
  return result
}

const output = MergeIntervals(input)

console.log(output)