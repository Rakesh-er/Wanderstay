# WanderStay

WanderStay is a full-stack web application for managing travel listings, similar to Airbnb. Users can browse, create, edit, and delete listings for accommodations, leave reviews, and upload images. The app features user authentication, secure image handling, and interactive maps.

**Access the app**:
   Open your browser and go to `https://wanderstay-project-l30l.onrender.com/listings`

## Features

- **User Authentication**: Secure registration and login using Passport.js with local strategy.
- **Listing Management**: Create, read, update, and delete (CRUD) operations for travel listings.
- **Reviews System**: Users can add and manage reviews for listings.
- **Image Uploads**: Cloudinary integration for secure image storage and management.
- **Interactive Maps**: Google Maps integration for location visualization.
- **Filtering**: Advanced filtering options for listings (e.g., by location, price).
- **Responsive Design**: Mobile-friendly UI using Bootstrap and custom CSS.
- **Flash Messages**: User feedback for actions like successful login or errors.
- **Error Handling**: Comprehensive error handling with custom error pages.
- **Session Management**: Secure session handling with express-session.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS templating engine, Bootstrap, CSS, JavaScript
- **Authentication**: Passport.js with passport-local strategy
- **Image Handling**: Cloudinary with multer for file uploads
- **Maps**: Google Maps API
- **Validation**: Joi for schema validation
- **Security**: Helmet for security headers, express-session for sessions
- **Other**: connect-flash for flash messages, method-override for HTTP methods, ejs-mate for layouts

## Usage

### User Registration and Login
- Visit the homepage and click "Sign Up" to create an account.
- Log in with your credentials.
- Authenticated users can create, edit, and delete their own listings and reviews.

### Managing Listings
- **View Listings**: Browse all listings on the index page.
- **Create Listing**: Click "Add New Listing" and fill in the form (title, description, price, location, images).
- **Edit/Delete Listing**: Only the owner can edit or delete their listings from the listing detail page.

### Adding Reviews
- On a listing's detail page, authenticated users can add reviews.
- Reviews include a rating and comment.

### Filtering Listings
- Use the filters on the listings page to search by location, price range, etc.

## Project Structure

```
wanderstay/
├── app.js                 # Main application file
├── package.json           # Dependencies and scripts
├── cloudConfig.js         # Cloudinary configuration
├── middleware.js          # Custom middleware
├── schemaValidation.js    # Joi validation schemas
├── controller/            # Route controllers
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── init/                  # Database initialization
│   ├── data.js            # Sample data
│   └── index.js           # Init script
├── models/                # Mongoose models
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/                # Static assets
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── map.js
│       ├── script.js
│       └── tax-switch.js
├── routes/                # Express routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── utils/                 # Utility functions
│   ├── ExpressError.js
│   └── wrapAsync.js
└── views/                 # EJS templates
    ├── includes/          # Partial templates
    │   ├── filters.ejs
    │   ├── flash.ejs
    │   ├── footer.ejs
    │   └── navbar.ejs
    ├── layouts/
    │   └── boilerplate.ejs
    ├── listings/          # Listing-related views
    │   ├── index.ejs
    │   ├── show.ejs
    │   ├── new.ejs
    │   ├── edit.ejs
    │   └── error.ejs
    └── users/             # User-related views
        ├── login.ejs
        └── signup.ejs
```

## Workflow

### Development Workflow
1. **Setup Environment**: Follow installation steps above.
2. **Develop Features**:
   - Modify models, controllers, routes, or views as needed.
   - Use EJS for frontend changes, Express for backend logic.
3. **Test Locally**: Run the app and test new features.
4. **Database Changes**: Update models and run init scripts if needed.
5. **Commit Changes**: Use Git for version control.
6. **Deploy**: Push to hosting platform (e.g., Heroku, Vercel) with environment variables configured.

### App Workflow
1. **User Visits Site**: Loads homepage with listings index.
2. **Authentication**: User signs up/logs in via Passport.
3. **Browse Listings**: User views listings, applies filters.
4. **View Details**: Click on listing to see full details, reviews, map.
5. **Create/Edit Listing**: Authenticated user adds/edits listing with image upload.
6. **Add Review**: User submits review on listing page.
7. **Error Handling**: Any errors redirect to error page with message.

### Data Flow
- User request → Route → Controller → Model (DB interaction) → View (render response)
- Image uploads → Multer → Cloudinary → Store URL in DB
- Authentication → Passport → Session → User data in res.locals

### API Routes for Listings  (`/listings`)
- `GET /listings` - Get all listings (with filters)
- `GET /listings/new` - Show new listing form
- `POST /listings` - Create new listing
- `GET /listings/:id` - Show specific listing
- `GET /listings/:id/edit` - Show edit form
- `PUT /listings/:id` - Update listing
- `DELETE /listings/:id` - Delete listing

## License

This project is licensed under the ISC License.
