module.exports = async function insertContent(client, schemeId, scheme) {

    const query = `
        INSERT INTO scheme_content
        (
            scheme_id,
            objectives,
            benefits,
            eligibility,
            application_process,
            documents_required,
            official_source,
            important_notes,
            faqs
        )
        VALUES
        ($1,$2,$3,$4,$5,$6,$7,$8,$9)
    `;

    const values = [

        schemeId,

        JSON.stringify(scheme.objectives),

        JSON.stringify(scheme.benefits),

        JSON.stringify(scheme.eligibility),

        JSON.stringify(scheme.application_process),

        JSON.stringify(scheme.documents_required),

        JSON.stringify(scheme.official_source),

        JSON.stringify(scheme.important_notes),

        JSON.stringify(scheme.faqs)

    ];

    await client.query(query, values);

}