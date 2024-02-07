const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// GET all products
router.get('/', async (req, res) => {
  try {
    const productsData = await Product.findAll({
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    res.status(200).json(productsData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to get products' });
  }
});

// GET a single product by id
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    if (!productData) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to get product' });
  }
});

// Create a new product
router.post('/', async (req, res) => {
  try {
    const { product_name, price, stock, tagIds } = req.body;
    const newProduct = await Product.create({
      product_name,
      price,
      stock,
    });
    if (tagIds && tagIds.length) {
      const productTagIdArr = tagIds.map((tag_id) => ({
        product_id: newProduct.id,
        tag_id,
      }));
      await ProductTag.bulkCreate(productTagIdArr);
    }
    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to create product' });
  }
});

// Update product by id
router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to update product' });
  }
});

// Delete product by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

module.exports = router;
