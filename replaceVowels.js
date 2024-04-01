//Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel
//replace("Hi!") === "H!!"
function replace(s) {
  const vowels = ['a', 'e', 'i', 'u', 'o', 'A', 'E', 'I', 'U', 'O']
  const newString = s.split('')

  const string = newString.map((m) => {
    if (vowels.includes(m))
      return '!'
    else {
      return m
    }
  })
  return string.join('')
}
console.log(replace("Hello!"))

/*
function replace(s){
  return s.replace(/[aeiou]/gi,"!")//g is used for a global search//i is used for case-insensitive matching
}*/