# Add Authorization Header with the following value
    apiKey < YOUR API KEY >

## For example -
    apiKey eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

## Api Docs can be found at -
[Link](http://13.233.99.61/docs/)



## Models - 
#### Contact -> 
```json
    {
        "name" : "type: string"
                "required : true",
        "phoneNumber" : "type : string",
        "email" : "type: string"
                "required: true"
                "unique: true",
        "createdOn" : "string"
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
    "name" : "string",
    "phoneNumber" : "string",
    "email" : "string"
}
```
##### Example - 
```json
{
    "name" : "Avinash",
    "phoneNumber" : "1234567890",
    "email" : "avinash@github.com"
}
```

#### Responses - 
##### 201
```json
{
    "message": "Contact saved successfully",
    "contact": {
        "_id": "60316c94119005692936c5c2",
        "name": "string",
        "email": "string",
        "phoneNumber": "string",
        "createdOn": "2021-02-20T20:09:56.430Z",
        "__v": 0
    }
}
```

##### 422
```json
{
    "message": "Email already exists"
}
```

## 2) Deleting a contact - 
```http
DELETE /api/deleteContact
```
#### Parameters -
```json
{
    "email" : "string"
}
```
##### Example - 
```json
{
    "email" : "avinash@github.com"
}
```

#### Responses - 
##### 200
```json
{
    "message": "Contact deleted successfully"
}
```

##### 422
```json
{
    "message": "Error"
}
```
