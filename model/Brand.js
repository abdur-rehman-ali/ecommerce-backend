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

const virtual = brandSchema.virtual('id');
virtual.get(function () {
  return this._id;
});
brandSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export default mongoose.model('Brand', brandSchema)
