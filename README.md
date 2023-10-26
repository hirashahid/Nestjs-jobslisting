# Job Listing Project

The Job Listing Project is an innovative and dynamic online platform designed to bridge the gap between job seekers and employers. This project aims to provide a comprehensive, user-friendly, and efficient solution for individuals looking for employment opportunities and organizations seeking qualified talent.

## Table of Contents

- [Features](#features)
- [Technology](#technology)
- [Installation](#installation)
- [Verify Installation](#verify-installation)
- [Cloning the Repository](#cloning-the-repository)
- [Running the app](#running-the-app)
- [Test](#test)

## Features

- User-Friendly Interface: Intuitive design for easy navigation.
- Advanced Search and Filters: Precise job searching with location, company and title.
- Comprehensive Job Postings: Detailed job descriptions with company info.

## Technology

- [Node.js](https://nodejs.org/) (v16.14.2)
- [PostgreSQL](https://www.postgresql.org/) (v15.4)
- [pnpm](https://pnpm.js.org/) (v8.7.1) (Package Manager)

## Installation

Follow the platform-specific instructions below to set up your environment:

### Windows

1. **Node.js**:

   - Download and install Node.js version 16.14.2 from [nodejs.org](https://nodejs.org/).

2. **PostgreSQL**:
   - Download and install PostgreSQL version 15.4 for Windows from [postgresql.org](https://www.postgresql.org/download/windows/).
   - During installation, make note of the PostgreSQL password you set for the default 'postgres' user, as you'll need it later.

### macOS

1. **Node.js**:

   - Install [Homebrew](https://brew.sh/), if not already installed.
   - Install Node.js version 16.14.2 using Homebrew:
     ```bash
     brew install node@16
     ```

2. **PostgreSQL**:
   - Install PostgreSQL version 15.4 using Homebrew:
     ```bash
     brew install postgresql@15
     ```
   - Follow the instructions provided by Homebrew to start the PostgreSQL service.

### Linux (Ubuntu)

1. **Node.js**:

   - Install Node.js version 16.14.2 using NodeSource's Node.js repository:
     ```bash
     curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
     sudo apt-get install -y nodejs
     ```

2. **PostgreSQL**:
   - Install PostgreSQL version 15.4 on Ubuntu:
     ```bash
     sudo apt-get install postgresql-15
     ```
   - Follow the prompts during installation to set the 'postgres' user password.

## Verify Installation

To verify that Node.js and PostgreSQL are correctly installed, run the following commands:

- **Node.js**:

  ```bash
  node -v

  ```

- **PostgreSQL**:
  ```bash
  psql --version
  ```

## Cloning the Repository

To get a local copy of this project up and running, follow these steps:

1. Open your terminal or command prompt.

2. Navigate to the directory where you want to store the project:

   ```bash
   cd /path/to/your/directory

   ```

3. Clone the repository by running the following command:

   ```bash
   git clone https://github.com/hirashahid/jobslisting.git

   ```

4. Once the cloning process is complete, navigate to the project's directory:
   ```bash
   cd jobslisting
   ```

## Configuration

1. **Environment Variables:**

   - Create a `.env` file in the root directory of the project.
   - Copy all environment variables from `.env.example` and add in .env file, then fill in the values

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
