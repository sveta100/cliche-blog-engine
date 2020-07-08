const handleAsyncResult = (promise) => promise.then((res) => [null, res]).catch((err) => [err]);

export default handleAsyncResult;
