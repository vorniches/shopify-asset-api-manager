/**
 * @param {string} assetKey - The key of the asset to be updated.
 * @param {string} assetValue - The new value for the asset.
 * @param {string} storeName - The name of the Shopify store.
 * @param {string} apiVersion - The version of the Shopify API to use.
 * @param {string} themeID - The ID of the theme to update.
 * @param {string} accessToken - The access token for authenticating the request.
 */

class AssetAPIRequest {
    constructor(assetKey, assetValue, storeName, apiVersion, themeID, accessToken) {
        this.assetKey = assetKey;
        this.assetValue = assetValue;
        this.storeName = storeName;
        this.apiVersion = apiVersion;
        this.themeID = themeID;
        this.accessToken = accessToken;
    }
    
    makeRequest() {
        const data = {
            asset: {
            key: this.assetKey,
            value: this.assetValue
        }
    };
    
    const options = {
        hostname: `${this.storeName}.myshopify.com`,
        port: 443,
        path: `/admin/api/${this.apiVersion}/themes/${this.themeID}/assets.json`,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': this.accessToken
        }
    };
    
    const req = https.request(options, res => {
        let result = '';
        res.on('data', chunk => {
            result += chunk;
        });
        res.on('end', () => {
            console.log(result);
        });
    });
    
    req.on('error', error => {
        console.error(error);
    });
    
    req.write(JSON.stringify(data));
        req.end();
    }
}

export default AssetAPIRequest;