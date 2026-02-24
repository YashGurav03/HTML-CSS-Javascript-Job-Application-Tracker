# JobTracker - Job Application Tracker

JobTracker is a sleek and interactive web app designed to help users efficiently manage and track their job applications. Keep tabs on applications, interviews, and offers—all in one place.

## Features

- **Dashboard Overview:** See total applications, applications submitted, interviews scheduled, and offers received.
- **Add/Edit/Delete Jobs:** Easily manage your job applications with intuitive forms and action buttons.
- **Search & Filter:** Quickly find jobs by company or role, and filter applications by status (Applied, Interview, Offer, Rejected).
- **Theme Toggle:** Switch between light and dark modes for comfortable viewing.
- **Persistent Storage:** All data is stored in your browser using `localStorage`, so your entries persist across sessions.
- **Responsive & Modern UI:** Optimized for all screen sizes, with smooth hover effects, animated job cards, and status badges.

## Project Structure

- **/index.html** - Main HTML page
- **/css/style.css** - Stylesheet for layout, colors, and animations
- **/js/script.js** - JavaScript for interactivity, storage, and dashboard updates

## Usage

1. Open `index.html` in any modern web browser.
2. Use the **Add Job** form to submit a new application with company, role, date, and status.
3. Jobs appear as **cards** in the dashboard.  
   - **Edit** to update an entry.  
   - **Delete** to remove an entry.
4. Use the **Search** bar to filter jobs by company or role.
5. Use the **Filter dropdown** to view jobs by their current status.
6. Dashboard counters update in real-time, showing the total applications and counts for Applied, Interview, and Offer.
7. Toggle between **Light** and **Dark mode** using the moon/sun button 🌙☀️.

## Styling & Design

- **Responsive Design:** Grid layout adjusts to different screen sizes.
- **Animations:** Subtle fade-in for job cards, smooth hover transitions on buttons and cards.
- **Status Badges:** Color-coded badges for Applied, Interview, Offer, and Rejected statuses.
- **Typography:** Uses Google Fonts 'Poppins' for a clean, readable interface.
- **Modern UI Elements:** Rounded buttons, gradient backgrounds, and a visually appealing dashboard.

## Functionality Highlights

- **Data Persistence:** Jobs are saved in the browser with `localStorage`.
- **Interactive Dashboard:** Animated counters update as jobs are added, edited, or removed.
- **Filtering & Searching:** Real-time search and filter capabilities for easy management.
- **Theme Switching:** Toggle between dark and light modes with a single click.

## Screenshots

### Dashboard
![Dashboard Screenshot](assets/screenshot-dashboard.png)

### Add Job Form
![Add Job Form](assets/screenshot-form.png)

### Dark Mode
![Dark Mode Screenshot](assets/screenshot-dark.png)
