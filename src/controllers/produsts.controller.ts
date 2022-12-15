import { Request, Response } from 'express';
import ProductService from '../services/productService';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const book = req.body;

    const bookCreated = await this.productService.create(book);
    res.status(201).json(bookCreated);
  };

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.productService.getAll();
    res.status(200).json(books);
  };
}

export default ProductController;