const { authenticate } = require('feathers-authentication').hooks;
const { restrictToOwner, associateCurrentUser, restrictToAuthenticated } = require('feathers-authentication-hooks');
const restrict = [
  authenticate('jwt'),
  restrictToAuthenticated(),
];

const askQuestion = require('../../hooks/askQuestion');
const setCurrentColor = require('../../hooks/setCurrentColor');

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
    get: [authenticate('jwt')],
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
    find: [setCurrentColor(), askQuestion()],
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
