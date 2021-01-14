/*  Map is a way of getting some portion of data into an array.
    is is similar to forEach because it accepts a callback function and it runs that function once per element in an array.
    It generates a new array using the result or return of the new array.
 */

 const arri = [
    {
        name: "Dele",
        class: 5,
        score: 29
    },
    {
        name: "Victor",
        class: 9,
        score: 99
    },
    {
        name: "Segun",
        class: 3,
        score: 70
    },
    {
        name: "Dayo",
        class: 2,
        score: 80
    }
];

const mapItems = arri.map(function(i){
    return i.name.toUpperCase();
});

// Output will print out all the names in the arri array and put them into a new array. when mapItems is called.

// ["Dele", "Victor", "Segun", "Dayo"]

// Another Exercise

/*  It's time to get practice with the map method! Define a function called <code>cleanNames</code>.
    It should accept an array of strings, which may contain additional space characters at the beginning and end. 
    The function should use the array map method to return a new array, full of trimmed names.  For example:

    cleanNames(["   Victor", "Adeogo   "])
    Output: ["Victor", "Adeogo"].
*/

// Solution

function cleanNames(arr){
    return arr.map(function(trimmed){
        return trimmed.trim();
    });
}