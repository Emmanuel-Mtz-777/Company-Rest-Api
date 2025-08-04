import { EmployeeModel } from "../models/employeeModel.js";

export class EmployeeController{
    static async getAll(req,res){
        try{
            const employes =await EmployeeModel.getAll()
            return res.json(employes).status(200)
        }catch(e){
            res.status(500).json({ message: "Error al obtener los empleados" });
        }
    }
}