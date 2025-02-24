# Studio Board

## Overview

Studio Board is a media and production job board app that connects industry professionals with opportunities, including job openings, volunteering, networking events, access to film premieres, and festivals. It serves as a hub for filmmakers, creatives, and production professionals to find work, collaborate, and grow their networks within the film, media, and entertainment industry.

### Problem Space

The media and production industry can be difficult to break into, with many opportunities shared through word-of-mouth or closed networks. Emerging filmmakers, creatives, and production professionals often struggle to find reliable job postings, industry events, and networking opportunities in one central place. Studio Board addresses this gap by providing a dedicated platform where users can easily discover and apply for opportunities, helping them build connections and gain experience in the industry.

### User Profile

Studio Board will be used by filmmakers, actors, crew members, content creators, media professionals, entertainment agencies, and marketing/advertising firms looking to hire talent or find industry opportunities. Employers, production companies, and event organizers can use the platform to post job openings, volunteer opportunities, and networking events.

### Features

1. **User Profiles** - Users can create profiles, upload résumés, portfolios, and contact details.
2. **Job & Opportunity Listings** - Users can post and browse job openings, volunteer roles, and industry events.
3. **Search & Filtering** - Users can search and filter listings by job type, location, and category.
4. **Application System** - Users can apply directly for jobs or events.
5. **Event Listings** - Film festivals, networking events, and industry meetups.
6. **Admin Dashboard** - Manages user accounts, job postings, and event moderation.

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
3. **JWT Authentication** - Secure user authentication.
4. **Nodemailer** - Sends email notifications for job applications and updates.

#### **Hosting & Deployment:**

1. **Frontend:** Netlify or Vercel (for fast deployment).
2. **Backend:** Render or Railway (for hosting the Node.js server).
3. **Database:** Hosted MySQL service for scalability.

### APIs

- **Google Maps API** - Displays job locations and event venues on an interactive map.

## Sitemap

### **Home Page**

1. Header (Navbar)
2. Hero banner
3. Featured Job Listings & Events
4. Call-to-Action (Sign up, Browse Jobs)
5. Footer

### **Dashboard Page**

1. User profile overview
2. Saved jobs & applications
3. Recommended jobs & events
4. Footer

### **Job/Event Board**

1. Search bar & filters
2. List of job opportunities & events
3. Clickable job cards for more details
4. Footer

### **Job/Event Details Page**

1. Job/event title, description, requirements
2. Apply button
3. Contact information
4. Related job recommendations

### **Apply Modal**

1. Form for user application submission
2. Confirmation message
3. Submit & cancel options

## Mockups

### **Home Page**

![](/src/asset/Images/Mockup-Home_Page.png)

### **Dashboard Page**

![](/src/asset/Images/Mockup-Dashboard.png)

### **Job Event Details Page**

![](/src/asset/Images/Mockup-Job_Event_Details.png)

### **Apply Modal**

![](/src/asset/Images/Mockup-Apply_Modal.png)

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

### **Users (Applicants & Employers)**

- `id`
- `name`
- `email` (unique)
- `password` (hashed)
- `role` (applicant, employer, admin)
- `profile_picture` (optional)
- `bio` (optional)
- `resume_url` (applicants)
- `company_name` (employers)

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

#### **Week 2 - Enhancements & Deployment**

- Implement user authentication
- Optimize UI/UX for better user experience
- Add form validation & error handling
- Deploy frontend & backend
- Final bug fixes & testing

## Future Implementations

1. **User Profiles** - Manage personal details, portfolios, and résumés.
2. **Events Page** - List networking events, film festivals, and industry meetups.
3. **Dashboard Page** - Personalized space with saved jobs, applications, and recommendations.
4. **Admin Page** - Moderation tools for jobs and users.
5. **OAuth Authentication** - Support for Google/LinkedIn login.
6. **Payment Integration** - Premium job postings for employers.
7. **AI Matching System** - Suggests relevant job postings based on user profile.

---

### 🚀 **Capstone Goal:** Build a functional prototype of Studio Board to streamline networking and job hunting in the media industry!
