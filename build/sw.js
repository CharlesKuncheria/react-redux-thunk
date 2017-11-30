self.addEventListener('fetch', function(event) { 
    event.respondWith(fetch(event.request).then(function(response) { 
        if(response.status == 404) {
            return new Response("oh! your page not found :(")
        }
        return response;
    }).catch(function() {
        // say offline
        return new Response("No way!")
    })
);
})