module.exports = {
  development: {
    db: {
      url: '/api',
      name: 'portfolio-dev'
    }
  },
  staging: {
    db: {
      url: 'http://...:...@server:5984',
      name: 'portfolio-paulis-staging'
    }
  },
  production: {
    db: {
      url: 'http://...:...@server:5984',
      name: 'portfolio-paulis'
    }
  }
};
