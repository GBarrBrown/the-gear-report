# The Gear Report

*Hazard reporting tool for the unregulated sport of rock climbing to increase awareness of faulty gear and dangerous climbs.*

## Why?
Outdoor rock climbing is an extreme sport with no governing body or regulatory committe, due to this any time someone is out climbing they are relying on the assumption that the gear fixed to the routes is secured porperly and in working order. If however something is faulty or a wall itself has become hazardous, other climbers need to be made be made aware as mishaps can be fatal.

The Gear Report was created with this in mind and is intended to become a platform for climbers to check their destinations for issues prior to climbing or to report issues they come across. Hopefully this can keep climbers of all skill levels safer and allow those with the tools and know-how to get out and address the hazards.

Backing by charities such as the [Kimi Worrell Foundation](https://kwf.co.nz "kwf.co.nz") or other large companies will allow the platforms admins to direct funding through a reimbursement scheme to those who get out there and address the issues.


## Group Roles
- Becs: Gitmaster
- George: Scrummaster & Vibeswatcher
- Richard: Product owner & Domain expert


## Technologies & Packages
- React with Redux
- Redux-thunk
- Yarn
- Node.js
- Webpack & Babel
- Nodemon
- Express
- Superagent
- Material-UI
- ~~Firebase~~
- Jest, Enzyme & Supertest
- Sqlite3 with knex.js
- JWT & Libsodium
- Google-maps-react


## User Stories

**Base User (Not Logged-in)**

As a user I want to:

- [x] View individual climbs (routes) in NZ and filter by ‘area’
- [x] View recent tickets by area
- [x] View individual tickets with additional information: description, date submitted, severity, grant status, logged by, location
- [x] View a map highlighting climbing locations
- [ ] View & filter through all tickets by: keywords, date created & updated, grant or resolved status, severity, location, logged by
- [x] Jump to an individual ticket from the all tickets page


**Authenticated User (Logged-in)**

As a user I want to:

- [x] Add new tickets 
- [ ] When viewing a route or crag I want to be able to add a ticket and have the ticket form auto-populate with said crag or route
- [x] When adding a ticket, location choices should only be relavent to the parent location selection eg. North Island should not offer Christchurch as a sub-area
- [ ] Edit existing tickets, requiring review from an admin
- [ ] Apply for grants
- [ ] Edit user profile

----

### Stretch Goals
**Admin/ Charity**

As a user I want to:

- [ ] Review new tickets
- [ ] Create new tickets
- [ ] Update funding status on an individual ticket
- [ ] Update area status
- [ ] Edit ticket
- [ ] Close ticket
- [ ] Review submitted proof of resoultion
