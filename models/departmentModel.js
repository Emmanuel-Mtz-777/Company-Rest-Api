import { connection } from "../db/mysql.js";

export class DepartmentModel{

    static async getAll(){
        const [result]= await connection.query('Select * from departments')
        return result
    }

    static async getById(id){
        const [result]= await connection.query('Select * from departments where id=?',[id])
        return result
    }
    static async create(data){
        const query = `
        INSERT INTO departments 
        (name)
        VALUES (?)`;

        const params=[data.name,]
        const [result]=await connection.query(query,params)
        return result.insertId
    }
    static async update(id,data){
        const [result]=await connection.query(`Update departments set name=? where id=?`,[data.name,id])
        return result.affectedRows
    }

    static async delete(id){
        const deleteEmployes= await connection.query(`Delete from employees where department_id =?`,[id])
        const [result]= await connection.query('Delete from departments where id=?',[id])
        return result
    }

    

}