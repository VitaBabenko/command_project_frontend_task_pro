import axios from 'axios';

export const deleteTask = async (boardId, columnId, taskId) => {
  try {
    await axios.delete(
      `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`
    );
    return true;
  } catch (e) {
    console.log('e.message', e.message);
  }
};
