import * as types from './actionTypes';

export const uploadImageRequest = (uri) => {
  return {
    type: types.UPLOAD_IMAGE_REQUEST,
    uri
  };
};
