const pool = require("./db");

async function testConnection() {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log(result.rows[0]);
        console.log("Database Connected");
    } catch (error) {
        console.error(error);
    } finally {
        await pool.end();
    }
}

testConnection();