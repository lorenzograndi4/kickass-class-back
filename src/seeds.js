const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

const user = {
  name: 'teacher',
  email: 'teacher@codaisseur.com',
  password: 'codaisseur1'
};

const students = [
  { name: 'Lorenzo',
    picture: './assets/1.png',
    evaluations: [
      {date: Date('2017-08-08'), color: 'yellow', remark: 'Boring' },
      {date: Date('2017-08-09'), color: 'red', remark: 'Lazy' },
      {date: Date('2017-08-10'), color: 'red', remark: 'Stupid' },
    ]
  },
  { name: 'Tobia',
    picture: './assets/2.jpeg',
    evaluations: [
      {date: Date('2017-08-08'), color: 'yellow', remark: 'Boring' },
      {date: Date('2017-08-09'), color: 'yellow', remark: 'Lazy' },
      {date: Date('2017-08-10'), color: 'green' },
    ]
  },
  { name: 'Freddy',
    picture: './assets/3.jpeg',
    evaluations: [
      {date: Date('2017-08-08'), color: 'yellow', remark: 'Boring' },
      {date: Date('2017-08-09'), color: 'green' },
      {date: Date('2017-08-10'), color: 'green' },
    ]
  },
  { name: 'Lazy Louie',
    picture: './assets/4.jpeg',
    evaluations: [
      {date: Date('2017-08-08'), color: 'red', remark: 'Boring' },
      {date: Date('2017-08-09'), color: 'yellow', remark: 'Lazy' },
      {date: Date('2017-08-10'), color: 'red', remark: 'Stupid' },
    ]
  },
  { name: 'Stubborn Student',
    picture: './assets/5.jpeg',
    evaluations: [
      {date: Date('2017-08-08'), color: 'yellow', remark: 'Boring' },
      {date: Date('2017-08-09'), color: 'yellow', remark: 'Lazy' },
      {date: Date('2017-08-10'), color: 'green', remark: 'Stupid' },
    ]
  },
  { name: 'Crazy Chris',
    picture: './assets/6.png',
    evaluations: [
      {date: Date('2017-08-08'), color: 'red', remark: 'Boring' },
      {date: Date('2017-08-09'), color: 'yellow', remark: 'Lazy' },
      {date: Date('2017-08-10'), color: 'red', remark: 'Stupid' },
    ]
  },
  { name: 'Damn Daniel',
    picture: './assets/7.png',
    evaluations: [
      {date: Date('2017-08-08'), color: 'green' },
      {date: Date('2017-08-09'), color: 'yellow', remark: 'Lazy' },
      {date: Date('2017-08-10'), color: 'red', remark: 'Stupid' },
    ]
  },
  { name: 'Silly Silvia',
    picture: './assets/8.jpeg',
    evaluations: [
      {date: Date('2017-08-08'), color: 'yellow', remark: 'Boring' },
      {date: Date('2017-08-09'), color: 'green', remark: 'Lazy' },
      {date: Date('2017-08-10'), color: 'red', remark: 'Stupid' },
    ]
  },
  { name: 'Boring Bill',
    picture: './assets/9.jpeg',
    evaluations: [
      {date: Date('2017-08-08'), color: 'yellow', remark: 'Boring' },
      {date: Date('2017-08-09'), color: 'yellow', remark: 'Lazy' },
      {date: Date('2017-08-10'), color: 'red', remark: 'Stupid' },
    ]
  }
];

const feathersClient = feathers();

feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  .configure(auth());

feathersClient.service('users').create(user)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user.email,
      password: user.password
    })
      .then(() => {
        students.map((student) => {
          feathersClient.service('students').create(student)
            .then((result) => {
              console.log('Student seeded...', result.name);
            }).catch((error) => {
              console.error('Error seeding student!', error.message);
            });
        })
      })
      .catch(function(error){
        console.error('Error authenticating!', error);
      });
  })
  .catch(function(error) {
    console.error('Error creating user!');
});
