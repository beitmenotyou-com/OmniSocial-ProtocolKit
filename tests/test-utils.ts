// tests/test-utils.ts

export function mockRequest(body = {}) {
  return { body };
}

export function mockResponse() {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
}
