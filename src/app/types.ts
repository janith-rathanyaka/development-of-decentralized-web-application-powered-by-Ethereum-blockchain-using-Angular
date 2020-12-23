export interface Poll {
     id : number;
     question:string;
     result: number[];
     options:string[];
     thumbnail:string;

}

export interface vouter {
     id : string;
     voted: number[];
}