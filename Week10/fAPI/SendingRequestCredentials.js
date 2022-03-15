fetch('https://example.com', {
    credentials: 'include'
});

// The calling script is on the origin 'https://example.com'

fetch('https://example.com', {
    credentials: 'same-origin'
});

fetch('https://example.com', {
    credentials: 'omit'
})