# Prescriber
_Consulta dados do prescritor_

## Authentication
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>

Método de autenticação

**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>https://servicesqa.epharma.com.br/Authentication/api/v1/OAuth/Authenticate
>```
### Request Headers
|KEY|VALUE|
|---|---|
|username|79cf8db1-238a-403c-aff0-ab0f6e416577|
|password|79cf8db1-238a-403c-aff0-ab0f6e416577|
|client_id|42A69F1C06B2D7B0F861B16BE9231BAA|

--------------------------------------------------------------


## Prescriber/Read
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>https://servicesqa.epharma.com.br/common/api/v1/Prescriber/Read?gridParams={"page": 1, "itemsPerPage": 10}
>```
### Query Params

|Param|value|
|---|---|
|gridParams|{"page": 1, "itemsPerPage": 10}|



--------------------------------------------------------------


## Prescriber/{id}
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>https://servicesqa.epharma.com.br/common/api/v1/Prescriber/123456
>```

--------------------------------------------------------------


## Prescriber
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>https://servicesqa.epharma.com.br/common/api/v1/Prescriber/123456
>```
### Body (**raw**)

```json
{
    "id": 1
}
```


--------------------------------------------------------------


## Prescriber/{id}
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #106ebe;font-weight: 600;font-family: Arial;">PUT</span>**
>```
>https://servicesqa.epharma.com.br/common/api/v1/Prescriber/123456
>```
### Body (**raw**)

```json
{
    "id": 1
}
```


--------------------------------------------------------------


## Prescriber/{id}
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #da0a00;font-weight: 600;font-family: Arial;">DELETE</span>**
>```
>https://servicesqa.epharma.com.br/common/api/v1/Prescriber/123456
>```

--------------------------------------------------------------

