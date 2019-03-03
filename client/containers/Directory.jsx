import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



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
					<h1>hi</h1>}
      </div>
    );
  }
}

function mapStateToProps({ children, currentLocation }){
  return {
		children,
		currentLocation
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({getAllTickets}, dispatch)
// }

Directory.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Directory));