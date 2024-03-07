//SNACK 1

const zucchine = [
  { varietà: "Zucchino Nero di Milano", peso: 150, lunghezza: 20 },
  { varietà: "Zucchino Romanesco", peso: 120, lunghezza: 18 },
  { varietà: "Zucchino Siciliano", peso: 100, lunghezza: 16 },
  { varietà: "Zucchino Genovese", peso: 140, lunghezza: 22 },
  { varietà: "Zucchino Costato Fiorentino", peso: 130, lunghezza: 21 },
  { varietà: "Zucchino Bianco Triestino", peso: 110, lunghezza: 17 },
  { varietà: "Zucchino tondo di Piacenza", peso: 90, lunghezza: 15 },
  { varietà: "Zucchino lungo fiorentino", peso: 160, lunghezza: 24 },
  { varietà: "Zucchino Striato di Napoli", peso: 170, lunghezza: 25 },
  { varietà: "Zucchino Yellow", peso: 180, lunghezza: 26 }
];
pesoTotale = 0;

for (const zucchina of zucchine) {
  pesoTotale += zucchina.peso
}
console.log(pesoTotale);

//SNACK 2