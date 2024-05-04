# Strapi

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the project root.
   - Define the following environment variables:

     ```
     DATABASE_HOST=localhost
     DATABASE_PORT=5432
     DATABASE_NAME=mydatabase
     DATABASE_USERNAME=myusername
     DATABASE_PASSWORD=mypassword
     DATABASE_SSL=false
     ```

4. Start the server:

   ```
   npm run develop
   ```

## Usage

- Connect to the WebSocket API at `ws://localhost:3001` to establish real-time communication.
