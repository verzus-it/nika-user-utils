export class UserUtils {
    static validateId(userId:any):number|never {
        const userIdParsed:number = parseInt(userId, 10) || 0;

        if (userIdParsed <= 0)
            throw new Error(`Got invalid user ID.`);

        return userIdParsed;
    }
}