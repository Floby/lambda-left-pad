# lambda-left-pad

> left-pad as a service

## Usage

```
POST /?size=6
Content-Type: text/plain

foo

> 200 OK
> Content-Type: text/plain
> Content-Length: 6
>
>    foo
```

```
POST /?size=2&fill=0
Content-Type: text/plain

1

> 200 OK
> Content-Type: text/plain
> Content-Length: 2
>
> 01
```
