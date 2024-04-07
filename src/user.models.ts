import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class User {
    @Prop()
    username: string;
    @Prop()
    description: string;
    @Prop()
    date_added: Date;
}