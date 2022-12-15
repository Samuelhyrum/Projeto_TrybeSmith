import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel';
import { User } from '../interfaces/index';

class UserService {
  public model: UserModel;
  
  constructor() {
    this.model = new UserModel();
  }

  public userToken = (user: User) => {
    const payload = { username: user.username, vocation: user.vocation, level: user.level };
    return jwt.sign(
      payload, 
      process.env.JWT_SECRET as string,
      { algorithm: 'HS256', expiresIn: '1d' },
    );
  };

  public async create(user: User): Promise<string> {
    const created = await this.model.create(user);

    const token = this.userToken(created);

    return token;
  }
}
export default UserService;