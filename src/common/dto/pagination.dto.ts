import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {

    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    limit?: number;

    //Es para ver los n° siguientes en la lista 
    @IsOptional()
    @IsPositive()
    @Min(0)
    @Type(() => Number)
    offset?: number;
}