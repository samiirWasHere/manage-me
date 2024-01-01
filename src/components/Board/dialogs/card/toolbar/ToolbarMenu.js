import Popover from '@mui/material/Popover';

const ToolbarMenu = (props) => {
  return (
    <Popover
      open={Boolean(props.state)}
      anchorEl={props.state}
      onClose={props.onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <>{props.children}</>
    </Popover>
  );
}

export default ToolbarMenu;
