import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:"white"}}>Buy Cookie</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className='text-2xl'>Enter Quantity of Cookie</p>
          <input
            type="text"
            placeholder="Name"
            min={0}
            value={updatedItem.name || ''}
            onChange={(e) => {
            handleChange(e, 'name');
          setUpdatedItem({ ...updatedItem, name: e.target.value }); // Update the local state
        }}
        className="border border-gray-300 rounded-md px-3 py-2 mb-2"
        style={{ width: '100px' }}
      />
        </Box>
      </Modal>
    </div>
  );
}