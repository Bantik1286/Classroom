import { createClient } from '@supabase/supabase-js'

class Database {
    constructor() {
        this.supabase = createClient(
            'https://gdexnfbjauhkojfkrxvl.supabase.co',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTI0NzM5OSwiZXhwIjoxOTUwODIzMzk5fQ.NIWP_PrlawRYjBgANscmM4r2-zG_vPu8FaLjrydapK0'
            )
    }

    async select(table) {
        const {data, error} = await this.supabase.from(table).select();
    }

    async find(table, email) {
        const {data, error} = await this.supabase.from(table).select().match(
            {Email: email}
        );
        return data;
    }

    async emplace(table, email, fname, lname, password) {
        const {data,error} = await this.supabase.from(table).insert(
            {
                Email: email,
                First_Name: fname,
                Last_Name: lname,
                Password: password,
            }
        );
    }

}

export default Database;