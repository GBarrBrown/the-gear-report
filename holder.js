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
								
            		<ListItem button
													selected={this.state.selectedIndex === 2}>
              		<ListItemText inset secondary="South  Island" />
            		</ListItem>

								<ListItem button
													selected={this.state.selectedIndex === 3}>
              		<ListItemText inset secondary="South  Island" />
            		</ListItem>
			
			</List>