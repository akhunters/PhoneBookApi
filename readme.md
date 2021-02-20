# Add Authorization Header with the following value
    apiKey < YOUR API KEY >

## For example -
    apiKey eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

## Api Docs can be found at -
[Click Here](http://13.233.99.61/docs/)



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


## 3) Modifying a contact - 
```http
POST /api/modifyContact
```
#### Parameters (put modified values using the same email address)-
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
     "name" : "Rishabh",
    "phoneNumber" : "123555890",
    "email" : "avinash@github.com"
}
```

#### Responses - 
##### 201
```json
{
    "message": "Contact updated successfully",
    "contact": {
        "_id": "602ffe89b6166d371b12c6f2",
        "name": "string",
        "email": "string",
        "phoneNumber": "string",
        "createdOn": "2021-02-19T18:08:09.029Z",
        "__v": 0
    }
}
```

##### 200
```json
{
    "message": "No contact found associated with this email."
}
```


## 4) Getting list of contacts (10 contacts per page) - 
```http
GET /api/getContacts
```
#### Parameters (put modified values using the same email address)-
```json
{
    "page" : 1
}
```

#### Responses - 
##### 200 (Example)
```json
{
    "contacts": [
        {
            "_id": "602ffe89b6166d371b12c6f2",
            "name": "Shashank",
            "email": "akhunters07@gmail.com",
            "phoneNumber": "8297394791",
            "createdOn": "2021-02-19T18:08:09.029Z",
            "__v": 0
        },
        {
            "_id": "602fff9ab5253a373038ee30",
            "name": "Avinash Kumar",
            "email": "akhunters070@gmail.com",
            "phoneNumber": "9996624857",
            "createdOn": "2021-02-19T18:12:42.192Z",
            "__v": 0
        },
        {
            "_id": "602fff9fb5253a373038ee31",
            "name": "Avinash Kumar",
            "email": "akhunters071@gmail.com",
            "phoneNumber": "9996624857",
            "createdOn": "2021-02-19T18:12:47.144Z",
            "__v": 0
        },
        {
            "_id": "602fffa2b5253a373038ee32",
            "name": "Avinash Kumar",
            "email": "akhunters072@gmail.com",
            "phoneNumber": "9996624857",
            "createdOn": "2021-02-19T18:12:50.078Z",
            "__v": 0
        },
        {
            "_id": "602fffa5b5253a373038ee33",
            "name": "Avinash Kumar",
            "email": "akhunters032@gmail.com",
            "phoneNumber": "9996624857",
            "createdOn": "2021-02-19T18:12:53.573Z",
            "__v": 0
        },
        {
            "_id": "602fffa9b5253a373038ee34",
            "name": "Avinash Kumar",
            "email": "akhunters033@gmail.com",
            "phoneNumber": "9996624857",
            "createdOn": "2021-02-19T18:12:57.136Z",
            "__v": 0
        },
        {
            "_id": "602fffacb5253a373038ee35",
            "name": "Avinash Kumar",
            "email": "akhunters133@gmail.com",
            "phoneNumber": "9996624857",
            "createdOn": "2021-02-19T18:13:00.318Z",
            "__v": 0
        },
        {
            "_id": "602fffafb5253a373038ee36",
            "name": "Avinash Kumar",
            "email": "akhunters136@gmail.com",
            "phoneNumber": "9996624857",
            "createdOn": "2021-02-19T18:13:03.605Z",
            "__v": 0
        },
        {
            "_id": "602fffb7b5253a373038ee38",
            "name": "Avinash Kumar",
            "email": "akhunters163@gmail.com",
            "phoneNumber": "9996624857",
            "createdOn": "2021-02-19T18:13:11.207Z",
            "__v": 0
        },
        {
            "_id": "602fffbbb5253a373038ee39",
            "name": "Avinash Kumar",
            "email": "akhunters143@gmail.com",
            "phoneNumber": "9996624857",
            "createdOn": "2021-02-19T18:13:15.383Z",
            "__v": 0
        }
    ],
    "page": 1
}
```

##### 422
```json
{
    "message": "Error"
}
```

## 5) Searching Contacts - 
```http
GET /api/searchContact
```
#### Parameters -
```json
{
    "name" : "string",
    "email" : "string"
}
```
##### Example - 
1) Searching with Name - 
```json
{   
    "name" : "Avi"
}
```
2) Searching with Email - 
```json
{
    "email" : "avinash@github.com"
}
```
3) Searching with both Name and Email - 
```json
{
    "name" : "Avi",
    "email" : "avinash@github.com"
}
```

#### Responses - 
##### 200
```json
{
    "contacts": [
        {
            "_id": "602ffe89b6166d371b12c6f2",
            "name": "string",
            "email": "string",
            "phoneNumber": "string",
            "createdOn": "2021-02-19T18:08:09.029Z",
            "__v": 0
        },
        {
            "_id": "60314dda3322e45c563b0ee3",
            "name": "string",
            "email": "string",
            "phoneNumber": "string",
            "createdOn": "2021-02-20T17:58:50.429Z",
            "__v": 0
        }
    ],
    "page": 1
}
```

##### 422
```json
{
    "message": "Error"
}
```


## END