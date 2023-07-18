import axios from 'axios';
import config from '@/config/config';

const getData = async () => {
  try {
    const result = await axios.get(`${config.domain}/regions`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const deleted = async (id: string) => {
  try {
    const result = await axios.delete(`${config.domain}/regions/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};

const create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/regions`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const update = async (payload: any, id: string) => {
  try {
    const result = await axios.put(`${config.domain}/regions/${id}`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const upload = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/regions/upload`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const exportFunc = {
  getData,
  create,
  deleted,
  update,
  upload,
};

export default exportFunc;
