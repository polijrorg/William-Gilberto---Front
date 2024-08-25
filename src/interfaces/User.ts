export default interface User {
    id: string;
    name: string;
    email: string;
    cpf: string;
    password?: string;
    created_at: Date;
    uptaded_at: Date;
}
