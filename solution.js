const users = [
  { id: 1, name: "Mari", age: 22, active: true },
  { id: 2, name: "Jüri", age: 17, active: false },
  { id: 3, name: "Kati", age: 31, active: true },
  { id: 4, name: "Martin", age: 19, active: false },
  { id: 5, name: "Laura", age: 26, active: true },
];

// 3.1. Kasutame forEach() meetodit, et käia kõik kasutajaobjektid ükshaaval läbi.
// Iga kasutaja name väärtus saadetakse console.log() abil konsooli.
users.forEach((user) => console.log(user.name));

// 3.2. filter() kontrollib iga kasutaja active väärtust ja jätab alles ainult tõesed väärtused.
// Tulemuseks on uus massiiv, mis sisaldab Mari, Kati ja Laura andmeid.
const activeUsers = users.filter((user) => user.active);
console.log("Aktiivsed kasutajad:", activeUsers);

// 3.3. filter() võrdleb iga kasutaja vanust arvuga 18 ning kontrollib, kas tingimus on täidetud.
// Massiivi jäävad kõik kasutajad, kes on vähemalt 18-aastased, seega Jüri eemaldatakse.
const adultUsers = users.filter((user) => user.age >= 18);
console.log("Vähemalt 18-aastased kasutajad:", adultUsers);

// 3.4. map() muudab iga kasutajaobjekti tema name väärtuseks.
// Selle tulemusena tekib uus massiiv, milles on ainult kasutajate nimed.
const userNames = users.map((user) => user.name);
console.log("Kasutajate nimed:", userNames);

// 3.5. find() otsib massiivist esimese kasutaja, kelle id võrdub arvuga 3.
// Leitud objekt salvestatakse muutujasse userWithIdThree ja kuvatakse konsoolis.
const userWithIdThree = users.find((user) => user.id === 3);
console.log("ID-ga 3 kasutaja:", userWithIdThree);

// 3.6. Tavaline funktsioon kontrollib, kas user.active väärtus on true.
// Funktsioon tagastab selle põhjal teksti "Aktiivne" või "Mitteaktiivne".
function getUserStatus(user) {
  return user.active ? "Aktiivne" : "Mitteaktiivne";
}

// 3.7. Arrow function kasutab template literal'it, et ühendada tekst kasutaja andmetega.
// Tagastatav lause sisaldab kasutaja nime ja vanust, näiteks "Tere, Mari! Sa oled 22 aastat vana."
const getGreeting = (user) =>
  `Tere, ${user.name}! Sa oled ${user.age} aastat vana.`;

console.log(getUserStatus(users[0]));
console.log(getGreeting(users[0]));

// 3.8. Destructuring võimaldab võtta esimese kasutaja objektist name ja age otse muutujatesse.
// Nii saame nende väärtustega töötada ilma users[0].name ja users[0].age eraldi kirjutamata.
const { name, age } = users[0];
console.log("Destructuring:", name, age);

// 3.9. Loome Karli andmetega uue kasutajaobjekti.
// Spread-süntaks kopeerib olemasolevad kasutajad uude massiivi ja lisab Karli, jättes users massiivi muutmata.
const newUser = { id: 6, name: "Karl", age: 24, active: true };
const usersWithKarl = [...users, newUser];
console.log("Kasutajad koos Karliga:", usersWithKarl);

// 3.10. Spread-süntaksiga loodud koopia saab aadressi, mille city väärtus on Tallinn.
// Optional chaining lubab aadressi turvaliselt lugeda ning nullish coalescing annab puuduva linna korral vaikeväärtuse.
const userWithAddress = { ...users[0], address: { city: "Tallinn" } };
const userWithoutAddress = users[1];
console.log("Linn:", userWithAddress.address?.city);
console.log("Puuduv linn:", userWithoutAddress.address?.city ?? "Linn puudub");

// 3.11. Käime forEach() abil kõik kasutajad läbi ja kasutame igaühe staatuse leidmiseks getUserStatus() funktsiooni.
// Template literal ühendab kasutaja nime ja staatuse kujule "Mari – Aktiivne".
users.forEach((user) => {
  console.log(`${user.name} – ${getUserStatus(user)}`);
});

// 3.12. Loome users massiivist spread-süntaksi abil koopia, et algset massiivi mitte muuta.
// sort() võrdleb kasutajate vanuseid ja järjestab koopia noorimast kasutajast vanimani.
const usersSortedByAge = [...users].sort((firstUser, secondUser) =>
  firstUser.age - secondUser.age,
);
console.log("Vanuse järgi sorteeritud:", usersSortedByAge);