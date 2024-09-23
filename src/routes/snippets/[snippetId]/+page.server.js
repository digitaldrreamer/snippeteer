/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { snippetId } = params;
    return {
        snippetId
    }
}