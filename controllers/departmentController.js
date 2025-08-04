import { DepartmentModel } from "../models/departmentModel.js";
import { departmentValidation } from "../schemas/departmentSchema.js";

export class DepartmentController{
    static async getAll(req,res){
        try{
            const departments =await DepartmentModel.getAll()
            return res.json(departments).status(200)
        }catch(e){
            res.status(500).json({ message: "Error al obtener los departamentos", error:e});
        }
    }
        static async getById(req,res){
            const {id}=req.params
        try{
            const department =await DepartmentModel.getById(id)
            return res.json(department).status(200)
        }catch(e){
            res.status(500).json({ message: "Error al obtener departamento", error:e});
        }
    }

    static async create(req,res){
        try{
            const departmentData=departmentValidation.parse(req.body)
            const newDepartment= await DepartmentModel.create(departmentData)
            res.status(201).json({ message: "Departamento creado", id: newDepartment });

        }catch(e){
            if(e.name==='ZodError'){
                return res.status(400).json({ errors: e.errors });
            }
            res.status(500).json({ message: "Error al crear departamento", error:e});
        }
    }

    static async update(req,res){
        const {id}=req.params
        try{
            const departmentData=departmentValidation.parse(req.body)
            const updateDepartment= await DepartmentModel.update(id, departmentData)
            return res.status(200).json({ message: "Departamento actualizado", affectedRows: updateDepartment });

        }catch(e){
            if(e.name==='ZodError'){
                return res.status(400).json({ errors: e.errors });
            }
            res.status(500).json({ message: "Error al actualizar departamento", error:e});
        }
    }
    static async delete(req,res){
        const {id}=req.params
        try{
            const deleteDepartment= await DepartmentModel.delete(id)
            return res.status(200).json({message: "Departamento borrado con exito", deleteDepartment})
        }catch(e){
            res.status(500).json({message:"error al eliminar departamento", error:e})
        }
    }
}