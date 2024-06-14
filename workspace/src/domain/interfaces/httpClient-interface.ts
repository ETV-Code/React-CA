export interface HttpClientInterface{
  get <R>(url: string): Promise<R>
  post <T, R>(url: string, data: T): Promise<R>

}