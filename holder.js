<List
        component="nav"
        subheader={<ListSubheader component="div">Directory</ListSubheader>}
        className={classes.root}
      >
        <ListItem button
                	selected={this.state.selectedIndex === 1}
									onClick={event => this.handleListItemClick(event, 1)}>
          <ListItemIcon>
            <UpIcon />
          </ListItemIcon>
          <ListItemText inset primary="North Island" />
        </ListItem>
        <ListItem button>
          <ListItemText inset primary="Northland" />
        </ListItem>
        <ListItem button onClick={this.handleClick} >
          <ListItemText inset primary="Auckland" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="Auckland City" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="Waiheke Island" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemText inset primary="Waikato" />
        </ListItem>
        <ListItem button>
          <ListItemText inset primary="Coromandel" />
        </ListItem>
        <ListItem button>
          <ListItemText inset primary="Wellington" />
        </ListItem>
      </List>