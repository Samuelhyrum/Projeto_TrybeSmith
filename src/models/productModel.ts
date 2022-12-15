import { Pool, ResultSetHeader } from 'mysql2/promise';

import { Product } from '../interfaces/index';
import connection from './connection';

export default class ProductModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }
}