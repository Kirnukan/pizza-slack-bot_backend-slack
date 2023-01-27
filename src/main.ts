import {IInfo} from "./interfaces/IInfo";

const myInfo: IInfo = {
    code: 9,
    email: "serjant.saygon@gmail.com",
    name: "Sergey",
    phone: "+79112323123",
}

const main = (info: IInfo): string => {
    return `Hello, I'm ${info.name}, my code is ${info.code},
e-mail ${info.email} and phone ${info.phone}`
}

console.log(main(myInfo))