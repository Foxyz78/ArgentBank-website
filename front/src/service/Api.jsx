const baseUrl = "http://localhost:3001/api/v1";

const fetchData = {
    getToken: {
        url: "/user/login",
        method: "post",
        auth: false,
    },
    getProfile: {
        url: "/user/profile",
        method: "post",
        auth: true,
    },
    putUserName: {
        url: "/user/profile",
        method: "put",
        auth: true,
    },
};

const Api = async (info, token, data = {}) => {
    const apiData = fetchData[info];
    console.log(apiData);
    if (!apiData) {
        console.error("erreur de connexion");
        return;
    }

    const headers = { "Content-Type": "application/json" };

    if (!apiData.auth) {
        headers.Authorization = `Bearer ${token}`;
    }

    try {
        const response = await fetch(`${baseUrl}${apiData.url}`, {
            method: apiData.method,
            headers,
            body: JSON.stringify(data),
        });
        //console.log(response);
        if (!response.ok) {
            console.log(response);
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur lors de la connexion à l'API.jsx :", error);
        throw error;
    }
};

export default Api;
