import { EmployeePositionModel } from "../models/employeePositionModel.js";
import { Validation, patchValidacion } from "../schemas/employeePositionSchema.js";

export class EmployeePositionController{
    static async getAll(req,res){
        try{
            const results =await EmployeePositionModel.getAll()
            return res.json(results).status(200)
        }catch(e){
            res.status(500).json({ message: "Error al obtener la lista" });
        }
    }

    static async getById(req,res){
        try{
            const id=req.params.id
            const result =await EmployeePositionModel.getById(id)
            return res.json(result).status(200)
        }catch(e){
            res.status(500).json({ message: "Error al obtener la lista", error:e });
        }
    }

    static async create(req,res){
        try{
            const data=Validation.parse(req.body)
            const newDataId= await EmployeePositionModel.create(data)
            res.status(201).json({ message: "Registro creado", id: newDataId });

        }catch(e){
            if(e.name==='ZodError'){
                return res.status(400).json({ errors: e.errors });
            }
            res.status(500).json({ message: "Error al crear elemento en la lista",error:e});
        }
    }

    static async update(req,res){
        const {id}=req.params
        try{
            const data=patchValidacion.parse(req.body)
            const updateData= await EmployeePositionModel.update(id,data)
            return res.status(200).json({ message: "Registro Actualizado", id: updateData });
        }catch(e){
            if(e.name==='ZodError'){
                return res.status(400).json({ errors: e.errors });
            }
            res.status(500).json({ message: "Error al actualizar registro",error:e});
        }
    }

    static async delete(req,res){
        try{
            const {id}=req.params
            const deleteData= await EmployeePositionModel.delete(id)
            return res.status(200).json({message:"registro eliminado con exito", deleteData})
        }catch(e){
            res.status(500).json({message:"Ha ocurrido un error al eliminar el registro", error: e})
        }
    }
}