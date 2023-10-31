export class User {
    id: string;
    name: string;
    email: string;
    image: string;
    valid:boolean;
    rfc:string;
    phone:string;
    address:string;
    city:string;
    state:string;

    constructor(
        id: string,
        name: string,
        email: string,
        image: string,
        valid:boolean,
        rfc:string,
        phone:string,
        address:string,
        city:string,
        state:string,
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.image = image;
        this.valid = valid;
        this.rfc = rfc;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.state = state;
    }

}
