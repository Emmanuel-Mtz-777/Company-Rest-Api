import { connection } from "../db/mysql.js";

export class EmployeeModel{

    static async getAll(){
        const [result]= await connection.query('Select * from employees')
        return result
    }
    static async getById(id){
        const [result]= await connection.query('Select * from employees where id=?',[id])
        return result
    }
    static async create(data){
        const query = `
        INSERT INTO employees 
        (first_name, last_name, email, phone, hire_date, salary, department_id)
        VALUES (?, ?, ?, ?, ?, ?, ?)`;

        const params=[
            data.first_name,
            data.last_name,
            data.email,
            data.phone || null,
            data.hire_date,
            data.salary,
            data.department_id || null,
        ]
        const [result]=await connection.query(query,params)
        return result.insertId
    }

    static async update(id,data){
        const query=`UPDATE employees SET first_name=?, last_name=?, email=?, phone=?, hire_date=?, salary=?, department_id=? WHERE id=? `
        const params=[
            data.first_name,
            data.last_name,
            data.email,
            data.phone || null,
            data.hire_date,
            data.salary,
            data.department_id || null,
            id
        ]
        const [result]=await connection.query(query, params)
        return result.affectedRows
    }

    static async patch(id, data) {
    const keys = Object.keys(data);
    if (keys.length === 0) throw new Error("No hay campos para actualizar");

    const fields = keys.map(key => `${key} = ?`).join(", ");
    const values = Object.values(data);
    values.push(id);

    const query = `UPDATE employees SET ${fields} WHERE id = ?`;
    const [result] = await connection.query(query, values);
    return result.affectedRows;
}


    static async delete(id){
        const [result]= await connection.query(`DELETE FROM employees WHERE id=?`,[id])
        return result
    }

    
    

}