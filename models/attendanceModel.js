import { connection } from "../db/mysql.js";

export class AttendanceModel{
    static async getAll(){
        const [result]= await connection.query(`SELECT * FROM attendance`)
        return result
    }

    static async getById(id){
        const [result]=await connection.query(`SELECT * FROM attendance WHERE id=?`,[id])
        return result
    }

    static async create(data){
        const params=[
            data.employee_id,
            data.date,
            data.status,
        ]
        const [result]=await connection.query(`INSERT INTO attendance (employee_id, date, status) VALUES(?,?,?)`,params)
        return result.insertId
    }

    static async update(id, data) {
    const keys = Object.keys(data);
    if (keys.length === 0) throw new Error("No hay campos para actualizar");

    const fields = keys.map(key => `${key} = ?`).join(", ");
    const values = Object.values(data);
    values.push(id);

    const query = `UPDATE attendance SET ${fields} WHERE id = ?`;
    const [result] = await connection.query(query, values);

    return result.affectedRows;
}


    static async delete(id){
        const [result]=await connection.query(`DELETE FROM attendance where id=?`,[id])
        return result.affectedRows
    }
}