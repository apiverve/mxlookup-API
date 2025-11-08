declare module '@apiverve/mxlookup' {
  export interface mxlookupOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface mxlookupResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class mxlookupWrapper {
    constructor(options: mxlookupOptions);

    execute(callback: (error: any, data: mxlookupResponse | null) => void): Promise<mxlookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: mxlookupResponse | null) => void): Promise<mxlookupResponse>;
    execute(query?: Record<string, any>): Promise<mxlookupResponse>;
  }
}
