import { ICategory } from "./courseCategory.interface";
import { Category } from "./courseCategory.model";


// CREATE 
const createCategoryServices = async (payload: ICategory): Promise<ICategory> => {
  const newCategory = await Category.create(payload);
  return newCategory;
};

// READ 
const getAllCategoriesServices = async (): Promise<ICategory[]> => {
  const categories = await Category.find({});
  return categories;
};

// READ 
const getSingleCategoryServices = async (id: number): Promise<ICategory | null> => {
  const category = await Category.findOne({ id });
  return category;
};

// UPDATE 
const updateCategoryServices = async (
  id: number,
  payload: Partial<ICategory>
): Promise<ICategory | null> => {
  const updatedCategory = await Category.findOneAndUpdate({ id }, payload, { new: true });
  return updatedCategory;
};

// DELETE
const deleteCategoryServices = async (id: number): Promise<ICategory | null> => {
  const deletedCategory = await Category.findOneAndDelete({ id });
  return deletedCategory;
};

export const CategoryService = {
  createCategoryServices,
  getAllCategoriesServices,
  getSingleCategoryServices,
  updateCategoryServices,
  deleteCategoryServices,
};
