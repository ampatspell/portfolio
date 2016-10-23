# Photography portfolio

* Ember.js
* ember-cli-sofa
* CouchDB 1.6 or 2.0

Deployed as a couchapp.

**WARNING: Do not run in production. Database lacks `validate_doc_updates` for now, coming soon**

## Screenshots

![Gallery](/doc/1.png)

![Gallery](/doc/2.png)

![Gallery](/doc/3.png)

## Install

``` plain
$ git clone https://github.com/ampatspell/portfolio.git
$ cd portfolio
$ npm install; bower install
$ cp sites/base-example.js sites/base.js
```

``` javascript
// sites/base.js
module.exports = {
  url: 'http://remote:couchdb@server.url:5984'
};
```

## Run locally

This will run default site configuration.

```
$ ember s
$ open http://127.0.0.1:5984
```

## Setup database

Open http://127.0.0.1:5984/_setup, login as a CouchDB admin. This will create database if missing and insert all necessary design documents.

## Customize site

```
$ cp sites/default.js sites/yoursite.js
```

``` javascript
// sites/yoursite.js
module.exports = Object.assign({
  title:    'Yoursite',
  theme:    'yoursite',
  admin:    'portfolio-yoursite-admin',
  database: 'portfolio-yoursite'
}, require('./base'));
```

```
$ cp -r app/styles/default app/styles/yoursite
```

## Deploy

``` plain
$ SITE=yoursite ember deploy production
```

Add CouchDB vhost:

``` plain
vhosts -> www.yoursite.com -> /<database_name>/_design/portfolio/_rewrite
```

Add nginx host configuration:

``` plain
server {
  server_name www.site.com;
  client_max_body_size 30M;

  location / {
    proxy_pass http://localhost:5984;
    proxy_redirect off;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }

}
```
