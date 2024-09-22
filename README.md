# Snippeteer

Snippeteer is an open-source platform for sharing, collaborating on, and challenging yourself with code snippets and HTML projects. It's designed to be easily deployed on Vercel and provides a user-friendly interface for developers to showcase their work, learn from others, and participate in coding challenges.

## Features

- User registration and authentication
- Code snippet submission (HTML, CSS, JavaScript)
- Syntax highlighting for various programming languages
- Search functionality with advanced filters
- User profiles and dashboards
- Commenting system for snippets
- Upvoting system for snippets
- Tagging and categorization of snippets
- Admin-created coding challenges
- Challenge association for snippets
- Live URL preview of snippet results
- Snippet forking and versioning
- Collaborative editing
- Responsive design with dark mode option
- Social sharing functionality
- OAuth support for social media login
- API for third-party integrations
- Snippet analytics (views, upvotes, shares)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- A Vercel account for deployment

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/digitaldrreamer/snippeteer.git
   ```

2. Navigate to the project directory:
   ```
   cd snippeteer
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up environment variables:
   Create a `.env.local` file in the root directory and add the necessary environment variables (see `.env.example` for reference).

5. Run the development server:
   ```
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

### Deployment

Snippeteer is designed to be easily deployed on Vercel, as well as any environment that support NodeJS (specifically SvelteKit). Follow these steps to deploy to Vercel:

1. Push your code to a GitHub repository.
2. Connect your GitHub account to Vercel.
3. Create a new project on Vercel and select the Snippeteer repository.
4. Configure the environment variables in the Vercel dashboard.
5. Deploy the project.

### One-click deploy to Vercel coming soon

## Using Snippeteer

### Posting Code Snippets
Users can easily post code snippets or entire HTML projects. Each snippet can be associated with tags, categories, and even specific coding challenges.

### Viewing Snippets
Each snippet has a unique URL where users can view the code, comments, and upvotes. A live preview URL is also available to see the result of HTML/CSS/JS snippets in action.

### Challenges
Administrators can create coding challenges. Users can then submit their solutions by associating their snippets with these challenges.

### Interaction
Users can comment on snippets, upvote their favorites, and even fork snippets to create their own versions.

## Contributing

We welcome contributions to Snippeteer! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Special thanks to the open-source community for providing the tools and libraries that make this project possible.

## Contact

For any inquiries or support, please open an issue on GitHub or contact us at support@snippeteer.xyz.

Visit our website: [https://snippeteer.xyz](https://snippeteer.xyz) (WIP)
