
module.exports = function (options = {}) { // eslint-disable-line no-unused-vars

  return function setCurrentColor (hook) {
    hook.result.data.map((student) => {
      student.currentColor = student.evaluations[0].color; // is this mutation? OMG
    });
    return Promise.resolve(hook);
  };
};
