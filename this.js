// The 'this' keyword is often used alongside methods. It is used to reference or access other properties on the same Objects.

const cat = {
    name: 'Victor',
    breed: 'Austrailian',
    add(){
        console.log(`${cat.name} is a of ${this.breed} Breed!`);
}
};
// cat.add()
// OUTPUT: Victor is a of Austrailian Breed!

//cat.breed
// "Austrailian"