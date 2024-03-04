
/*Esercizio 1*/

/*Crea una classe User per la creazione di oggetti di tipo “utente”. */
class User {
    constructor(_firstName, _lastName, _age, _location) {   /*Il suo costruttore dovrà inizializzare ogni oggetto utente con i seguenti attributi: - firstName - lastName - age - location*/
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }

    /*Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona.*/
    confrontoAge(user2) {
        if (this.age > user2.age) {
            return `${this.firstName} è più vecchio di ${user2.firstName}`;
        } else if (this.age < user2.age) {
            return `${this.firstName} è più giovane di ${user2.firstName}`;
        } else {
            return `${this.firstName} ha la stessa età di ${user2.firstName}`;
        }
    }
}

/*Ad esempio, date due istanze della classe utente “x” e “y” inizializzate con le proprietà sopra descritte,*/

const user1 = new User("X", 56, "New York");
const user2 = new User("Y", 34, "Los Angeles");

/*il metodo dovrà restituire una frase simile a “x è più vecchio di y” a seconda del risultato del confronto.*/

const comparisonResult = user1.confrontoAge(user2);
console.log(comparisonResult);

/*verifica che la comparazione tra le età funzioni correttamente.*/




/*Esercizio 2*/




/*Crea un form per la creazione di oggetti “Pet” (animali domestici).*/
class Pet {
    constructor(_petName, _ownerName, _species, _breed) {     /*proprietà: - petName - ownerName - species - breed */
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }

    sameOwners(Pet2) { /*restituisce true se due animali condividono lo stesso padrone.*/

        return this.ownerName === Pet2.ownerName;
    }
}




const petList = [];

/*Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante. */
function addPet() {
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;
    const newPet = new Pet(petName, ownerName, species, breed);
    petList.push(newPet);
    displayPetList();
    clearForm();
}

function displayPetList() {
    const petListElement = document.getElementById("petList");
    petListElement.innerHTML = "";
    petList.forEach(pet => {
        const listItem = document.createElement("li");
        listItem.textContent = `Nome Cane: ${pet.petName}, Nome Padrone/a: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
        petListElement.appendChild(listItem);
    });
}

function clearForm() {
    document.getElementById("petForm").reset();
}

