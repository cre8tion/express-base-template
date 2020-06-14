import { Router } from 'express';
import middlewares from '../middlewares';
import UserService from "../../services/UserService";
const route = Router();

// API Endpoint: {url}/api/users
export default (app) => {
    app.use('/users', route);

    route.get('/helloworld', middlewares.isLoggedIn, (req, res) => {
        return res.json({ response: "Hello World!" }).status(200);
    });

    route.get('/', async (req, res, next) => {
        // The actual responsability of the route layer.
        const userDTO = req.body;

        // Call to service layer.
        // Abstraction on how to access the data layer and the business logic.
        const { user } = await UserService.signUp(userDTO);

        // Return a response to client.
        return res.json({ user });
    })
};