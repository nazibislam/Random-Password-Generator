







length = (prompt("How long do you want your password? "));
num = (prompt("How many numbers do you want? "));
char = (prompt("How many special characters do you want? "));

letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '}', '~'];

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

password = [];

for ( j = 0; j < num; j++) {
  password.push(numbers[Math.floor(Math.random() * numbers.length)]);
}
for ( k = 0; k < char; k++) {
  password.push(special[Math.floor(Math.random() * special.length)]);
}

let last = length - password.length;

for ( i = 0; i < last; i++) {
  password.push(letters[Math.floor(Math.random() * letters.length)]);
}

// Shuffle the password
for ( i = password.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [password[i], password[j]] = [password[j], password[i]];
}

alert("Your generated password is: " + password.join(''));
