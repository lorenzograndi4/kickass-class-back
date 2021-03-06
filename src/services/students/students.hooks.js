const { authenticate } = require('feathers-authentication').hooks;
const { associateCurrentUser, restrictToAuthenticated } = require('feathers-authentication-hooks');
const restrict = [
  authenticate('jwt'),
  restrictToAuthenticated(),
];

const askQuestion = require('../../hooks/askQuestion');
const setCurrentColor = require('../../hooks/setCurrentColor');
const addEvaluation = require('../../hooks/addEvaluation');

// Maybe later
// const restrictToOwners = [
//   ...restrict,
//   restrictToOwner({
//     ownerField: 'teacherId'
//   })
// ];

module.exports = {
  before: {
    all: [], // authenticate('jwt')
    find: [],
    get: [authenticate('jwt')],
    create: [
      ...restrict,
      associateCurrentUser({ as: 'teacherId' }),
    ],
    update: [...restrict],
    patch: [...restrict, addEvaluation()],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [],
    find: [setCurrentColor()],
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
