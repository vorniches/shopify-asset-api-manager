import AssetAPIRequest from '../src/AssetAPIRequest';

describe('AssetAPIRequest', () => {
  let request;

  beforeEach(() => {
    request = new AssetAPIRequest(
      'example_asset_key',
      'example_asset_value',
      'example_store',
      '2022-01',
      '12345',
      'abcdefghijklmnopqrstuvwxyz'
    );
  });

  it('should create an instance of AssetAPIRequest', () => {
    expect(request).toBeInstanceOf(AssetAPIRequest);
  });

  it('should have a makeRequest method', () => {
    expect(request.makeRequest).toBeInstanceOf(Function);
  });
});
