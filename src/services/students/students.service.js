// Initializes the `students` service on path `/students`
const createService = require('feathers-mongoose');
const createModel = require('../../models/students.model');
const hooks = require('./students.hooks');
const filters = require('./students.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'students',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/students', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('students');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
