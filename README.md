 Clone the Repository
git clone https://github.com/your-username/mean-admin-dashboard.git
cd mean-admin-dashboard

2. Set Up Backend
cd backend
npm install


Create a .env file and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Start the server:

node server.js

3. Set Up Frontend
cd frontend
npm install
ng serve
