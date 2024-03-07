//SNACK 1

const zucchine = [
  { varietà: "Zucchino Nero di Milano", peso: 150, lunghezza: 20 },
  { varietà: "Zucchino Romanesco", peso: 120, lunghezza: 18 },
  { varietà: "Zucchino Siciliano", peso: 100, lunghezza: 16 },
  { varietà: "Zucchino Genovese", peso: 140, lunghezza: 5 },
  { varietà: "Zucchino Costato Fiorentino", peso: 130, lunghezza: 21 },
  { varietà: "Zucchino Bianco Triestino", peso: 110, lunghezza: 12 },
  { varietà: "Zucchino tondo di Piacenza", peso: 90, lunghezza: 14 },
  { varietà: "Zucchino lungo fiorentino", peso: 160, lunghezza: 24 },
  { varietà: "Zucchino Striato di Napoli", peso: 170, lunghezza: 25 },
  { varietà: "Zucchino Yellow", peso: 180, lunghezza: 26 }
];
let pesoTotale = 0;

for (const zucchina of zucchine){
  pesoTotale += zucchina.peso;
};
console.log(pesoTotale);

//SNACK 2
const zucchineCorte = [];
const zucchineLunghe = [];

for(const zucchina of zucchine){
  if(zucchina.lunghezza < 15){
    zucchineCorte.push(zucchina);
  }else{
    zucchineLunghe.push(zucchina);
  }
};

console.log(zucchineCorte);
console.log(zucchineLunghe);


// SNACK 3
const parola = 'GiovanniGiorgio';
console.log(reverseWord(parola));

function reverseWord(parola) {
return parola.split('').reverse().join('');
  
}