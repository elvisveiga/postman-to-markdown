# ePharma.Authentication
_Make things easier for your teammates with a complete collection description._
# 📁 v1 


## 📁 OAuth 


## Autentica Usuario



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth/Authenticate
>```
**Request Headers**
|KEY|VALUE|
|---|---|
|username|{{username}}|
|password|{{password}}|
|client_id|{{client_id}}|
|||
🔑 **Authentication** bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
**Request Headers**
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
**Body** (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "cpf": "{{CPF_Generico}}",
  "name": "{{$randomFullName}}",
  "startDate": "{{timestamp}}",
  "status": 0,
  "type": 1,
 "systems": [
      {
        "id": 0,
        "userId": 0,
        "systemId": 3,
        "system": {
          "id": 3,
          "name": "NORDISK",
          "token": "etgtIB0O610D57f6041A4064aC73baED"
        }
      }
    ],
     "permissions": [
          {
            "id": 0,
            "userId": 0,
            "type": 1,
            "identifier": 0
          }
        ],
        "securityKey": {
          "id": 0,
          "key": "faae23bf921941b8b05f97a53ca69286-77399",
          "userId": 0,
          "dateGeneration": "2021-02-11T18:56:11.482Z",
          "dateExpiration": "2022-02-11T18:56:11.482Z"
}
}
```

🔑 **Authentication** bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Atualiza Usuario



**<span style="color: #106ebe;font-weight: 600;font-family: Arial;">PUT</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
**Request Headers**
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
**Body** (**raw**)

```json
{
  "id": {{Id_Usuario}},
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "{{$randomEmail}}",
  "cpf": "{{CPF_Generico}}",
  "name": "{{$randomFullName}}",
  "startDate": "{{timestamp}}",
  "status": 0,
  "type": 1,
 "systems": [
      {
        "id": {{Id_systems}},
        "userId": {{userId_systems}},
        "systemId": {{systemId_systems}},
        "system": {
          "id": {{Id_system}},
          "name": "{{name_system}}",
          "token": "{{token_system}}"
        }
      }
    ],
    "permissions": [
          {
            "id": {{Id_permissions}},
            "userId": {{userId_permissions}},
            "type": 1,
            "identifier": 0
          }
        ],
        "securityKey": {
          "id": {{Id_securityKey}},
          "key": "{{key_securityKey}}",
          "userId": 0,
          "dateGeneration": "2021-02-11T18:56:11.482Z",
          "dateExpiration": "2022-02-11T18:56:11.482Z"
}
}
```

🔑 **Authentication** bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## 📁 UserPermission 


# 📁 v2 


## 📁 OAuth 


## Autentica Usuario



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth/Authenticate
>```
**Request Headers**
|KEY|VALUE|
|---|---|
|username|{{username}}|
|password|{{password}}|
|client_id|{{client_id}}|
|||

--------------------------------------------------------------


## Cria Usuario



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
**Request Headers**
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
**Body** (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "cpf": "{{CPF_Generico}}",
  "name": "{{$randomFullName}}",
  "startDate": "{{timestamp}}",
  "status": 0,
  "type": 1,
 "systems": [
      {
        "id": 0,
        "userId": 0,
        "systemId": 3,
        "system": {
          "id": 3,
          "name": "NORDISK",
          "token": "etgtIB0O610D57f6041A4064aC73baED"
        }
      }
    ],
     "permissions": [
          {
            "id": 0,
            "userId": 0,
            "type": 1,
            "identifier": 0
          }
        ],
        "securityKey": {
          "id": 0,
          "key": "faae23bf921941b8b05f97a53ca69286-77399",
          "userId": 0,
          "dateGeneration": "2021-02-11T18:56:11.482Z",
          "dateExpiration": "2022-02-11T18:56:11.482Z"
}
}
```

🔑 **Authentication** bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Atualiza Usuario



**<span style="color: #106ebe;font-weight: 600;font-family: Arial;">PUT</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
**Request Headers**
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
**Body** (**raw**)

```json
{
  "id": {{Id_Usuario}},
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "{{$randomEmail}}",
  "mobilePhoneNumber": "11967556641",
  "cpf": "{{CPF_Generico}}",
  "name": "{{$randomFullName}}",
  "startDate": "{{timestamp}}",
  "status": 0,
  "type": 1,
 "systems": [
      {
        "id": {{Id_systems}},
        "userId": {{userId_systems}},
        "systemId": {{systemId_systems}},
        "system": {
          "id": {{Id_system}},
          "name": "{{name_system}}",
          "token": "{{token_system}}"
        }
      }
    ],
    "permissions": [
          {
            "id": {{Id_permissions}},
            "userId": {{userId_permissions}},
            "type": 1,
            "identifier": 0
          }
        ],
        "securityKey": {
          "id": {{Id_securityKey}},
          "key": "{{key_securityKey}}",
          "userId": 0,
          "dateGeneration": "2021-02-11T18:56:11.482Z",
          "dateExpiration": "2022-02-11T18:56:11.482Z"
}
}
```

🔑 **Authentication** bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## 📁 User 


## Retorna Dados do Usuario pelo Id



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>{{LinkAmbiente}}/authentication/api/v2/User/GetById/{{ID}}
>```
**Request Headers**
|KEY|VALUE|
|---|---|
|Authorization|{{Authenticate}}|
🔑 **Authentication** bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Retorna Dados do Usuario (Read)



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>{{LinkAmbiente}}/authentication/api/v2/User/Read?gridParams={"Page":1,"ItemsPerPage":10,"Filter":[],"Sorter":[]}&userId=14816&format=3&filename="Bradesco"&delimiter=;
>```
**Request Headers**
|KEY|VALUE|
|---|---|
|Authorization|{{Authenticate}}|
**Query Params**

|Param|value|
|---|---|
|gridParams|{"Page":1,"ItemsPerPage":10,"Filter":[],"Sorter":[]}|
|userId|14816|
|format|3|
|filename|"Bradesco"|
|delimiter|;|


🔑 **Authentication** bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## 📁 UserPermission 


## Retorna Permissoes do Usuario



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>{{LinkAmbiente}}/authentication/api/v2/UserPermission/{{userId_permissions}}/{{typePermissionsAuthenticate}}?system=-1
>```
**Request Headers**
|KEY|VALUE|
|---|---|
|Authorization|{{Authenticate}}|
**Query Params**

|Param|value|
|---|---|
|system|-1|


🔑 **Authentication** bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------

