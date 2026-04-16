export class UserModel {
    userId: string;
    phoneNumberId: string;
    wabaId: string;

    constructor(userId: string, phoneNumberId: string, wabaId: string) {
        this.userId = userId;
        this.phoneNumberId = phoneNumberId;
        this.wabaId = wabaId;
    }
}