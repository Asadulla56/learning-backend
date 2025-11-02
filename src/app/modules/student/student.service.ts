import { Student } from './student.model';
import { IStudent } from './student.interface';

// CREATE 
const createStudentServices = async (payload: IStudent): Promise<IStudent> => {
  const student = await Student.create(payload);
  return student;
};

// READ 
const getAllStudentsServices = async (): Promise<IStudent[]> => {
  const students = await Student.find();
  return students;
};

// READ (single)
const getSingleStudentServices = async (id: string): Promise<IStudent | null> => {
  const student = await Student.findOne({ id });
  return student;
};

// UPDATE 
const updateStudentServices = async (id: string, payload: Partial<IStudent>): Promise<IStudent | null> => {
  const updatedStudent = await Student.findOneAndUpdate({ id }, payload, { new: true });
  return updatedStudent;
};

// DELETE
const deleteStudentServices = async (id: string): Promise<IStudent | null> => {
  const deletedStudent = await Student.findOneAndDelete({ id });
  return deletedStudent;
};

export const StudentService = {
  createStudentServices,
  getAllStudentsServices,
  getSingleStudentServices,
  updateStudentServices,
  deleteStudentServices,
};
