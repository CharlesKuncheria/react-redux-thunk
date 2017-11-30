self.addEventListener('fetch', function(event) { 
    console.log(event.request);
    if(event.request.url.endsWith('foo')) {
        event.respondWith(new Response('bar'));
    }
})