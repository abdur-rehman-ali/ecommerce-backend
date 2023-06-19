import mongoose from "mongoose";

const brandSchema = mongoose.Schema({
  value: { type: String, required: true, unique: true },
  label: { type: String, required: true, unique: true},
})

brandSchema.pre('save', function (next) {
  const brand = this;
  brand.title = brand.value.trim();
  brand.description = brand.label.trim();
  next();
})

export default mongoose.model('Brand', brandSchema)
