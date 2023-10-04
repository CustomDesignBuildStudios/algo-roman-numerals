
const roman_numerals=[
  {name:"I",value:1},
  {name:"IV",value:4,isSpecial:true},
  {name:"V",value:5},
  {name:"IX",value:9,isSpecial:true},
  {name:"X",value:10},
  {name:"XL",value:40,isSpecial:true},
  {name:"L",value:50},
  {name:"C",value:100},
  {name:"CD",value:400,isSpecial:true},
  {name:"D",value:500},
  {name:"CM",value:900,isSpecial:true},
  {name:"M",value:1000}
];

function toRomanLazy(num) {
  let roman = ""
  for(let x = roman_numerals.length-1; x >= 0; x--){
    if(roman_numerals[x].isSpecial)
      continue;

    amount_divides = Math.floor(num / roman_numerals[x].value);


    if(amount_divides > 0){
      roman = roman + roman_numerals[x].name.repeat(amount_divides)
      num = num - (amount_divides * roman_numerals[x].value)
      if(num == 0) return roman;
    }
  }
  return "Error";
}

function toRoman(num) {
  let roman = ""
  for(let x = roman_numerals.length-1; x >= 0; x--){
    amount_divides = Math.floor(num / roman_numerals[x].value);


    if(amount_divides > 0){
      roman = roman + roman_numerals[x].name.repeat(amount_divides)
      num = num - (amount_divides * roman_numerals[x].value)
      if(num == 0) return roman;
    }
  }
  return "Error";
}


module.exports = { toRoman, toRomanLazy };
