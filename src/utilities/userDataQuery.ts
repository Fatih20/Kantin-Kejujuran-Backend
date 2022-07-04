import pool from "../database/db";
import { LoginQueryReturn, RegisterErrorPosition, RegisterQueryReturn } from "./types";

const accountQuery = {
    register : {
        checkIfRegistered : "SELECT exists (SELECT student_id FROM students WHERE student_id = $1 LIMIT 1);",
        addNewUser : "INSERT INTO students (student_id, password) VALUES ($1 , $2);"
    },
    login : {
        getPassword : `SELECT password FROM students WHERE student_id=$1;`
    }
};

export async function loginQuery (student_id : string, password : string) : Promise<LoginQueryReturn> {
    try {
        const userIsRegistered = (await pool.query(accountQuery.register.checkIfRegistered, [student_id]))?.rows[0].exists
        if (userIsRegistered) {
            const studentRealPassword = (await pool.query(accountQuery.login.getPassword, [student_id])).rows[0].password
            if (password === studentRealPassword) {
                return {error : null, response : "Success", position : "Done"}
            } else {
                return {error : "wrongPassword", errorManMade : "wrongPassword",  response : undefined, position : "Done"}
            }
        } else {
            return {error : "notRegistered", errorManMade : "notRegistered", response : undefined, position : "Getting new password"}
        }
    } catch (error) {
        return {error, response : undefined, position : "Checking uniqueness"}
    }
}

export async function registerQuery(student_id : string, password : string) : Promise<RegisterQueryReturn> {
    try {
        const userIsRegistered = (await pool.query(accountQuery.register.checkIfRegistered, [student_id]))?.rows[0].exists
        if (!userIsRegistered) {
            try {
                const response = await pool.query(accountQuery.register.addNewUser, [student_id, password]);
                return {error : null, response, position : "Done"}
            } catch (error) {
                return {error, response : undefined, position : "Inserting new user"}
            }
        } else {
            return {error : "registeredAlready", errorManMade : "registeredAlready", response : undefined, position : "Inserting new user" as RegisterErrorPosition}
        }
    } catch (error) {
        return {response : undefined, error, position : "Checking uniqueness" as RegisterErrorPosition}
    }
}

