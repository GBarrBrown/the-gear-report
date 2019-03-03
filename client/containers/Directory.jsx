import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {getLocationById} from '../api/local/locations'
import {getParentByCurrent} from '../api/local/locations'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import UpIcon from '@material-ui/icons/KeyboardArrowUp'

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class Directory extends React.Component {
  state = {
		open: true,
		selectedIndex: 1,
	};
	
	componentDidMount() {
		
	}

	componentWillReceiveProps() {
		{this.props.loadLocationById.length < 1 && this.props.currentLocation && this.props.getLocationById(this.props.currentLocation)}
		{this.props.loadLocationById.length > 0 && this.props.loadParentByCurrent.length < 1 && this.props.getParentByCurrent(this.props.currentLocation)}

	}

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleListItemClick = (event, index) => {
		this.setState({ selectedIndex: index });
		this.setState(state => ({ open: !state.open }));
	};
	
	handleSelectedListItemClick = (event, index) => {
		this.setState({ selectedIndex: index });
		this.setState(state => ({ selectedOpen: !state.selectedOpen }));
  };

  render() {
    const { classes } = this.props;

    return (
        <div className='directory'>
					{this.props.currentLocation && 
					<List component="nav"
					subheader={<ListSubheader component="div">Directory</ListSubheader>}
					className={classes.root}>

					</List>
					}
      </div>
    );
  }
}

function mapStateToProps({ children, currentLocation, loadLocationById, loadParentByCurrent}){
  return {
		children,
		currentLocation,
		loadLocationById,
		loadParentByCurrent
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getLocationById, getParentByCurrent}, dispatch)
}

Directory.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Directory));