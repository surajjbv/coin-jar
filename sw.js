// The old Coin Jar address: retire the offline cache it installed, then send open windows to the new address.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate('https://surajjbv.github.io/mobile-coin-jar/');
})()));
