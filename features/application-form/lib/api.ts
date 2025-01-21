import axios from "axios";

const api = axios.create({
  baseURL: "https://api.bank-kredit.uz/api",
  headers: {
    // "Content-Type": "application/json",
    // "Authorization": "Bearer 8dc384f8-d9f1-4566-9e6d-2c831172961a"
  },
});
// Example: Get Regions

export const getInfo = {
  getRegion: async () => {const response = await api.get("/v2/test") 
    return response.data.data.region},
  getDistrict: async (val : number) => {
    const response = await api.get("/v2/test?region_id=" + val);
    return response.data.data.district;
  },
  getMahalla: async (val : number) => {
    const response = await api.get("/v1/public/lists/mahalla?parent_id=" + val);
    return response.data.data;
  },
  getStreets: async (val : number) => {
    const response = await api.get("/v1/public/mahalla/streets?mahalla_id=" + val);
    console.log(response.data.data.data)
    return response.data.data.data;
  }
}


// Example: Create Load
export const createLoad = async (data: { name: string; amount: number }) => {
  const response = await api.post("", data);
  return response.data;
};