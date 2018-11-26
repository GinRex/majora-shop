import React from 'react';

const ThumbnailField = ({ record }) => <img src={record.thumbnail} style={{ width: 50, maxWidth: 50, maxHeight: 50 }} alt="" />;

ThumbnailField.defaultProps = {
    style: { padding: '0 0 0 10px' },
};

export default ThumbnailField;
