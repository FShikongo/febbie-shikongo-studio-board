# Studio Board

## Overview

Studio Board is a media and production job board app that connects industry professionals with opportunities, including job openings, volunteering, networking events, access to film premieres and festivals.
It serves as a hub for filmmakers, creatives, and production professionals to find work, collaborate, and grow their networks within the film, media, and entertainment industry.

### Problem Space

The media and production industry can be difficult to break into, with many opportunities shared through word-of-mouth or closed networks. Emerging filmmakers, creatives, and production professionals often struggle to find reliable job postings, industry events, and networking opportunities in one central place. Studio Board addresses this gap by providing a dedicated platform where users can easily discover and apply for opportunities, helping them build connections and gain experience in the industry.

### User Profile

Studio Board will be used by filmmakers, actors, crew members, content creators, media professionals, entertainment agencies, and marketing/advertising firms looking to hire talent or find industry opportunities. Employers, production companies, and event organizers can use the platform to post job openings, volunteer opportunities, and networking events.

Special considerations include ensuring an intuitive user experience for both job seekers and recruiters, implementing a filtering system for relevant opportunities, and maintaining a verification process to prevent spam or fake listings. The platform should also support media uploads for portfolios and résumés to showcase user experience.

### Features

1. User Profiles - Basic profiles where users can add their résumés, portfolios, and contact info.
2. Job & Opportunity Listings - Users can post and browse job openings, volunteer roles, and industry events.
3. Search & Filtering - Basic search with filters for job type, location, and industry category.

## Implementation

### Tech Stack

Frontend:

1. React (Vite)- Fast, modern frontend framework for building the UI.
2. Sass - Utility-first styling for a clean and responsive design.
3. React Router - For navigation between pages.
4. Axios - To handle API requests efficiently.

Backend:

1. Node.js + Express.js - For building a scalable and lightweight backend.
2. MySQL - MySQL as the relational database, easy database management.

Hosting & Deployment:

1. Frontend: Vercel or Netlify (for easy and fast deployment).
2. Backend: Render or Railway (for hosting the Node.js server).
3. Database: MySQL hosting for scalability.

Potential Limitations & Considerations:

1. Free-tier Hosting Limits - Some hosting platforms have request limits, so scaling may require a paid plan.
2. Authentication Complexity - JWT auth is lightweight, but additional security measures like OAuth (Google Login) may be needed later.

### APIs

1. Google Maps API - To display job locations and event venues on an interactive map.

### Sitemap

Home Page

1. Header (Navbar)
2. Hero banner
3. Main Section - Overview of the platform with featured job listings and events.
4. Footer - Logo, social media icons

Dashboard Page

1. Header
2. Hero Banner - feature jobs
3. Main Section - Job board table
4. Footer

Job/Event Details Page

1. Header
2. Hero Banner
3. Main Section - Displays all job listings with filters; includes a modal/component for job details and applications.
4. Footer

Apply Modal

1. Header
2. Hero Banner
3. Modal - title, message, button (apply, cancel), exit icon

### Mockups
Home Page
![Home Page](/asset/Images/Mockup-Home_Page.png)

Dashboard
![Dashboard](/asset/Images/Mockup-Dashboard.png)

Job/Event Detail
![Job/Event Details](/asset/Images/Mockup-Job_Event_Details.png)

Apply Modal
![Apply Modal](/asset/Images/Mockup-Apply_Modal.png)






### Data

Job Listings

- id
- title
- company_id
- location
- job_type (full-time, part-time, contract, freelance, internship, volunteer)
- description
- requirements
- posted_at
- Relationships:
  - A job belongs to one employer but can have many applicants.

Users (Applicants & Employers)

- id
- name
- email (unique)
- password (hashed)
- role (applicant, employer, admin)
- profile_picture (optional)
- bio (optional)
- resume_url (applicants)
- company_name (employers)
- Relationships:
  - Users can apply to multiple jobs.
  - Employers can post multiple job listings.

### Endpoints

Job Listings

1. GET /jobs
   Parameters: - type (string, optional) - location (string, optional)
   Response: - 200 OK (success) - Example Response: [ { "id": 1, "title": "Film Editor", "company": "Studio A", "location": "Toronto", "description": "Editing various film projects..." } ]

2. POST /jobs
   Parameters: - title (string) - description (string) - location (string) - job_type (string) - company_id
   Response: - 201 Created (success) - Example Response: { "message": "Job posted successfully", "job_id": 1 }

3. GET /jobs/:id
   Parameters: - id (int, job id)
   Response: - 200 OK (success) - Example Response: { "id": 1, "title": "Film Editor", "description": "Editing various film projects..." }

4. PUT /jobs/:id
   Parameters: - title (string, optional) - description (string, optional) - location (string, optional)
   Response: - 200 OK (success) - Example Response: { "message": "Job updated successfully" }

5. DELETE /jobs/:id
   Parameters: - id (int, job id)
   Response: - 200 OK (success) - Example Response: { "message": "Job deleted successfully" }

## Roadmap

Roadmap: 2-Week MVP Sprint Plan

Week 1: Core Development & Setup
✅ Day 1-2:
Finalize feature list & tech stack
Set up GitHub repository & project structure
Initialize MySQL database & define ERD
Set up backend (Express.js, Node.js, MySQL)

✅ Day 3-4:
Implement job listing CRUD functionality
Build frontend structure with React & Sass
Connect frontend to backend API

✅ Day 5-7:
Implement job search & filtering
Style core pages (home, job board, event board)
Test backend endpoints with Postman

Week 2: UI/UX, Testing & Deployment
✅ Day 8-10: - Form validation & error handling - Implement authentication on frontend (JWT) - Optimize database queries & API performance - Refine UI/UX for better user experience

✅ Day 11-12: - User testing for functionality & responsiveness - Debug & fix critical issues - Final refinements & polish UI

✅ Day 13-14: - Deploy backend (Heroku) - Deploy frontend (Netlify) - Final testing & bug fixes - Prepare capstone presentation materials - Submit project

---

## Future Implementations

Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.

Future Implementations

1. Events Page - Lists networking events, film festivals, and industry meetups. Implement event listing CRUD functionality
2. Post a Job Page - Employers submit job listings (can be a form modal on the Jobs Page).
3. Dashboard Page - User's personalized space with saved jobs, applications, and recommendations.
4. Profile Page - Users manage personal details, résumés, and portfolios.
5. Admin Page - Manages users, job listings, and reported content.
6. Nodemailer - For sending email notifications to users about job applications and updates.
7. Storage - For hosting user-uploaded images, résumés, and portfolio media.
8. Authentication (JWT - JSON Web Tokens) - Implement user authentication (signup/login) For social login options like Google or LinkedIn authentication in future versions.
