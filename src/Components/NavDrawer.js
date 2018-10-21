import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import ShopIcon from '@material-ui/icons/ShopSharp';
import CartIcon from '@material-ui/icons/ShoppingCartSharp';

import {Link} from 'react-router-dom'

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class NavDrawer extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        Title
        <Divider style={{margin: '31px 0'}} />
        <Link to='/' className='LinkMenu'>
          <ListItem button>
              <ListItemIcon>
                  <ShopIcon />
              </ListItemIcon>
              <ListItemText inset primary="Shop" />
          </ListItem>
        </Link>
        <Link to='/Cart' className='LinkMenu'>
          <ListItem button>
              <ListItemIcon>
                  <CartIcon />
              </ListItemIcon>
              <ListItemText inset primary="Shopping Cart" />
          </ListItem>
        </Link>
      </div>
    );

    return (
      <div>
        <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Open drawer" style={{marginRight: '20px'}}>
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer);