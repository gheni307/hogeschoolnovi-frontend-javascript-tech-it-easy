// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

//Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
const nameOfTvType = inventory.map((tvType) => {
  return 'tv-type: ' + tvType.type;
});
console.log(nameOfTvType);

//Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
const tvOfSold = inventory.filter(soldTv => soldTv.sold === soldTv.originalStock);
console.log(tvOfSold);

//Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
const tvOfAmbiLight = inventory.filter((ambiLight) => {
  return ambiLight.options.ambiLight === true;
});
console.log(tvOfAmbiLight);

//Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
const sortPrice = inventory.sort((a,b) => {
  return a.price - b.price;
});
console.log(sortPrice);

// Opdracht 2 - Elementen in de DOM plaatsen

// Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

const priceTotal = function (){
  let total = 0;
  for (let i = 0; i < inventory.length; i++) {
    total += inventory[i].price;
  }
  return total;
}
console.log(priceTotal());

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
const totalPrice = document.getElementById('total price');
const textOfTotalPrice = document.getElementById('test of total price');
totalPrice.onclick = function (){
  let priceOfTotal = 0;
  for (let i = 0; i < inventory.length; i++) {
    priceOfTotal = priceOfTotal + inventory[i].price;
  }
  textOfTotalPrice.innerHTML = `total price of sold uit is ${priceOfTotal}.`;
}

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
const ingekochtTV = function (){
  let totalIngekochtTV = 0;
  for (let i = 0; i < inventory.length; i++) {
    totalIngekochtTV = totalIngekochtTV + inventory[i].originalStock;
  }
  return totalIngekochtTV;
}
console.log(ingekochtTV());

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
const numberOfPurchased = document.getElementById('number of tv');
const textOfNumberOfPurchased = document.getElementById('text of number of purchase of tv')
numberOfPurchased.onclick = function (){
  textOfNumberOfPurchased.innerHTML = `total purchased tv is ${ingekochtTV()}`;
}

// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
const stillToBeSold = document.getElementById('still to be sold');
const textOfStillToBeSold = document.getElementById('text of still to be sold');
const soldOfTotal = function (){
  let totalSold = 0;
  for (let i = 0; i < inventory.length; i++) {
    totalSold = totalSold + inventory[i].sold;
  }
  return totalSold;
}
console.log(soldOfTotal());
stillToBeSold.onclick = function (){
  const totalStillToSold = ingekochtTV() - soldOfTotal();
  textOfStillToBeSold.innerHTML = `total of still to be sold is ${totalStillToSold}.`;
}

// Opdracht 3 - Array methoden en functies

/*
* Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.)
* in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als
* we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.
*
* Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht.
* Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken.
* Tip: vergeet deze functie -declaratie niet aan te roepen!
* */
const alOfTVs = document.getElementById('al of tvs');
let writeBrandOfTv = document.getElementById('write brand of tv');
const numberOfAlTv = inventory.map((brandOfTv) => {
  return brandOfTv.brand;
});
alOfTVs.onclick = function (){
    writeBrandOfTv.innerHTML = `<p>${numberOfAlTv}<p>`
}

// Opdracht 4 -Functies

const infoList = document.getElementById('inf-list');
const infoListSpen = document.getElementById('info-list-text');
infoList.onclick = function (){
  for (let i = 0; i < inventory.length; i++) {
    let inch = 0;
    let info = 0;
    info = `<p>${inventory[i].brand} ${inventory[i].type} ${inventory[i].name}</p><p>€${inventory[i].price},-<p/>`
      for (let j = 0; j < inventory[i].availableSizes.length; j++) {
        (function () {
          inch += `<span>${inventory[i].availableSizes[j]} inch (${Math.floor(inventory[i].availableSizes[j] * 2.56)} cm) | </span>`
        })();
      }
      infoListSpen.innerHTML += `${info}${inch}<p>#########<p/>`;
  }
}

