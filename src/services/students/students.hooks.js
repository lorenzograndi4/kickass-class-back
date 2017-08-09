const { authenticate } = require('feathers-authentication').hooks;
const { restrictToOwner, associateCurrentUser, restrictToAuthenticated } = require('feathers-authentication-hooks');
const askQuestion = require('../../hooks/askQuestion');
const restrict = [
  authenticate('jwt'),
  restrictToAuthenticated(),
];

const restrictToOwners = [
  ...restrict,
  restrictToOwner({
    ownerField: 'teacherId'
  })
];

module.exports = {
  before: {
    all: [], // authenticate('jwt')
    find: [],
    get: [askQuestion()], //askQuestion()
    create: [
      ...restrict,
      associateCurrentUser({ as: 'teacherId' }),
    ],
    update: [...restrictToOwners],
    patch: [...restrictToOwners],
    remove: [...restrictToOwners]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
