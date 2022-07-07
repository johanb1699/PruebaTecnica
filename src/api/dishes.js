const axios = require('axios');

const urlAPi = "http://localhost:3001/"
const getAllDishes = async () => {
    try {
        let response = await axios.get(urlAPi + 'api/dishes')
        return response;
    } catch (error) {
        return error
    }
}

const getDishById = async (id) => {
    try {
        let response = await axios.get(urlAPi + 'api/dishes/' + id)
        return response;
    } catch (error) {
        return error
    }
}

const createDish = async (body) => {
    try {
        let response = await axios.post(urlAPi + 'api/dishes/', body)
        return response;
    } catch (error) {
        return error
    }
}

const updateDish = async (id, body) => {
    try {
        let response = await axios.put(urlAPi + 'api/dish/' + id, body)
        return response;
    } catch (error) {
        return error
    }
}

const deleteDish = async (id) => {
    try {
        let response = await axios.delete(urlAPi + 'api/dish/'+id)
        return response;
    } catch (error) {
        return error
    }
}

const getIngredients = async (id) => {
    try {
        let response = await axios.get(urlAPi + 'api/ingredients/')
        return response;
    } catch (error) {
        return error
    }
}

const getDishMoreThreeIng = async (id) => {
    try {
        let response = await axios.get(urlAPi + 'api/dishMoreThreeIng/')
        return response;
    } catch (error) {
        return error
    }
}

export {
    getAllDishes,
    getDishById,
    createDish,
    deleteDish,
    updateDish,
    getDishMoreThreeIng,
    getIngredients
}