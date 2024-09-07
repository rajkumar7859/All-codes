# Cricket Match Scheduler

### Deployment Link:
[Cricket Match Scheduler](https://legendary-hamster-8e730e.netlify.app/)

### Description:
The **Cricket Match Scheduler** is a web application designed to manage and display cricket match schedules. Users can input match details such as the number of matches, teams playing, date, and venue through a simple form. The website consists of three main pages:

1. **Home Page**: This page includes a form where users can enter the match details including:
   - Match Number
   - Select Team A
   - Select Team B
   - Select Match Date
   - Select Venue
   
   After filling in the details, the user can click on the "Add Match" button to save the match data.

2. **Matches Page**: This page displays a list of all the added matches. The user can see match details, such as the teams, match date, and venue.

3. **Favourites Page**: On this page, users can add specific matches to their favourites. It allows them to keep track of their preferred matches for quick access.

### Features:
- **Form Input**: Users can add match details via a form on the home page.
- **Match Scheduling**: The matches are displayed in a list format on the matches page.
- **Favourites**: Users can add matches to their favourites list on the favourites page.
- **Local Storage**: All match data and favourites are saved locally using `localStorage`, so it persists across browser sessions.

### Technologies Used:
- **HTML**: For structuring the web pages.
- **CSS**: For styling and layout of the website.
- **JavaScript**: For handling form submissions, match scheduling, and managing local storage.

### How to Use:
1. Navigate to the **Home Page** to fill in the match details using the form and click "Add Match" to submit the match.
2. View all the added matches by visiting the **Matches Page**.
3. Mark matches as favourites from the **Matches Page**, and view them on the **Favourites Page**.
   
### Future Improvements:
- Integrating a backend to store match data persistently across devices.
- Adding user authentication to manage personal match schedules.
- Including additional match details, such as match results and live updates.
