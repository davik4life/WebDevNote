/*  Every method is a function, but not every function is a method.

 */



 /* Define an object called square, 
    which will hold methods that have to do with the geometry of squares. 
    It should contain two methods, <code>area</code> and <code>perimeter</code>
    area should accept the length of a side, (all sides are the same in a square) and then return the side squared.

    Perimeter should accept the length of a side, and return that side multiplied by 4. 
*/

// Long version of the same solution;

const square = {
    area: function (side) {
        return side * side;
    },
    perimeter: function(side){
        return side * 4;
    }
};

// Short version of the same solution;

const squared = {
    area (side) {
        return side * side;
    },
    perimeter(side){
        return side * 4;
    }
};

// both would work perfectly. e.g: squared.area(3)/ Output: 9.