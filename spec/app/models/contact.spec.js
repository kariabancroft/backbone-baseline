import Contact from 'app/models/contact';

describe('Contact', function() {
  describe('#name', function() {
    it('has a name', function() {
      var contact = new Contact();
      expect(contact.name).not.toBeUndefined();
    });
  });
});
