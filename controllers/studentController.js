import StudentModel from '../models/student.js';

class studentController {
  static createDoc = async (req, res) => {
    // console.log(req.body);
    try {
      const { name, age, fees } = req.body;
      const doc = new StudentModel({
        name,
        age,
        fees,
      });
      const result = doc.save();
      console.log(result);
      res.redirect('/student');
    } catch (error) {
      console.log(error);
    }
  };

  static getAllDoc = async (req, res) => {
    try {
      const result = await StudentModel.find();
      // console.log(result);
      res.render('index', { data: result });
    } catch (error) {
      console.log(error);
    }
    // res.render('index');
  };

  static editDoc = async (req, res) => {
    try {
      // console.log(req.params.id);
      const result = await StudentModel.findById(req.params.id);
      // console.log(result);
      res.render('edit', { data: result });
    } catch (error) {
      console.log(error);
    }
  };

  static updateDocById = async (req, res) => {
    try {
      const result = await StudentModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.redirect('/student');
    } catch (error) {
      console.log(error);
    }
  };

  static deleteDocById = async (req, res) => {
    try {
      const result = await StudentModel.findByIdAndDelete(req.params.id);
      // console.log(result);
      res.redirect('/student');
    } catch (error) {
      console.log(error);
    }
  };
}
export default studentController;
