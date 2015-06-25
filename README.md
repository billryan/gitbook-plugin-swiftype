## Swiftype for GitBook

You can use install it via **NPM**:

```
$ npm install gitbook-plugin-swiftype
```

And use it for your book with in the book.json:

```
{
    "plugins": ["swiftype"]
}
```

You can set the Swiftype engine key using the plugins configuration in the book.json:

```
{
    "plugins": ["swiftype"],
    "pluginsConfig": {
        "swiftype": {
            "token": "utQHy1R2XyiVqDqaZxxx",
            "version": "2.0.0"
        }
    }
}
```

For an overview of all available configuration parameters, please refer to the [Site Search by Swiftype](https://swiftype.com/site-search).
