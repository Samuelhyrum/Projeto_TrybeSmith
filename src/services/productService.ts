import ProductModel from '../models/productModel';
import { Product } from '../interfaces/index';

class ProductService {
  public model: ProductModel;
  
  constructor() {
    this.model = new ProductModel();
  }

  public create(product: Product): Promise<Product> {
    return this.model.create(product);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }
}

export default ProductService;