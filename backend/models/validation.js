const Joi = require("joi");

// ✅ User Validation Schema (updated to match User model)
const userValidationSchema = Joi.object({
  username: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{6,}$'))
    .required()
    .messages({
      'string.min': 'Password must be at least 6 characters long',
      'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
      'string.empty': 'Password is required'
    }),
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