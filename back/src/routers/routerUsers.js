import {Router} from 'express';
import controllerUsers from '../controllers/controllerUsers.js'; // siempre colocarle el .js ya que el lo trae sin la extensión.

const routerUsers = Router();

routerUsers.post('/',controllerUsers.createUser);
routerUsers.get('/:id', controllerUsers.readUser);
routerUsers.get('/',controllerUsers.readUsers);
routerUsers.put('/:id', controllerUsers.updateUser);
routerUsers.delete('/:id', controllerUsers.deleteUser);

export default routerUsers;