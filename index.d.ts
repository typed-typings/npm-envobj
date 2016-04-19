declare function envobj <T> (config: envobj.Config): T;

declare namespace envobj {
  export interface Config {
    [key: string]: string | number | boolean | typeof Number | typeof String | typeof Boolean;
  }
}

export = envobj;