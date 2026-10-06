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
      assertions: {
        'categories:performance': ['error', { minScore: 0.80 }],
        'categories:accessibility': ['error', { minScore: 0.90 }],
        'categories:best-practices': ['error', { minScore: 0.90 }],
        'categories:seo': ['error', { minScore: 0.90 }],
        'document-latency-insight': 'off',
        'unused-javascript': 'off',
        'uses-text-compression': 'off',
        'robots-txt': 'off'
      }
    },
    upload: {
      target: 'filesystem',
      outputDir: './.lighthouseci'
    }
  }
};
