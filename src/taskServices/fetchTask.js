import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchTasks = async (boardId, columnId) => {
  try {
    const { data } = await axios.get(
      `/boards/${boardId}/columns/${columnId}/tasks`
    );
    return data;
  } catch (e) {
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
