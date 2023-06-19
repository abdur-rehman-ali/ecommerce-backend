import mongoose from "mongoose"

const productSchema = mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    unique: true },
  description: { 
    type: String,
    required: true },
  price: { 
    type: Number, 
    required: true, 
    min: [1, 'Minimum price should be greater than 1'] },
  discountPercentage: {
    type: Number,
    required: true,
    min: [0, 'Minimum discount should be greater than 0'],
    max: [99, 'Minimum discount should be less than 99'],
    default: 0
  },
  rating: {
    type: Number,
    required: true,
    min: [0, 'Minimum rating should be greater than 0'],
    max: [5, 'Minimum rating should be less than 5'],
    default: 0
  },
  stock: {
    type: Number,
    required: true,
    min: [0, 'Minimum stock should be greater than 0'],
    default: 0
  },
  brand: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    required: true 
  },
  thumbnail: { 
    type: String, 
    required: true 
  },
  images: { 
    type: [String] 
  },
  deleted: { 
    type: Boolean, 
    default: false 
  }
})

productSchema.pre('save', function(next) {
  const product = this; 
  product.title = product.title.trim(); 
  product.description = product.description.trim(); 
  next();
});

const virtual = productSchema.virtual('id');
virtual.get(function () {
  return this._id;
});
productSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Product = mongoose.model('Product', productSchema)
export default Product;
