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
$ cp config-example.js config.js
```

``` javascript
// config.js
module.exports = {
  title: 'Site title',
  admin: '<admin_role_name>',
  deploy: {
    url: 'http://name:password@server.com:5984',
    name: '<couchdb_database_name>'
  }
};
```

## Run locally

```
$ ember s
$ open http://127.0.0.1:5984
```

## Insert design documents

Right now there is no automatic database setup. Sorry about that.

Open the site, open javascript console and run:

``` javascript
// login
store.get('session').setProperties({ name: 'admin', password: 'your couchdb _admin password' });
store.get('session').save();
```

``` javascript
// insert design documents
db.insertDesignDocuments();
```

## Deploy

``` plain
$ npm run deploy
```

Add CouchDB vhost:

``` plain
vhosts -> www.site.com -> /<database_name>/_design/portfolio/_rewrite
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
