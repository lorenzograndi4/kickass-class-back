'use strict';

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars

  return function askQuestion (hook) {
    debugger;
    // const currentUser = hook.params.user;
    //
    // hook.data.title = `${currentUser.name}'s game`;
    // hook.data.ownerId = currentUser._id; // assign the owner of the game
    // hook.data.players = [{
    //   userId: currentUser._id
    // }]; // add the owner to the players, as the first player in the game
    // // Hooks can either return nothing or a promise
    // // that resolves with the `hook` object for asynchronous operations
    //
    // var students = [
    //   { name: 'Lorenzo', currentColor: 'green' },
    //   { name: 'Tobia', currentColor: 'green' },
    //   { name: 'Freddy', currentColor: 'green' },
    //   { name: 'Lazy Louie', currentColor: 'yellow' },
    //   { name: 'Stubborn Student', currentColor: 'yellow' },
    //   { name: 'Crazy Chris', currentColor: 'yellow' },
    //   { name: 'Damn Daniel', currentColor: 'red' },
    //   { name: 'Silly Silvia', currentColor: 'red' },
    //   { name: 'Boring Bill', currentColor: 'red' }
    // ];
    //
    // const greenStudents = students.filter((student) => {
    //   return student.currentColor === 'green';
    // });
    //
    // const yellowStudents = students.filter((student) => {
    //   return student.currentColor === 'yellow';
    // });
    //
    // const redStudents = students.filter((student) => {
    //   return student.currentColor === 'red';
    // });
    //
    // // console.log('The green students are ' + greenStudents.map((s) => { return s.name; }).join(', '));
    //
    // function pickStudentFromGroup(array) {
    //   return array[Math.floor(Math.random() * array.length)];
    // }
    //
    // function pickStudent () {
    //   var number = Math.floor(Math.random() * 100 + 1);
    //   // console.log('N is ' + number);
    //
    //   switch (true) {
    //   case (number < 51) :
    //     return pickStudentFromGroup(redStudents).name;
    //   case (number < 84) :
    //     return pickStudentFromGroup(yellowStudents).name;
    //   case (number > 83) :
    //     return pickStudentFromGroup(greenStudents).name;
    //   default :
    //     return 'Oh boy something went wrong';
    //   }
    // }
    //
    // console.log('You can ask a question to ' + pickStudent());

    hook.data._id = '598994f9af90da0bab4a99b1';

    return Promise.resolve(hook);
  };
};
