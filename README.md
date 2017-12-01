# react-redux-thunk
Get items from cache if it exists.

Your first achievement in offline first scenario.

Note: When these static files are cached, inorder to update them, we have to update the service worker. Once the new service worker is getting installed, the new static ones are picked up and cached.

It is good to create a new cache, and use the activate event if new service worker to remove the old caches using caches.delete(cacheName);