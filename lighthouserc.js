module.exports = {
  ci: {
    collect: {
      url: [
        'http://127.0.0.1:4173/',
        'http://127.0.0.1:4173/#menu',
        'http://127.0.0.1:4173/#deals',
        'http://127.0.0.1:4173/#rewards',
        'http://127.0.0.1:4173/#locator'
      ],
      numberOfRuns: 3
    },
    assert: {
      preset: 'lighthouse:recommended'
    },
    upload: {
      target: 'filesystem',
      outputDir: './.lighthouseci'
    }
  }
};
