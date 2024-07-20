const age = 22;
const nationality = 'Nepali';

if (age >= 18 && nationality === 'Nepali') {
  console.log('You are eligible to vote in nepal.');
} else {    
  console.log('You are not eligible to vote in nepal.');
}

if (age >= 18 || nationality === 'Nepali') {
  console.log('You are eligible to vote in some other country.');
} else {    
  console.log('You are not eligible to vote.');
}

if(!(age >= 18)){
    console.log('You are not eligible to vote.');
} else {    
    console.log('You are eligible to vote.');
}

