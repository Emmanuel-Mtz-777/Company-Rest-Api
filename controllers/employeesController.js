import { EmployeeModel } from "../models/employeeModel.js";
import { createValidation, patchValidacion } from "../schemas/employeeSchema.js";

export class EmployeeController{
    static async getAll(req,res){
        try{
            const employees =await EmployeeModel.getAll()
            return res.json(employees).status(200)
        }catch(e){
            res.status(500).json({ message: "Error al obtener los empleados" });
        }
    }

    static async getById(req,res){
        try{
            const id=req.params.id
            const employee =await EmployeeModel.getById(id)
            return res.json(employee).status(200)
        }catch(e){
            res.status(500).json({ message: "Error al obtener los empleados", error:e });
        }
    }

    static async create(req,res){
        try{
            const employeeData=createValidation.parse(req.body)
            const newEmployeeId= await EmployeeModel.create(employeeData)
            res.status(201).json({ message: "Empleado creado", id: newEmployeeId });

        }catch(e){
            if(e.name==='ZodError'){
                return res.status(400).json({ errors: e.errors });
            }
            res.status(500).json({ message: "Error al crear empleado",error:e});
        }
    }

    static async update(req,res){
        const {id}=req.params
        try{
            const employeData=createValidation.parse(req.body)
            const updateEmploye= await EmployeeModel.update(id,employeData)
            return res.status(200).json({ message: "Empleado Actualizado", id: updateEmploye });
        }catch(e){
            if(e.name==='ZodError'){
                return res.status(400).json({ errors: e.errors });
            }
            res.status(500).json({ message: "Error al actualizar empleado",error:e});
        }
    }

    static async patch(req, res) {
        const { id } = req.params;
        try {
            const employeData=patchValidacion.parse(req.body)
            const updateEmployee = await EmployeeModel.patch(id,employeData);
            res.json({ message: "Empleado actualizado parcialmente" });
        } catch (e) {
            res.status(500).json({ message: "Error al actualizar", error: e });
        }
    }

    

    static async delete(req,res){
        try{
            const {id}=req.params
            const deleteEmployee= await EmployeeModel.delete(id)
            return res.status(200).json({message:"Empleado eliminado con exito", deleteEmployee})
        }catch(e){
            res.status(500).json({message:"Ha ocurrido un error al eliminar el usuario", error: e})
        }
    }
}