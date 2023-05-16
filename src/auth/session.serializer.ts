import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from '@prisma/client';
@Injectable()
export class sessionSerializer extends PassportSerializer {
    
    constructor(private readonly prisma: PrismaService) {
        super();
    }
    async deserializeUser(payload: number, done: Function): Promise <void> {
        const user: User = await this.prisma.user.findFirst({ where:{ id: payload,}});
    if(!user){
        done(new Error('User not found'))
        return;
    }
        done(null, user);
}

    serializeUser(user: any, done: (err: Error, data: any)=> void): any {
      done(null, user.id);  
    }
}
