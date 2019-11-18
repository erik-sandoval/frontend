import React from 'react';
import Dropzone from 'react-dropzone-uploader';

import 'react-dropzone-uploader/dist/styles.css';

const FileUpload = props => {
  const handleChangeStatus = ({ file }, status) => {
    if (status === 'done') {
      props.savePhotos({
        file,
      });
    }

    if (status === 'removed') {
      props.removePhoto(file);
    }
  };

  return (
    <Dropzone
      onChangeStatus={handleChangeStatus}
      maxFiles={6}
      inputContent="Upload Image(s)"
      styles={{ dropzone: { minHeight: 250, maxHeight: 250 } }}
      accept="image/*"
    ></Dropzone>
  );
};

export default FileUpload;