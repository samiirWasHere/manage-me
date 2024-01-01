import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import format from 'date-fns/format';
import fromUnixTime from 'date-fns/fromUnixTime';
import getUnixTime from 'date-fns/getUnixTime';
import { useState } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import ToolbarMenu from './ToolbarMenu';

const DueMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dueDate = props.dueDate
    ? format(fromUnixTime(props.dueDate), 'Pp')
    : format(new Date(), 'Pp');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton onClick={handleMenuOpen} size="large">
      </IconButton>
      <ToolbarMenu state={anchorEl} onClose={handleMenuClose}>
        <div className="p-16 max-w-192">
          {props.dueDate ? (
            <MenuItem
              onClick={(ev) => {
                props.onRemoveDue();
                handleMenuClose(ev);
              }}
            >
              Remove Due Date
            </MenuItem>
          ) : (
            <DateTimePicker
              value={new Date(dueDate)}
              format="Pp"
              onChange={(val, ev) => {
                props.onDueChange(getUnixTime(val));
                handleMenuClose(ev);
              }}
              slotProps={{
                textField: {
                  label: 'Due date',
                  placeholder: 'Choose a due date',
                  InputLabelProps: {
                    shrink: true,
                  },
                  fullWidth: true,
                  variant: 'outlined',
                },
              }}
            />
          )}
        </div>
      </ToolbarMenu>
    </div>
  );
}

export default DueMenu;
