/* Unit testing 
SPEC 1  - A function called multiplication that returns the product of two numbers
    Expect multiplication (x, y) to be a number equal to xy
    Expect multiplication (2, 3) to be 6
    Expect multiplication ("a", 3) to be an error
    Expect multiplication (3, "a") to be an error
    Expect multiplication (x) to be an error
    Expect multiplication (x,y,z) to be an error
    Expect multiplication () to be an error

SPEC 2 - A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
    Expect concatOdds ([x, y, z, ...][x, y, z, ...]) to be an array of numbers
    Expect each item in concatOdds ([x, y, z, ...][x, y, z, ...]) to be an odd number (x % 2 !== 0)
    Expect each item in concatOdds ([x, y, z, ...][x, y, z, ...]) to be greater than the item before it (ex. z > y > x)
    Expect concatOdds ([x, x, x] [x, y, z, ...]) to be [x, y, z, ...]
    Expect concatOdds(["a", x, y, ... ][x, y,z ,...]) to be an error
    Expect concatOdds([x, y, z, ... ]["a", x, y, z,...]) to be an error
    Expect concatOdds([][]) to be an error

Functional testing
SPEC 3 - A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. 
They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
    If a user has items in the cart, they should have the option to click "check out"
    If a user has no items in the cart, they should be shown a page that says "Your cart is empty!" with the option to click "go shopping", which will take you to the homepage
    
    If a user clicks "check out", they should be shown a prompt with options to "log in", "sign up", or "check out as guest"
   
    If a user clicks "log in", they should be shown an auth page to log in
        If a user is able to log in, they should be taken to the first step in the checkout process
        If a user is logged in, they should be able to access their saved items, credit carts, and addresses
        If a user is logged in, they should be able to save new credit carts and addresses
    If a user clicks "sign up", they should be shown a sign up form to gather their information
        If a user is able to sign up, they should be taken to the first step in the checkout process
        If a user is able to sign up, they should be sent a verification email
        If a user is signed up, they should be able to save new credit carts and addresses
    If a user clicks "continue as guest", they should be taken to the first step in the check out process
        If a user continues as guest, they should not be able to save credit carts or addresses
        If a user completes the checkout as a guest, they should be given an option to "save their information" by signing up
    The user should not be able to continue to the check out process without selecting "log in", "sign up", or "checkout as guest"



