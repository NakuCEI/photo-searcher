export const ConsultaPexels = async(category) => {
    const auth = '563492ad6f917000010000012d0a8a72486147c0bce9f68c8034f662';
    const url = `https://api.pexels.com/v1/search?query=${category}&per_page=2`
    const resp = await fetch(url, {
        method: 'GET', 
        headers: {
            Authorization: auth
        }, 
        mode: 'cors', 
        cache: 'force-cache'
    });

    return await resp.json();
};