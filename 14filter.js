// filter is a method that makes it easy to extract some data from an already exciting array into another array entirely.

// Filter is also commonly used alongside other methods like .map().

const arrayFilter = [
    {
        name: "Dele",
        class: 5,
        score: 29,
        year: 2020
    },
    {
        name: "Victor",
        class: 9,
        score: 99,
        year: 1992
    },
    {
        name: "Segun",
        class: 3,
        score: 70,
        year: 2005
    },
    {
        name: "Dayo",
        class: 2,
        score: 80,
        year: 2000
    }
];

const filterYear = arrayFilter.filter(m => m.year > 2000);
// Output= {name: "Dele", class: 5, score: 29, year: 2020}
// {name: "Segun", class: 3, score: 70, year: 2005}

// Nesting .map() method inside of a
const filterScore = arrayFilter.filter(m => m.score ).map( m => m.score);
const boolScores = arrayFilter.filter(m => m.score ).map( m => m.score > 85); // This would return a boolean