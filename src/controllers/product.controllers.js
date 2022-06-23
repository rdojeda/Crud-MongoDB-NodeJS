import Product from "../models/ProductModel.js";

export const renderProducts = async (req, res) => {
  const products = await Product.find().lean();

  res.render("index", { products: products });
};

export const addProducts = async (req, res) => {
  try {
    const product = Product(req.body)
    await product.save()
    res.redirect('/')

  } catch (error) {
    console.log(error)
  }
   
}

export const editProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean();
    res.render("edit", { product });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect("/");
};

