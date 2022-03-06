# Disney World Wait Time Viewer (Phase 1 Project)

The Disney World wait time viewer allows users to view current wait times for across the 4 Disney World parks. This project also allows users to input their own information such as name, height, and up to 10 favorite rides. This project will then display current wait times, rides the user is not tall enough to ride, and which rides are closed. Users are able to toggle through each park to view wait times, or even choose all parks to view closed rides and wait times across all parks. This project also labels rides visually by color depending if their wait time is over 75 mins, between 75 and 45 mins, or if the ride is closed. A key is provided as the data is fetched. Ride times are facilitated by a fetch to www.queue-times.com public api.

## Installation

Once the project is cloned to your environment, you will then need to run a json server by using the following command:

```bash
json-server db.json
```
Once that is running, you can then open index.html in browser.

*****PLEASE NOTE*****

If you receive the following error upon load:

```Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://queue-times.com/en-US/parks/5/queue_times.json. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 200.```

This error can be corrected by installing this browser extension:

```https://addons.mozilla.org/en-US/firefox/addon/moesif-origin-cors-changer1/```

Once installed and activated you can add:

```www.queue-times.com```

to your allow list.
## Usage

Once the project loads, the user may select a park to view that specific park's current wait times. Or the user may select a user listed on the page, to view rides they are not tall enough to ride and their favorite rides' wait times. The user can also select to create a new user on the page. The new user form only accepts standard alpha numeric characters and the name cannot match a previously entered name. Once the users enters their name and height, they then have the option to select up to 10 favorite rides. Once a user selects a favorite, then a new list appears allowing the user to then select their next favorite. Each subsequent list, removes previously selected options. When submitted, that user's information become instantly available.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Resources
Ride times are generated through an open api available through queue-times. For more information please visit:

```https://queue-times.com/pages/api```

