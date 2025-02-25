const getProducts = (req, res) => {
    res.json({ message: "Get all products" });
};

const createProduct = (req, res) => {
    res.json({ message: "Product created", data: req.body });
};

const updateProduct = (req, res) => {
    res.json({ message: `Product ${req.params.id} updated`, data: req.body });
};

const deleteProduct = (req, res) => {
    res.json({ message: `Product ${req.params.id} deleted` });
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
