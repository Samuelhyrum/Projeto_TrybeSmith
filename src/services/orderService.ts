import OrderModel from '../models/orderModel';
import { Order } from '../interfaces/index';

class OrderService {
  public model: OrderModel;
  
  constructor() {
    this.model = new OrderModel();
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}

export default OrderService;