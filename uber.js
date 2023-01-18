// Stappenplan Uber
// INPUT
// - prijs per kilometer        [variabele]
// - de gereden afstand         [variabele]

// OUTPUT
// - Ritprijs in euro's         [variabele]

// 1. Variabele aanmaken
// 2. Prijskilometer * afstand
// 3. Uitkomst loggen (inclusief valuta)

// Belangrijke info const kmPrice = "3";
// KAN JE NIET OP DEZE MANIER DECLAREREN, DAN DENKT HET SYSTEEM DAT HET IN STRING IS.

// Voordat je je script kan runnen moet je, nodemon uber.js of node uber.js in je terminal invoeren.

// const kmPrice = 3;
// const distance = 15;
//
// const tripPrice = kmPrice * distance;
// console.log("Jouw rit kost € " + tripPrice + ",00");

// Let op! Je kan je resultaat bekijken in je terminal als je je code opslaat en/of in je terminal klikt.

// Stappenplan voor Uber type auto service
// 1. Variabelen: type service daarin opslaan
// 2. Prijs per kilometer die aan een type service hangt ("Uber Black", "Uber X", "Premium")
// 3. Conditional Statement / Beslissingstructuur om de service type te vergelijken om de ritprijs te bepalen.

let kmPrice = null;
const serviceType = "Uber Black";
const distance = 6;

if (serviceType === "Uber X") {
    kmPrice = 3;
} else if (serviceType === "Uber Black") {
    kmPrice = 7;
} else if (serviceType === "Premium") {
    kmPrice = 10;
} else {
    kmPrice = "Geen ServiceType herkend";
}
    console.log(kmPrice);

    const tripPrice = kmPrice * distance;
    console.log("Jouw ritprijs kost € " + tripPrice);