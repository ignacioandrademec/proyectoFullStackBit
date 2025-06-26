// CRUD //CREAR ELIMINAR ACTUALIZAR Y TRAER LOS DATOS
import bcrypt from 'bcryptjs'; // para encriptar la contraseña
import modelUsers from "../models/modelUsers"; // poder hacer uso del esquema de usuarios

const ControllerUsers = {
    createUser: async(sol, res)=>{
        try{
            const {name, email, password} = sol.body;
            console.log(sol.body);
            const passwordProtected = await bcrypt.hash(password, 10);
            const newUser = new modelUsers({
                name,
                email,
                password: passwordProtected,
            });
            console.log(newUser);

            const userCreate = await newUser.save();
            if(userCreate._id){
                res.json({
                    result: "fine",
                    message: "User Created",
                    data: userCreate._id,
                })
            }

        }catch(error){
            res.json({
                    result: "Mistake",
                    message: "An error occurred while creating the user",
                    data: error,
                })
        }
    }
}
