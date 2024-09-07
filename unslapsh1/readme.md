# Unsplash Clone - Image Search and Download Platform

[Live Demo](https://tranquil-banoffee-005265.netlify.app/)

**Unsplash Clone** is a web application that allows users to search for high-quality images, wallpapers, and trending photos from a wide range of categories. This project is inspired by the popular Unsplash platform and integrates an external image API to deliver a vast collection of free, high-resolution images to users. 

## Key Features

- **Image Search**: Users can search for any type of image by entering relevant keywords. The platform fetches real-time data using a third-party API.
- **Trending Images**: Discover the most popular and trending images currently available on the platform.
- **Filter by Categories**: Users can filter images by various categories, such as Nature, Technology, Animals, and more, to find images that suit their needs.
- **High-Resolution Downloads**: Each image can be downloaded in high resolution directly from the search results or trending section.
- **Responsive Design**: The platform is fully responsive and provides an optimal user experience across desktops, tablets, and mobile devices.

## Technologies Used

- **HTML5**: Provides the structure for the web application, with semantic elements ensuring good accessibility.
- **CSS3**: Ensures a modern and responsive design using Flexbox and Grid layouts.
- **JavaScript (ES6)**: Adds dynamic functionality to the application, handling the search feature, category filtering, and API integration.
- **Image API**: Fetches real-time images and provides data for various categories, trending photos, and search results.
  
## API Integration

The platform is powered by an external API that provides access to thousands of free, high-quality images. The API allows users to:
- **Search for images** based on keywords.
- **Browse trending images** updated in real-time.
- **Filter images** by different categories.

API calls are made using JavaScript's `fetch()` method to retrieve image data and display it dynamically on the front end.

## How It Works

1. **Search Functionality**: 
   - Users can enter keywords (e.g., "mountains", "cars", "architecture") into the search bar.
   - JavaScript captures the input and sends a request to the image API to fetch matching results.
   - The results are displayed in a grid layout, with each image card featuring a thumbnail, category, and download button.

2. **Category Filters**:
   - Users can select a category from a dropdown menu, which triggers a filter function.
   - This sends an API request to fetch images that belong to the selected category.

3. **Trending Section**:
   - The platform also highlights trending images in a dedicated section, making it easy for users to discover popular content.
   - Users can download trending images directly from the section.