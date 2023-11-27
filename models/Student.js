import mongoose from 'mongoose';

const studentsSchema = new mongoose.Schema({
  name: { type: String, require: true, trim: true },
  age: { type: Number, require: true, min: 18, max: 60 },
  fees: {
    type: mongoose.Decimal128,
    require: true,
    validate: (v) => v >= 5000.5,
  },
});

const StudentModel = mongoose.model('student', studentsSchema);

export default StudentModel;
