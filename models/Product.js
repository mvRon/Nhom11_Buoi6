const ProductSchema = mongoose.Schema ({
    _id : mongoose.Schema.Types.ObjectId,
    name : String,
    price : Number,
    image : String,
    cdate : Number,
    category : CategorySchema
}, { versionKey : false });

const Product = mongoose.model('Product', ProductSchema);
module.export = Product;

