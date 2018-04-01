var quotes = [
  'Admire someone else\'s beauty without questioning your own.',
  'When we deny our emotions, we become a slave to them. It\'s only when we acknowledge them that we can put them in their rightful place.',
  'So many years of education yet nobody ever taught us how to love ourselves and why it\'s important.',
  'It\'s better to love and lose than never love at all.',
  'Spend a little more time trying to make something of yourself and a little less time trying to impress people.',
  'Get piercings, remove them, make friends, move on, travel, stay in. Find what kind of person you are and love that person.',
  'Our purpose is never to get away from hard things. It\'s to find the hard things worth doing.',
  'Fill your life with adventures, not things. Have stories to tell, not stuff to show.',
  'Be strong, be weak, be whoever you want to be.',
  'You are enough.',
  'Do more things that make you forget to check your phone.',
  'Act as if it were impossible to fail.',
  'People wait all week for Friday, all year for summer, and all of life for happiness.',
  'Be the reason someone smiles today.',
  'Happiness looks good on you.',
  'The best view comes after the hardest climb.',
  'You were not born to just pay bills and die.',
  'Be who you needed when you were younger.',
  'Be a combination of all the best people you meet, not the worst.',
  'Stop being afraid of what could go wrong and start being positive about what could go right.',
  'A wolf does not lose sleep over the opinion of sheep.',
  'Be a Fruit Loop in a world of Cheerios.',
];
var quotation = document.getElementsByClassName('quote')[0];
var lengthquotation = quotes.length;
function quorepl() {
  var chancequote= quotes[Math.floor(Math.random() * lengthquotation)];
  quotation.innerHTML = chancequote;
}
quorepl();
window.onclick = quorepl;