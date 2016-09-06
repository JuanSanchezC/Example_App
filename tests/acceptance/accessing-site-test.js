import { test } from 'qunit';
import moduleForAcceptance from 'example-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | accessing site');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
