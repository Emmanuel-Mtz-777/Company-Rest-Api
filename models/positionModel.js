import { connection } from "../db/mysql.js";

export class PositionModel{
    static async getAll(){
        const [result]= await connection.query(`SELECT * FROM positions`)
        return result
    }

    static async getById(id){
        const [result]=await connection.query(`SELECT * FROM positions WHERE id=?`,[id])
        return result
    }

    static async create(data){
        const [result]=await connection.query(`INSERT INTO positions (title) VALUES(?)`,[data.title])
        return result.insertId
    }

    static async update(id, data){
        const [result]= await connection.query(`UPDATE positions SET title=? WHERE id=?`,[data.title,id])
        return result.affectedRows
    }

    static async delete(id){
        const [result]=await connection.query(`DELETE FROM positions where id=?`,[id])
        return result.affectedRows
    }
}