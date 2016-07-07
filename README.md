# gitbook-plugin-canonical-link

Add `<link rel="canonical" href={{ config.pluginsConfig['canonical-link'].baseURL }}/{{ file.path }}>` to `<head>`

## Installation

    npm install gitbook-plugin-canonical-link

## Usage

add to `book.json`

```
{
  "plugins": [
    "canonical-link"
  ],
  "pluginsConfig": {
    "canonical-link": {
      "baseURL": "http://example.com"
    }
  }
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT