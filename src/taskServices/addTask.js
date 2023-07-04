import axios from 'axios';
import { toast } from 'react-toastify';

export const addTask = async (data, boardId, columnId) => {
  try {
    const res = await axios.post(
      `/boards/${boardId}/columns/${columnId}/tasks`,
      data
    );

    return res;
  } catch (e) {
    if (e.code === 400) { 
      toast.error('Bad request');
      return
    }
    if (e.code === 401) { 
      toast.error('Missing header with authorization token');
      return
    }
    if (e.code === 404) { 
      toast.error('Not found');
      return
    }
    if (e.code === 500) { 
      toast.error('Not found');
      return
    }
    toast.error(e.message);
    console.log('e.message', e.message);
  }
};
