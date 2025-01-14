/*   STEP 1   */
export const leagueID = "784819680538935296"; // your league ID
export const leagueName = "Deflate Dynasty Squad"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the league website of the Defiate Squad, home to low quality chat and mediocre dynasty fantasy football performance.</p>
  

`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Anand",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Croydon", // (optional)
      "bio": "Love to miss the playoffs on purpose when i could've won. Mediocre commissioner.",
      //"photo": "/managers/question.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "My own decision making", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 18055, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Can I offer you some high quality injury analysis?",
      "tradingScale": 6, // 1 - 10
      "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
//     {
//       "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "Ollie",
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": "I've sent you a trade offer",
//       "photo": "/managers/question.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Harry", // Can be anything (usually your rival's name)
//         link: 5, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 19562, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Your fantasy team's philosophy",
//       "tradingScale": 10, // 10
//       "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//     {
//       "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "JC",
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": "Bad luck story after bad luck story",
//       "photo": "/managers/question.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Choking", // Can be anything (usually your rival's name)
//         link: 2, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 2593, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Bottling it in the playoffs",
//       "tradingScale": 6, // 1 - 10
//       "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//   {
//       "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "Ali",
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": "",
//       "photo": "/managers/question.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Moron-Wardle", // Can be anything (usually your rival's name)
//         link: 9, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Your fantasy team's philosophy",
//       "tradingScale": 8, // 10
//       "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//   {
//       "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "Archie",
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": "Underwhelming roster, consistent competitor",
//       "photo": "/managers/question.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Mike", // Can be anything (usually your rival's name)
//         link: 8, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 17959, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Get lucky",
//       "tradingScale": 5, // 10
//       "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//   {
//       "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "Harry",
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": "Discipline question and headcases welcome here.",
//       "photo": "/managers/question.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Ollie", // Can be anything (usually your rival's name)
//         link: 1, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Win at all costs",
//       "tradingScale": 7, // 10
//       "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//   {
//       "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "Iain",
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": "Underwhelming roster, consistent competitor",
//       "photo": "/managers/question.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "John", // Can be anything (usually your rival's name)
//         link: 7, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Lose forever",
//       "tradingScale": 5, // 10
//       "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//   {
//       "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "John",
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": "Need someone to talk down their own trade offers? I'm your man.",
//       "photo": "/managers/question.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "bal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Iain", // Can be anything (usually your rival's name)
//         link: 6, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 16834, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Stash picks",
//       "tradingScale": 6, // 10
//       "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//   {
//       "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "Mike",
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": "Somehow better when not trying to win.",
//       "photo": "/managers/question.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Archie", // Can be anything (usually your rival's name)
//         link: 4, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 21674, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Philosophy?",
//       "tradingScale": 4, // 10
//       "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//   {
//       "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "Ben",
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": "A van in morocco", // (optional)
//       "bio": "Memories of the good old days.",
//       "photo": "/managers/question.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Ali", // Can be anything (usually your rival's name)
//         link: 3, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 4314, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Get worse",
//       "tradingScale": 3, // 10
//       "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
