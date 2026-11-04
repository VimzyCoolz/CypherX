// Trick the bot into thinking it's running on Windows or Mac instead of Linux
Object.defineProperty(process, 'platform', {
  value: 'win32',
  configurable: true
});

// Now launch the actual obfuscated entry file
require('./index.js');
