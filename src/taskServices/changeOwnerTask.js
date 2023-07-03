import axios from 'axios';

export const changeOwnerTask = async (boardId, columnId, taskId, data) => {
  try {
    const res = await axios.put(
      `/boards/${boardId}/columns/${columnId}/tasks/${taskId} `,
      data
    );
    return res;
  } catch (e) {
    console.log('e.message', e.message);
  }
};
