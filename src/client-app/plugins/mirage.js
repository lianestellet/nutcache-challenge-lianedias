// /plugins/mirage.js

const isDevelopment = process.env.NODE_ENV === 'development'

if (isDevelopment) {
  console.log('Using mirageJS')
  require('./miragejs/server').makeServer();
}