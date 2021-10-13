import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})
export class ReplacePipes implements PipeTransform{
    
    transform(value: string, char: string, valueToReplace: string){
        return value.replace(char, valueToReplace) 

    }

}