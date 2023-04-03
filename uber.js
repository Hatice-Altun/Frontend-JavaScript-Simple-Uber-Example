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
