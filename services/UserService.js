import UserModel from '../models/user';

export default class UserService{

    static async signUp(user) {

        /*
           const userRecord = await UserModel.create(user);
           return { user: userRecord };
         */


        return {user: "default"}


    }
}