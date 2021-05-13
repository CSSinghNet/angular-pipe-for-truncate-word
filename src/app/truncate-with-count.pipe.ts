import { Pipe, PipeTransform } from '@angular/core';
declare var $: any;

@Pipe({
  name: 'truncateWithCount',
  pure: false
})
export class TruncateWithCountPipe implements PipeTransform {

  transform(value: string, args: string[]) : string {
    let limit = args.length > 0 ? parseInt(args[0], 15) : 15;
    let trail = args.length > 1 ? args[1] : '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

 

}