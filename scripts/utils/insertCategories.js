module.exports = async function insertCategories(client, schemeId, scheme) {

    for (const category of scheme.categories) {

        await client.query(
            `
            INSERT INTO scheme_categories
            (scheme_id, category)
            VALUES ($1,$2)
            `,
            [schemeId, category]
        );

    }

}