'use strict'

function selectionSort(arrays){
  for (let i = 0 ; i < arrays.length; i++){
    let j = i;
    while ((arrays[j] < arrays[j-1]) && (j >= 0) ){
      let swapTemp = arrays[j-1];
      arrays[j-1] = arrays[j];
      arrays[j] = swapTemp;
      j--
    }
  }
  return arrays

}

// Driver code
function main() {

  sort_from_file('random_wordlist.txt')
  sort_from_file('reversed_wordlist.txt')
  sort_from_file('sorted_wordlist.txt')

}

function sort_from_file(filename) {
  let fs = require('fs')

  fs.readFile(filename, (err, data) => {

    if (err)
      return console.log(err)

    let items = data.toString().split("\r\n")

    console.log(filename)
    console.log("--------")
    console.log(selectionSort(items))

  })
}

main()
