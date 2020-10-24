export class UserDto{
    id: number;
    name : string;
    address: string;

    constructor(id: number, name: string , address: string){
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
// export interface UserDto{
//     id: number;
//     name : string;
//     address: string;
// }