export async function load({cookies}) {
    cookies.delete('session_id')

    return {
        success: true
    }
}