const getProducts = async (req,res)=>{
    res.status(201).json('Tat ca san pham');
};
const getProductById = async (req,res)=>{
    res.status(201).json('San pham ABC');
};
const deleteProductById = async (req,res)=>{
    res.status(201).json('Xoa thanh cong');
};
const updateProductById = async (req,res)=>{
    res.status(201).json('Update thanh cong');
};
module.exports = {
    getProducts,
    getProductById,
    deleteProductById,
    updateProductById,
}