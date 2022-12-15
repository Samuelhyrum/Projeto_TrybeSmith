import { Pool } from 'mysql2/promise';

import { Order } from '../interfaces/index';
import connection from './connection';

export default class OrderModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection.execute(
      `SELECT o.id,
       o.user_id AS userId,
       JSON_ARRAYAGG(p.id) AS productsIds 
       FROM Trybesmith.orders AS o 
       INNER JOIN Trybesmith.products AS p 
       ON o.id = p.order_id GROUP BY o.id `,
    );
    const [rows] = result;
    return rows as Order[];
  }
}