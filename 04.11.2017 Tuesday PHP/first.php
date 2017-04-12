<?php
/* Comments are the same in PHP as in JavaScript.
 *
 * Note that variables start with a $. This is necessary! */

$first = 'Dave '; 
$last = 'Durkee- Daddy'; 
$name = $first . $last; 
$age  = 47;

// Automatically inserts the value of $name.
echo "My name is $name.\n"; 


// PHP offers most of the same arithmetic operation as JavaScript.
// The one difference is that it has built-in exponentiation.
$squared_age = $age ** 2;
echo "$squared_age is much older than I'll ever be.\n";

