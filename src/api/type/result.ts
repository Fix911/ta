export default interface Result<T = any> {
    errCode: number,
    errMsg: string,
    data: T
}
