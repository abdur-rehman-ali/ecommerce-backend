import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  value: { type: String, required: true, unique: true },
  label: { type: String, required: true, unique: true},
})

categorySchema.pre('save', function (next) {
  const category = this;
  category.title = category.value.trim();
  category.description = category.label.trim();
  next();
})

const virtual = categorySchema.virtual('id');
virtual.get(function () {
  return this._id;
});

categorySchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export default mongoose.model('Category', categorySchema)
