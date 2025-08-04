import { AttendanceModel } from "../models/attendanceModel.js";
import { Validation, patchValidacion } from "../schemas/attendanceSchema.js";

export class AttendanceController{
    static async getAll(req,res){
        try{
            const results =await AttendanceModel.getAll()
            return res.json(results).status(200)
        }catch(e){
            res.status(500).json({ message: "Error al obtener los registros" });
        }
    }

    static async getById(req,res){
        try{
            const id=req.params.id
            const result =await AttendanceModel.getById(id)
            return res.json(result).status(200)
        }catch(e){
            res.status(500).json({ message: "Error al obtener los registros", error:e });
        }
    }

    static async create(req,res){
        try{
            const data=Validation.parse(req.body)
            const newDataId= await AttendanceModel.create(data)
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
            const updateData= await AttendanceModel.update(id,data)
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
            const deleteData= await AttendanceModel.delete(id)
            return res.status(200).json({message:"registro eliminado con exito", deleteData})
        }catch(e){
            res.status(500).json({message:"Ha ocurrido un error al eliminar el registro", error: e})
        }
    }
}