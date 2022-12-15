import { Request, Response } from 'express';
import ProductService from '../services/productService';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const book = req.body;

    const bookCreated = await this.productService.create(book);
    res.status(201).json(bookCreated);
  };
}

export default ProductController;