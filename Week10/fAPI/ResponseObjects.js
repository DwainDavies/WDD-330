const myBody = new Blob();

addEventListener('fetch', function(event) {
    // ServiceWorker intercepting a fetch
    event.respondWith(
        new Response(myBody, {
            headers: { 'Content-Type': 'text/plain' }
        })
    );
});