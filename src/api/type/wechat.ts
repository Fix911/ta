interface Company {
    id:string,
    corpId:string,
    name:string
}

export interface Teacher {
    id:string,
    name:string,
    avatar:string,
    role:string,
    company:Company
}
export interface Data {
    token: string,
    teacher:Teacher
}
