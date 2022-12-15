import { Request, Response } from 'express';
import UserService from '../services/userService';

class UserController {
  constructor(private userService = new UserService()) {}
    
  public create = async (req: Request, res: Response) => {
    const user = req.body;
        
    const token = await this.userService.create(user);
    res.status(201).json({ token });
  };
}

export default UserController;