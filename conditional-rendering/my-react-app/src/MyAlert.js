import React from 'react';
import { Alert } from 'antd';

const MyAlert = ({ show, color, text }) => {
  if (!show) {
    return null; // Don't render anything if `show` is false
  }

  return (
    <Alert
      message={text}
      type="info" // Set the type based on your requirements (info, success, warning, error)
      showIcon
      banner
      style={{ backgroundColor: color || 'green' }}
    />
  );
};

export default MyAlert;
