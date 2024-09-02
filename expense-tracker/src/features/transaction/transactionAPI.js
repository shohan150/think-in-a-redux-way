import axios from "../../utils/axios";

//make api. ei api gulo json-server er instructed way te banano hoyeche. json server e evabe path, request method, payload diye dile shei ei kaj gulo kore fele. tai amra doc follow kore api banale e hocche. backend e json kaj kore felbe ebong responce er vitor data property te returned data ta diye dibe ba pabo. 

export const getTransactions = async () => {
    const response = await axios.get("/transactions");

    return response.data;
};

export const addTransaction = async (data) => {
    const response = await axios.post("/transactions", data);

    return response.data;
};

export const editTransaction = async (id, data) => {
    const response = await axios.put(`/transactions/${id}`, data);

    return response.data;
};

export const deleteTransaction = async (id) => {
    const response = axios.delete(`/transactions/${id}`);

    return response.data;
};
