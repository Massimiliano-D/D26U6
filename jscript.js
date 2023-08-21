console.log("ESERCIZIO 1");
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAgeWith(otherUser) {
    if (this.age === otherUser.age) {
      return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
    } else if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    }
  }
}

const user1 = new User("Gigi", "Proietti", 83, "Roma");
const user2 = new User("Giovanni", "Storti", 66, "Milano");
const user3 = new User("Aldo", "Baglio", 64, "Milano");

const ageComparison1 = user1.compareAgeWith(user2);
const ageComparison2 = user1.compareAgeWith(user3);
const ageComparison3 = user2.compareAgeWith(user1);
const ageComparison4 = user2.compareAgeWith(user3);
const ageComparison5 = user3.compareAgeWith(user1);
const ageComparison6 = user3.compareAgeWith(user2);
console.log(ageComparison1);
console.log(ageComparison2);
console.log(ageComparison3);
console.log(ageComparison4);
console.log(ageComparison5);
console.log(ageComparison6);

console.log("ESERCIZIO 2");

const pets = [];

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  haveSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const createForm = document.querySelector("#petForm");
createForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let petName = document.querySelector("#petName").value;
  let ownerName = document.querySelector("#petOwner").value;
  let species = document.querySelector("#petSpecies").value;
  let breed = document.querySelector("#petBreed").value;
  let pet = new Pet(petName, ownerName, species, breed);
  pets.push(pet);

  const petListElement = document.querySelector("#petList");
  const newPetListItem = document.createElement("li");
  newPetListItem.classList.add("list-group-item");
  newPetListItem.textContent = `Pet Name: ${pet.petName}, Owner Name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
  petListElement.appendChild(newPetListItem);

  for (let i = 0; i < pets.length - 1; i++) {
    const otherPet = pets[i];
    if (pet.haveSameOwner(otherPet)) {
      alert(`Warning: ${pet.petName} and ${pet.petName} have the same owner!`);
    }
  }

  createForm.reset();
});
