# Lock Registry Doctor

`lockRegistryDoctor.js` is a Node.js script designed to update deprecated npm registry URLs in your `yarn.lock` and `package-lock.json` files. It also updates the npm registry configuration to a new URL.

## Features

- Scans `yarn.lock` and `package-lock.json` files for deprecated registry URLs.
- Replaces deprecated registry URLs with a new registry URL.

## Prerequisites

- Node.js installed on your machine.
- npm installed on your machine.


## Usage

npx lock-registry-doctor

## Configuration

The script is pre-configured to replace the following deprecated registry URLs:

- `//registry.npm.taobao.org`
- `//npm.taobao.org`
- `//registry.nlark.com`

These URLs will be replaced with:

- `//registry.npmmirror.com`

## Example

If your `yarn.lock` or `package-lock.json` file contains the deprecated registry URL `//registry.nlark.com`, the script will replace it with `//registry.npmmirror.com`.

### Sample Output

```sh
npm registry has been updated to https://registry.npmmirror.com
yarn.lock exists. Processing...
yarn.lock has been updated.
package-lock.json exists. Processing...
package-lock.json has been updated.