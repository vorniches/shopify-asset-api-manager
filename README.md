# Shopify Asset API Manager

A package for making requests to the Shopify Asset API to manage assets in a theme.

## Installation

```
npm install shopify-asset-api-manager
```

## Usage

```javascript
import AssetAPIRequest from 'shopify-asset-api-manager';

const request = new AssetAPIRequest(
  'example_asset_key',
  'example_asset_value',
  'example_store',
  '2022-01',
  '12345',
  'abcdefghijklmnopqrstuvwxyz'
);
request.makeRequest();
```

## API

### AssetAPIRequest

```javascript
constructor(assetKey: string, assetValue: string, storeName: string, apiVersion: string, themeID: string, accessToken: string)
```

Creates a new `AssetAPIRequest` instance.

#### Parameters

- `assetKey`: The key of the asset to be updated.
- `assetValue`: The new value for the asset.
- `storeName`: The name of the Shopify store.
- `apiVersion`: The version of the Shopify API to use.
- `themeID`: The ID of the theme to update.
- `accessToken`: The access token for authenticating the request.

```javascript
makeRequest(): void
```

Makes a request to the Shopify Asset API to update the asset.

## Contributing

If you find a bug or have an idea for a new feature, please open an issue or pull request on the [GitHub repository](https://github.com/vorniches/shopify-asset-api-manager).

## License

The `shopify-asset-api-manager` is released under the [MIT License](https://opensource.org/licenses/MIT).
