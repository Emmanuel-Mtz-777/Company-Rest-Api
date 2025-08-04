import { connection } from "../db/mysql.js";

export class EmployeePositionModel{
    static async getAll(){
        const [result]= await connection.query(`SELECT * FROM employee_positions`)
        return result
    }

    static async getById(id){
        const [result]=await connection.query(`SELECT * FROM employee_positions WHERE id=?`,[id])
        return result
    }

    static async create(data){
        const params=[
            data.employee_id,
            data.position_id,
            data.start_date,
            data.end_date || null
        ]
        const [result]=await connection.query(`INSERT INTO employee_positions (employee_id, position_id, start_date, end_date) VALUES(?,?,?,?)`,params)
        return result.insertId
    }

    static async update(id, data){
        const keys = Object.keys(data);
        if (keys.length === 0) throw new Error("No hay campos para actualizar");
        const fields = keys.map(key => `${key} = ?`).join(", ");
        const values = Object.values(data);
        values.push(id);
        const query = `UPDATE employee_positions SET ${fields} WHERE id = ?`;
        const [result] = await connection.query(query, values);
        return result.affectedRows;
    }

    static async delete(id){
        const [result]=await connection.query(`DELETE FROM employee_positions where id=?`,[id])
        return result.affectedRows
    }
}