const moment = require('moment');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    return hook.app.service('students').get(hook.id)
      .then ((student) => {
        Object.assign(
          {},
          student,
          student.evaluations = [
            {
              date: moment().format('DD MM YYYY'),
              color: hook.data.color,
              remark: hook.data.remark,
            }
          ].concat(student.evaluations)
        );
        hook.data = student;
        return Promise.resolve(hook);
      });
  };
};

// $addToSet
