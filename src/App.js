
import React, { useState } from 'react';
import CenteredModal from './CenteredModal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)} style={{backgroundColor:'green', padding:'10px', width: '150px', borderRadius: '8px', color: '#fff', fontWeight: 'bold'}}>Add Profile</button>
      <CenteredModal show={showModal} onHide={handleModalClose} />
    </div>
  );
};

export default App;