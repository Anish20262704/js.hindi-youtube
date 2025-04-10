// Immediately Invoked Function Expressions (IIFE) => matlab jaise  apne function likha usko immeduately aapko invoked karwana h

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')