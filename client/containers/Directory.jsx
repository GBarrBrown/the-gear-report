import React from 'react';
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

class NestedList extends React.Component {
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

  render() {
    const { classes } = this.props;

    return (
        <div className='directory'>
					<List
        		component="nav"
        		subheader={<ListSubheader component="div">Directory</ListSubheader>}
        		className={classes.root}>
						<ListItem button>
          		<ListItemText inset primary="New Zealand" inset={true}/>
        		</ListItem>

								<ListItem button 
													selected={this.state.selectedIndex === 1}
													onClick={event => this.handleListItemClick(event, 1)}>
										<ListItemIcon>
											<UpIcon />
										</ListItemIcon>
              		<ListItemText inset secondary="North Island" />
            		</ListItem>

								<Collapse in={this.state.open} timeout="auto" unmountOnExit>
									<List component="div" disablePadding>
										<ListItem button className={classes.nested}>
         							<ListItemText inset secondary="Northland" />
        						</ListItem>
										<ListItem button className={classes.nested}>
         							<ListItemText inset secondary="Auckland" />
        						</ListItem>
										<ListItem button className={classes.nested}>
         							<ListItemText inset secondary="Waikato" />
        						</ListItem>
										<ListItem button className={classes.nested}>
         							<ListItemText inset secondary="Taupo" />
        						</ListItem>
										<ListItem button className={classes.nested}>
         							<ListItemText inset secondary="Wellington" />
        						</ListItem>
									</List >
								</Collapse>
								
            		<ListItem button>
              		<ListItemText inset secondary="South  Island" />
            		</ListItem>







						{/* <ListItem button
											selected={this.state.selectedIndex === 1}
											onClick={event => this.handleListItemClick(event, 1)}>
								<ListItemIcon>
									<UpIcon />
								</ListItemIcon>
								<ListItemText inset primary="North Island" />
							</ListItem> */}
			
			</List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);