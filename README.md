![VIRON](./art/banner.png)

<h2 align="center">Automated Design-based Management Console</h2>

All you do is just create a API server and a OAS2.0 json file. Then viron admin tool is ready to use.
You don't need to write frontend code!

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://cam-inc.github.io/viron-doc/)
[![GitHub release](https://img.shields.io/github/release/cam-inc/viron.svg)]()
[![GitHub last commit](https://img.shields.io/github/last-commit/cam-inc/viron.svg)]()

## 🔎 Official Website(📙 Documentation, Quick Start, Demo Site)

[https://cam-inc.github.io/viron-doc/](https://cam-inc.github.io/viron-doc/)

## 🚅 QuickStart

This repository is building as a monorepo by npm workspaces.

### Setup

```
$ git clone git@github.com:cam-inc/viron.git
$ cd viron
$ npm install .
```
**Important: npm version >= 7.9.0

### Develop monorepo

See each workspace's README.md for details.

If you want to run workspace-specific npm scripts, you can do so by executing the npm scripts with `--workspace` option from repository root.

ex.)
```
$ npm run develop --workspace=@viron/app
$ npm run build --workspace=@viron/app --workspace=@viron/lib
```

Use `--workspaces` option to execute a npm script on each workspace.

ex.)
```
$ npm run test --workspaces
```

## Development Guide for "Viron" Contributors

["Viron" Contributors Documentation](https://github.com/cam-inc/viron/wiki/BASIC)

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/cam-inc/viron/releases).

## Contributors

| [<img src="https://avatars1.githubusercontent.com/u/381941?s=130&v=4" width="130px;"/><br />fkei](https://github.com/fkei) <br /> 🤔 💻  | [<img src="https://avatars0.githubusercontent.com/u/10769038?s=130&v=4" width="130px;"/><br />cathcheeno](https://github.com/cathcheeno)<br /> 💻  | [<img src="https://avatars2.githubusercontent.com/u/2404059?s=130&v=4" width="130px;"/><br />noritama](https://github.com/noritama)<br /> 💻  | [<img src="https://avatars1.githubusercontent.com/u/35751869?s=130&v=4" width="130px;"/><br />babarl](https://github.com/babarl)<br /> 🎨 | [<img src="https://avatars2.githubusercontent.com/u/3895795?s= 130&v=4" width="130px;"/><br />MuuKojima](https://github.com/MuuKojima)<br /> 💻  | [<img src="https://avatars2.githubusercontent.com/u/12236042?s=130&v=4" width="130px;"/><br />tosaka07](https://github.com/tosaka07)<br /> 💻  | [<img src="https://avatars0.githubusercontent.com/u/11499282?s=130&v=4" width="130px;"/><br />Jung0](https://github.com/Jung0)<br /> 💻  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---:
[<img src="https://avatars1.githubusercontent.com/u/26865061?s=130&v=4" width="130px;"/><br />Takahisa<br />Kodama](https://github.com/TakahisaKodama)<br /> 💻  |

## Copyright

CAM, Inc. All rights reserved.

## LICENSE

MIT LICENSE [LICENSE](LICENSE)
