import { Pool, ResultSetHeader } from 'mysql2/promise';

import { Product } from '../interfaces/index';
import connection from './connection';

export default class ProductModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.connection.execute('SELECT * FROM Trybesmith.products');
    const [rows] = result;
    return rows as Product[];
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