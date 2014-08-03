# drawille-spark

Draw [sparklines](http://en.wikipedia.org/wiki/Sparkline).

## Install

Install the [package](http://npmjs.org/package/drawille-spark) with [npm](http://npmjs.org):

```sh
$ npm install drawille-spark
```

If you need the CLI tool, install it globally:

```sh
$ npm install drawille-spark -g
```

## Usage

```sh
$ spark 0 30 55 80 33 150
⣠⣶⣼
```

```sh
$ echo 0 30 55 80 33 150 | spark
⣠⣶⣼
```

```sh
$ echo 0 30 55 80 33 150 | spark --lines 2
 ⢀⢸
⣰⣿⣾
```

## API

### spark(numbers[, lines])

Returns a `String`, with `numbers` graphed on it.
The graph has height of `lines` line (defaults to 1).

## License

MIT
