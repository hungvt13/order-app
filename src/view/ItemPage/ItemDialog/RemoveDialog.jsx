import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function RemoveDialog({
  open,
  onClose,
  onAction,
  itemName,
  ...restProps
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      {...restProps}
    >
      <DialogTitle>
        Remove from cart
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {itemName}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          autoFocus
          color="inherit"
        >
          Cancel
        </Button>
        <Button
          onClick={onAction}
          variant="contained"
          color="error"
        >
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
}

RemoveDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onAction: PropTypes.func,
  itemName: PropTypes.string,
};

RemoveDialog.defaultProps = {
  open: false,
  onClose: () => {},
  onAction: () => {},
  itemName: '',
};

export default RemoveDialog;
