import { connection } from "../db/mysql.js";

export class EmployeeModel{

    static async getAll(){
        const [result]= await connection.query('Select * from employees')
        return result
    }

}