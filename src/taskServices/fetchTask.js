import axios from 'axios';

export const fetchTasks = async (boardId, columnId) => {
  try {
    const { data } = await axios.get(
      `/boards/${boardId}/columns/${columnId}/tasks`
    );
    return data;
  } catch (e) {
    console.log('e.message', e.message);
  }
};
