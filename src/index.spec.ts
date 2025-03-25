import * as publicBase from '@salesforce/scv-connector-base';
describe('TS declarations test', () => {
  test('test public scv-connector-base ', async () => {
    expect(publicBase.Constants.CALL_TYPE.CONSULT).toBe("Consult");
    expect(Object.keys(publicBase).length).toBe(48);
  });
});
