// You need to write a function that reverses the words in a given string. If this is not clear enough, here are some examples:
//
// reverse('Hello World') === 'World Hello'
// reverse('Hi There.') === 'There. Hi'
// Your solution should also work for double spaces:
//
// reverse('Hello  World') === 'World  Hello'

function reverse(string){
    return string.split(' ').reverse().join(' ');
}
