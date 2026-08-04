const fs = require("fs");
const path = require("path");

const pool = require("./db");
const { SchemeSchema } = require("../schema/scheme.schema");

const insertScheme = require("./utils/insertScheme");
const insertCategories = require("./utils/insertCategories");
const insertTags = require("./utils/insertTags");
const insertContent = require("./utils/insertContent");

const SCHEME_DIRECTORY = path.join(__dirname, "../schemes");

async function importSchemes() {
    const client = await pool.connect();

    try {

        const files = fs
            .readdirSync(SCHEME_DIRECTORY)
            .filter(file => file.endsWith(".json"));

        console.log(`Found ${files.length} scheme files.\n`);

        for (const file of files) {

            console.log(`Importing ${file}`);

            const filePath = path.join(SCHEME_DIRECTORY, file);

            const raw = fs.readFileSync(filePath, "utf8");

            const scheme = JSON.parse(raw);

            SchemeSchema.parse(scheme);

            await client.query("BEGIN");

            const schemeId = await insertScheme(client, scheme);

            await insertCategories(client, schemeId, scheme);

            await insertTags(client, schemeId, scheme);

            await insertContent(client, schemeId, scheme);

            await client.query("COMMIT");

            console.log(`✓ ${scheme.scheme_name} imported\n`);

        }

        console.log("All Schemes Imported Successfully");

    } catch (error) {

        await client.query("ROLLBACK");

        console.error(error);

    } finally {

        client.release();
        pool.end();

    }
}

importSchemes();