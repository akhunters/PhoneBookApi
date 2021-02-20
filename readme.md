# Add Authorization Header with the following value
    apiKey < YOUR API KEY >

## For example -
    apiKey eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

## Api Docs can be found at -
    http://13.233.99.61/docs/



## Models - 
#### Contact -> 
```json
    {
        name :  type: string,
                required : true,
        phoneNumber : type : string,
        email : type: string,
                required: true,
                unique: true,
        createdOn : string
    }

```

# Supporting Functionalities - 

## 1) Adding a contact - 
```http
    PUT /api/addContact
```
#### Parameters -
 ```json
    {
        name : string,

    }
    ```
