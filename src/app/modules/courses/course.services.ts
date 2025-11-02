import { Course } from './course.model';
import { ICourse } from './course.interface';



// CREATE 
const createCourseServices = async (payload: ICourse): Promise<ICourse> => {
  const newCourse = await Course.create(payload);
  return newCourse;
};


// READ → 
const getAllCoursesServices = async (): Promise<ICourse[]> => {
  const courses = await Course.find({})
  return courses;
};


// READ (SINGLE) 
const getSingleCourseServices = async (id: number): Promise<ICourse | null> => {
  const course = await Course.findOne({ id })
    .populate('mentor')
    .populate('category');
  return course;
};


// UPDATE 
const updateCourseServices = async (id: number, payload: Partial<ICourse>): Promise<ICourse | null> => {
  const updatedCourse = await Course.findOneAndUpdate({ id }, payload, { new: true })
    .populate('mentor')
    .populate('category');
  return updatedCourse;
};


// DELETE 
const deleteCourseServices = async (id: number): Promise<ICourse | null> => {
  const deletedCourse = await Course.findOneAndDelete({ id })
    .populate('mentor')
    .populate('category');
  return deletedCourse;
};

export const CourseService = {
  createCourseServices,
  getAllCoursesServices,
  getSingleCourseServices,
  updateCourseServices,
  deleteCourseServices,
};
