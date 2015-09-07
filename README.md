# Railsblocks API Spec

The idea of this project is allows write several files separated according to the desired structure and join them into one file at the time of testing the API

To use Railsblocks API Spec, we got the [api-blueprint-focus-booster](https://github.com/saamo/api-blueprint-focus-booster) amazing project from [Samir Djellil](https://github.com/saamo), and change some configurations.

## Install

Clone this repository.

```bash
git clone https://github.com/railsblocks/railsblocks-api-spec.git
```

Install all the dependencies via [NPM](https://npmjs.com) first.

```bash
cd railsblocks-api-spec
npm install
```

## Usage

Put your files (with `.apib` extension) into the `./src` directory and run following command.

```bash
gulp
```

Resulting API Blueprint is saved in `./build/railsblocks-api-spec.apib` file.

Run dredd command to test the api

```bash
dredd
```

## License

MIT © [Railsblocks](https://github.com/railsblocks)