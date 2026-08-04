module.exports = async function insertScheme(client, scheme) {

    const query = `
        INSERT INTO schemes
        (
            scheme_code,
            scheme_name,
            department,
            state,
            description,
            search_text,
            metadata
        )
        VALUES
        ($1,$2,$3,$4,$5,$6,$7)
        RETURNING id;
    `;

    const values = [

        scheme.scheme_code,

        scheme.scheme_name,

        scheme.department,

        scheme.state,

        scheme.description,

        [
            scheme.scheme_name,
            scheme.department,
            scheme.description,
            ...(scheme.categories || [])
        ].join(" "),

        JSON.stringify(scheme.metadata)

    ];

    const result = await client.query(query, values);

    return result.rows[0].id;
}