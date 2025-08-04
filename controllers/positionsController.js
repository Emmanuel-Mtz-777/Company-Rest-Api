import { PositionModel } from "../models/positionModel.js";
import { positionValidation } from "../schemas/positionSchema.js";

export class PositionController{
    static async getAll(req,res){
            try{
                const positions=await PositionModel.getAll()
                return res.json(positions).status(200)
            }catch(e){
                res.status(500).json({message:"Error al obtener los puestos", error:e})
            }
        }
    
        static async getByid(req,res){
            const {id}=req.params
            try{
                const position=await PositionModel.getById(id)
                return res.json(position).status(200)
            }catch(e){
                res.status(500).json({message:"Error al obtener el puesto", error:e})
            }
        }
    
        static async create(req,res){
            try{
                const positionData=positionValidation.parse(req.body)
                const newPosition= await PositionModel.create(positionData)
                return res.status(201).json({message:"Puesto creado con exito", id:newPosition})
            }catch(e){
                if(e.name==='ZodError'){
                    return res.status(400).json({ errors: e.errors });
                }
                if (e.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ message: "El título del puesto ya existe" })
        }
                res.status(500).json({message:"error al crear el puesto", error:e})
            }
        }
    
        static async update(req,res){
            const {id}=req.params
            try{
                const positionData =positionValidation.parse(req.body)
                const updatePosition= await PositionModel.update(id,positionData)
                return res.status(200).json({message:"Puesto creado con exito"})

            }catch(e){
                if(e.name==='ZodError'){
                    return res.status(400).json({ errors: e.errors });
                }
                res.status(500).json({message:"error al crear el puesto", error:e})
            }
        }
    
        static async delete(req,res){
            const {id}=req.params
            try{    
                const deletePosition= await PositionModel.delete(id)
                if (deletePosition === 0) {return res.status(404).json({ message: "Puesto no encontrado" })}
                return res.status(200).json({message:"Puesto eliminado con exito"})    
            }catch(e){
                res.status(500).json({message:"error al eliminar el puesto", error:e})
            }
        }
}