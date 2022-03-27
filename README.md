### Hexlet tests and linter status:
[![Actions Status](https://github.com/Takaiva/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Takaiva/frontend-project-lvl2/actions)

### CodeClimate maintainability and test coverage:
[![Maintainability](https://api.codeclimate.com/v1/badges/948325797767dd709fce/maintainability)](https://codeclimate.com/github/Takaiva/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/948325797767dd709fce/test_coverage)](https://codeclimate.com/github/Takaiva/frontend-project-lvl2/test_coverage)

### Eslint status:
[![make lint](https://github.com/Takaiva/frontend-project-lvl2/actions/workflows/linter-check.yml/badge.svg)](https://github.com/Takaiva/frontend-project-lvl2/actions/workflows/linter-check.yml)

## Setup

Clone this repository to your local directory

`Install dependencies`

```sh
make install
```

`Install 'gendiff' app`

```sh
npm link
```

### Description:
The app works with either 'json' or 'yaml/yml' files.
It compares two files and generates the difference between them.

`Usage`

```sh
gendiff [<option>] [<filepath1> <filepath2>]
```

`Options`

use this flag to choose the output format

```sh
-f, --format <format>
```

`Example`

to get the 'stylish' diff output, use

```sh
gendiff -f stylish <filpath1> <filepath2>
```

### Compare two plain json files:
[![asciicast](https://asciinema.org/a/2KNVhzMAtIV816LGRvGWA25lH.svg)](https://asciinema.org/a/2KNVhzMAtIV816LGRvGWA25lH)

### Compare two plain yaml/yml files:
[![asciicast](https://asciinema.org/a/xbyqSTttf5yKWwnBfUri17P1W.svg)](https://asciinema.org/a/xbyqSTttf5yKWwnBfUri17P1W)

### Compare two nested json files and get output in 'stylish' format:
[![asciicast](https://asciinema.org/a/acaUj9eSxis0W10Yv9bTmfNaI.svg)](https://asciinema.org/a/acaUj9eSxis0W10Yv9bTmfNaI)

### Compare two nested yaml/yml files and get output in 'stylish' format:
[![asciicast](https://asciinema.org/a/zwnzxlKBZ3OElquoXbDzpXyUM.svg)](https://asciinema.org/a/zwnzxlKBZ3OElquoXbDzpXyUM)

### Compare two nested json files and get output in 'plain' format:
[![asciicast](https://asciinema.org/a/6o0c1VDomQadAddmPCLVf5EDI.svg)](https://asciinema.org/a/6o0c1VDomQadAddmPCLVf5EDI)

### Compare two nested yaml/yml files and get output in 'plain' format:
[![asciicast](https://asciinema.org/a/PCGrSmmSAQGiY60nIoWlX2d3c.svg)](https://asciinema.org/a/PCGrSmmSAQGiY60nIoWlX2d3c)

### Compare two nested json files and get output in 'json' format:
[![asciicast](https://asciinema.org/a/5uudELsqvsyTNnz0iCmhd6v7G.svg)](https://asciinema.org/a/5uudELsqvsyTNnz0iCmhd6v7G)

### Compare two nested yaml/yml files and get output in 'json' format:
[![asciicast](https://asciinema.org/a/8ern4toCUecSbEenBpfM8S1oQ.svg)](https://asciinema.org/a/8ern4toCUecSbEenBpfM8S1oQ)

## Requirements

Linux/MacOs

Node.js version 17.0.0 or higher
