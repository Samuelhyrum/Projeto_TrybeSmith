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
}

export default ProductService;