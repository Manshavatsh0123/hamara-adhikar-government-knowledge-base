module.exports = async function insertTags(client, schemeId, scheme) {

    if (!scheme.tags) return;

    for (const tag of scheme.tags) {

        await client.query(
            `
            INSERT INTO scheme_tags
            (scheme_id, tag)
            VALUES ($1,$2)
            `,
            [schemeId, tag]
        );

    }

}