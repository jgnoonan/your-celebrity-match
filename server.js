#! /usr/bin/env node
'use strict';

// Deployment tracking
require("metrics-tracker-client").track();

var server = require('./app');
var port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

server.listen(port, function () {
  console.log('Server running on port: %d', port);
});

