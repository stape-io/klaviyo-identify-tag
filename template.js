const createQueue = require('createQueue');

const _learnqPush = createQueue('_learnq');

_learnqPush(['identify', {
  "$exchange_id": data.exchangeId,
  "email": data.email,
  "first_name": data.firstName,
  "last_name": data.lastName
}]);

data.gtmOnSuccess();
