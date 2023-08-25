# Barber-trim

The trim() is a built-in string function in JavaScript, which is used to trim a string.

*Barber-trim* cuts successive whitespaces inside strings as well. This can be very useful for natural language processing.

### Example
```
All of us
except\tEmran, Raju and      Noman were there.
```

becomes

```All of us except Emran, Raju and Noman were there```

### Usage
```js
import trim from "barber-trim"

const str = `
All of us
except\tEmran, Raju and      Noman were there.
`;

console.log(trim(str))
```

### Note
Please note that `Tab ↹` spaces and `← Backspaces` are considered like regular spaces.

# License

MIT

# Author

yanna92yar@gmail.com