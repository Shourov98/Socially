# Socially

This is a social network site. **Next.js** application with authentication, database integration, and image upload capabilities. This project leverages modern technologies and frameworks to provide a seamless development experience.
[Socially](https://socially-flax.vercel.app/) Live site

## Features
- **Authentication**: Powered by [Clerk](https://clerk.dev) for secure and easy user authentication.
- **Database Service**: Uses [Prisma](https://www.prisma.io) as the ORM for efficient database management.
- **Image Upload**: Handled by [UploadThings](https://uploadthings.com) for seamless image upload functionality.
- **Modern UI**: Built with **Tailwind CSS** and **shadcn UI** for a responsive and customizable design.
- **TypeScript**: Ensures type safety and better developer experience.

## Getting Started

### Installation

Follow these steps to clone and run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Shourov98/Socially.git
   cd socially
   ```

2. **Install Dependencies**:
   Use npm or yarn to install the project dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root of the project and add the following variables:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
   CLERK_API_KEY=<your-clerk-api-key>
   DATABASE_URL=<your-prisma-database-url>
   UPLOADTHINGS_SECRET=<your-uploadthings-secret>
   ```
   Replace the placeholders with your actual API keys and database connection string.

4. **Run Database Migrations**:
   Use Prisma to apply migrations to your database:
   ```bash
   npx prisma migrate dev
   ```

5. **Start the Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:3000`.

## Technologies Used
- **Next.js**: React-based framework for building server-side rendered and statically generated web applications.
- **TypeScript**: A statically typed superset of JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for custom design.
- **shadcn UI**: Pre-built components for modern UI development.
- **Clerk**: Authentication solution for secure user management.
- **Prisma**: Next-generation ORM for database access.
- **UploadThings**: Simplified image upload handling.

### Build for Production
To create a production build:
```bash
npm run build
# or
yarn build
```
Then, start the production server:
```bash
npm start
# or
yarn start
```

## Folder Structure
```
project-folder/
├── src/
│   ├── components/   # Reusable components
│   ├── pages/        # Next.js pages
│   ├── prisma/       # Prisma schema and migrations
│   ├── styles/       # Tailwind CSS configurations
│   └── utils/        # Utility functions
├── public/           # Static assets
├── .env              # Environment variables
├── next.config.js    # Next.js configuration
└── README.md         # Project documentation
```

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

## License
This project is licensed under the [MIT License](LICENSE).

---

Enjoy building with **Next.js**, **Clerk**, **Prisma**, **UploadThings**, and **Tailwind CSS**!
