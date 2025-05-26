# BrainStation Capstone Project: Studio Board! 🎬 

### Backend: https://github.com/FShikongo/febbie-shikongo-studio-board-backend.git

## Overview

Studio Board is a media and production job board app that connects industry professionals with opportunities, including job openings, volunteering, networking events, access to film premieres, and festivals. It serves as a hub for filmmakers, creatives, and production professionals to find work, collaborate, and grow their networks within the film, media, and entertainment industry.

### Problem Space

The media and production industry can be difficult to break into, with many opportunities shared through word-of-mouth or closed networks. Emerging filmmakers, creatives, and production professionals often struggle to find reliable job postings, industry events, and networking opportunities in one central place. Studio Board addresses this gap by providing a dedicated platform where users can easily discover and apply for opportunities, helping them build connections and gain experience in the industry.

### User Profile

Studio Board will be used by filmmakers, actors, crew members, content creators, media professionals, entertainment agencies, and marketing/advertising firms looking to hire talent or find industry opportunities. Employers, production companies, and event organizers can use the platform to post job openings, volunteer opportunities, and networking events.

### Features

1. **Job & Opportunity Listings** - Users can post and browse job openings, volunteer roles, and industry events.
2. **Search & Filtering** - Users can search and filter listings by job type, location, and category.
3. **Event Listings** - Film festivals, networking events, and industry meetups.


## Implementation

### Tech Stack

#### **Frontend:**

1. **React (Vite)** - Fast and modern frontend framework.
2. **Sass (SCSS)** - Utility-first styling for clean and responsive design.
3. **React Router** - Handles navigation between pages.
4. **Axios** - For efficient API requests.

#### **Backend:**

1. **Node.js + Express.js** - Scalable backend framework.
2. **JSON** - Relational database for structured data.

#### **Additional:**

Additional tools such as Vite for development efficiency and Sass (SCSS) for styling.

## Sitemap

### **Home Page**

1. Header (Navbar)
2. Hero banner
3. Featured Job Listings & Events
4. Partnership Showcase
5. Call-to-Action (Sign up, Browse Jobs)
6. Footer
   
### **Event Page**

1. Header (Navbar)
2. Featured Events
3. Partnership Showcase
4. Footer

### **Job/Event Board**

1. Search bar & filters
2. List of job opportunities & events
3. Clickable job cards for more details
4. Footer

### **Details Modal**

1. Job/event title, description, requirements
2. Apply button
3. Contact information

   

## Data Structure

### **Job Listings**

- `id`
- `title`
- `company_id`
- `location`
- `job_type` (full-time, part-time, contract, freelance, internship, volunteer)
- `description`
- `requirements`
- `posted_at`

## Endpoints

### **Job Listings**

1. **GET /jobs** - Retrieves all job listings.
2. **POST /jobs** - Creates a new job posting.
3. **GET /jobs/:id** - Retrieves job details.
4. **PUT /jobs/:id** - Updates a job listing.
5. **DELETE /jobs/:id** - Deletes a job listing.

## Roadmap

### **MVP (2-Week Sprint Plan)**

#### **Week 1 - Setup & Core Functionality**

- Set up frontend & backend repo
- Implement database schema
- Create basic frontend UI
- Implement job listing CRUD functionality
- Connect frontend to backend API
- Implement search & filter functionality

#### **Week 2 - Enhancements**

- Optimize UI/UX for better user experience
- Add form validation & error handling
- Final bug fixes & testing

## Future Implementations

1. **User Profiles** - Manage personal details, portfolios, and résumés.
2. **Dashboard Page** - Personalized space with saved jobs, applications, and recommendations.
3. **OAuth Authentication** - Support for Google/LinkedIn login. 
4. **AI Matching System** - Suggests relevant job postings based on user profile.

---

### 🚀 **Capstone Goal:** Build a functional prototype of Studio Board to streamline networking and job hunting in the media industry!
