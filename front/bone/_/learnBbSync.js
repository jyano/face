/*



 bb’s Sync API
 We prevly discussed how bb supports RESTful persistence via its fetch() and create() mets on Cls and save(), and destroy() mets on Mds.
 Now we are going to takecloser look at bb’s sync met which underlies these operations.

 The bb.sync met is integral part of bb.js. It assumesjQ-like $.ajax() met, so HTTP pams are organized based on jQ’s API.
 Since some legacy servers may not support JSON-formatted requests and HTTP PUT and DELETE operations,
 bb can be configured to emulate these capabilities using two configuration vars shown below with their default vals:

 bb.emulateHTTP = false; // set to true if server cannot handle HTTP PUT or HTTP DELETE
 bb.emulateJSON = false; // set to true if server cannot handle app/json requests
 The inline bb.emulateHTTP option should be set to true if extended HTTP mets are not supported by server.
 The bb.emulateJSON option should be set to true if server does not understand MIME type for JSON.


 Lib = bb.Cl.x({ url : fn() { return '/lib'}})

 // Define atts for our md
 attrs = {
 tt  : "The Tempest",
 author : "Bill Shakespeare",
 length : 123
 };

 // Createnew Lib instance
 lib = new Lib;

 // Createnew instance ofmd within our cl
 lib.create(attrs, {wait: false});

 // Update with just emulateHTTP
 lib.first().save({id: '2-the-tempest', author: 'Tim Shakespeare'}, {
 emulateHTTP: true
 });

 // Check ajaxSettings being used for our request
 $l(this.ajaxSettings.url === '/lib/2-the-tempest'); // true
 $l(this.ajaxSettings.type === 'POST'); // true
 $l(this.ajaxSettings.contentType === 'app/json'); // true

 // Parse data for request to confirm it is as expected
 data = JSON.parse(this.ajaxSettings.data);
 $l(data.id === '2-the-tempest');  // true
 $l(data.author === 'Tim Shakespeare'); // true
 $l(data.length === 123); // true
 Similarly, we could just update using emulateJSON:

 lib.first().save({id: '2-the-tempest', author: 'Tim Shakespeare'}, {
 emulateJSON: true
 });

 $l(this.ajaxSettings.url === '/lib/2-the-tempest'); // true
 $l(this.ajaxSettings.type === 'PUT'); // true
 $l(this.ajaxSettings.contentType ==='app/x-www-form-urlencoded'); // true

 data = JSON.parse(this.ajaxSettings.data.md);
 $l(data.id === '2-the-tempest');
 $l(data.author ==='Tim Shakespeare');
 $l(data.length === 123);
 bb.sync is called every time bb tries to read, save, or delete mds. It uses jQ or Zepto’s $.ajax() impls to make these RESTful requests, however this can be overridden as per your needs.

 Overriding bb.sync

 The sync fn may be overridden globally as bb.sync, or atfiner-grained level, by addingsync fn tobb cl or to individual md.

 Since all persistence is handled by bb.sync fn, alternative persistence layer can be used by simply overriding bb.sync withfn that has same signature:

 bb.sync = fn(met, md, ops) {
 };
 The metMap below is used by standard sync impl to map met parameter to HTTP operation and illustrates type of action required by each met argument:

 metMap = {
 'create': 'POST',
 'update': 'PUT',
 'patch':  'PATCH',
 'delete': 'DELETE',
 'read':   'GET'
 };
 If we wanted to replace standard sync impl with one that simply logged calls to sync, we could do this:

 id_counter = 1;
 bb.sync = fn(met, md) {
 $l("I've been passed " + met + " with " + _.jS(md));
 if(met === 'create'){ md.set('id', id_counter++); }
 };
 Note that we assignunique id to any created mds.

 The bb.sync met is intended to be overridden to support other persistence backends.
 The built-in met is tailored tocertain breed of RESTful JSON APIs - bb was originally extracted fromRuby on Rails app, which uses HTTP mets like PUT in same way.

 The sync met is called with three pams:

 met: One of create, update, patch, delete, or read
 md: The bb md object
 ops: May include success and error mets
 Implementingnew sync met can use following pattern:

 bb.sync = fn(met, md, ops) {

 fn success(result) {
 // Handle successful results from MyAPI
 if (ops.success) {
 ops.success(result);
 }
 }

 fn error(result) {
 // Handle error results from MyAPI
 if (ops.error) {
 ops.error(result);
 }
 }

 ops || (ops = {});

 switch (met) {
 case 'create':
 return MyAPI.create(md, success, error);

 case 'update':
 return MyAPI.update(md, success, error);

 case 'patch':
 return MyAPI.patch(md, success, error);

 case 'delete':
 return MyAPI.destroy(md, success, error);

 case 'read':
 if (md.cid) {
 return MyAPI.find(md, success, error);
 } else {
 return MyAPI.findAll(md, success, error);
 }
 }
 };
 This pattern delegates API calls tonew object (MyAPI), which could bebb-style class that supports evs.
 This can be safely tested separately, and potentially used with libraries other than bb.

 There are quitefew sync impls out there. The following examples are all avail on GitHub:

 bb localStorage: persists to  bw’s local storage
 bb offline: supports working offline
 bb Redis: uses Redis key-val store
 backbone-parse: integrates bb with Parse.com
 backbone-websql: stores data to WebSQL
 bb Caching Sync: uses local storage as cache for other sync impls
 Dependencies
 The official bb.js documentation states:

 bb’s only hard dependency is either Underscore.js ( >= 1.4.3) or Lo-Dash. For RESTful persistence, history support via bb.Rt and DOM manipulation with bb.Vw, include json2.js,
 and either jQ ( >= 1.7.0) or Zepto.
 What this translates to is that if you require working with anything beyond mds, you will need to includeDOM manipulation lib
 such as jQ or Zepto. Underscore is primarily used for its utility mets (which bb relies upon heavily) and json2.js for legacy  bw JSON support if bb.sync is used.

 */