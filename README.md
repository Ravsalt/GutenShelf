# GutenShelf 📚



GutenShelf is a free and open-source online book library designed to democratize access to knowledge. Browse classics, discover hidden gems, or build your own virtual bookshelf—without ads, paywalls, or bullshit.

## About GutenShelf

GutenShelf is a free and open-source online book library dedicated to democratizing access to knowledge. It offers a seamless experience for discovering and reading books, built with a focus on user experience, performance, and accessibility.

## Features

- **Vast Library**: Access a wide range of classics, bestsellers, and hidden gems.
- **User-Friendly Interface**: Intuitive design for seamless browsing and reading.
- **Free & Open Source**: No ads, no paywalls, open for contributions.
- **Modern Stack**: Built with React, Vite, Bun, and Hono for a dynamic, performant, and type-safe experience.

## Project Structure

GutenShelf is organized as a monorepo with the following key directories:

- `client/`: The React frontend application.
- `server/`: The Hono backend API.
- `shared/`: Contains shared TypeScript definitions used by both client and server.

### Server

GutenShelf uses Hono as its backend API, handling book data and search queries.

### Client

The client is built with Vite and React, providing a flexible and modern frontend for the application.

### Shared

This package contains TypeScript definitions and other utilities shared between the client and server.

## Getting Started

To get started with GutenShelf, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Ravsalt/GutenShelf.git
    cd GutenShelf
    ```
2.  **Install dependencies:**
    ```bash
    bun install
    ```
3.  **Run the development server:**
    ```bash
    bun run dev
    ```
    This will start both the client and server in development mode.

## Deployment

Each part of GutenShelf (client and server) can be deployed independently. Refer to the documentation of Vite (for client) and Hono (for server) for deployment options.

## Contributing

We welcome contributions to GutenShelf! Please see our [GitHub repository](https://github.com/Ravsalt/GutenShelf) for more details on how to contribute.
