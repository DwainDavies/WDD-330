const content = 'Hello World';
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append('Content-Length', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');

//The contents can be queried and retrieved:

console.log(myHeaders.has('Content-Type')); // true
console.log(myHeaders.has('Set-Cookie')); // false
myHeaders.set('Content-Type', 'text/html');
myHeaders.append('X-Custom-Header', 'AnotherValue');

console.log(myHeaders.get('Content-Length')); // 11
console.log(myHeaders.get('X-Custom-Header')); // ['ProcessThisImmediately', 'AnotherValue']

myHeaders.delete('X-Custom-Header');
console.log(myHeaders.get('X-Custom-Header')); // null


//Check for type error.
const myResponse = Response.error();
try {
    myResponse.headers.set('Origin', 'http://mybank.com');
} catch (e) {
    console.log('Cannot pretend to be a bank!');
}

//Check whether the content type is correct before you process it further.

fetch(myRequest)
    .then(response => {
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new TypeError("Oops, we haven't got JSON!");
        }
        return response.json();
    })
    .then(data => {
        /* process your data further */
    })
    .catch(error => console.error(error));