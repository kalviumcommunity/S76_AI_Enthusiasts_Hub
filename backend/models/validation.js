const Joi = require("joi");

// ✅ User (Post) Validation Schema
const userValidationSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// ✅ Review Validation Schema
const reviewValidationSchema = Joi.object({
  aiWebsite: Joi.string().min(3).max(100).required(),
  websiteUrl: Joi.string().uri().required(),
  rating: Joi.number().min(1).max(5).required(),
  feedback: Joi.string().min(10).max(500).required(),
  createdBy: Joi.string().required(),
});

// ✅ Validation Functions
const validateUser = (data) => userValidationSchema.validate(data);
const validateReview = (data) => reviewValidationSchema.validate(data);

// ✅ Export Validation Functions
module.exports = {
  validateUser,
  validateReview,
};
