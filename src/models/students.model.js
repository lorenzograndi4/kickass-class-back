// students-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const evaluationSchema = new Schema({
    studentId: { type: Schema.Types.ObjectId, ref: 'students' },
    date: { type: Date, default: Date.now },
    color: { type: String, required: false, default: 'green' },
    remark: { type: String, required: false, default: null }
  });

  const students = new Schema({
    name: { type: String, required: true },
    picture: { type: String },
    evaluations: [evaluationSchema],
    currentColor: { type: String, required: true, default: 'green' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('students', students);
};
