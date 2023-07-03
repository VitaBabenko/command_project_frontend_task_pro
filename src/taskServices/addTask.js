import axios from 'axios';

export const addTask = async (data, boardId, columnId) => {
  try {
    const res = await axios.post(
      `/boards/${boardId}/columns/${columnId}/tasks`,
      data
    );

    return res;
  } catch (e) {
    console.log('e.message', e.message);
  }
};
