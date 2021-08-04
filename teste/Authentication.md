# ePharma_Services.Authenticate_(Automacao)
_Make things easier for your teammates with a complete collection description._# 📁 Autenticar Usuario 


## Autentica Usuario
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth/Authenticate
>```
### Request Headers
|KEY|VALUE|
|---|---|
|username|{{username}}|
|password|{{password}}|
|client_id|{{client_id}}|
|||

--------------------------------------------------------------

# 📁 v1 

# 📁 OAuth 


## Autentica Usuario
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth/Authenticate
>```
### Request Headers
|KEY|VALUE|
|---|---|
|username|{{username}}|
|password|{{password}}|
|client_id|{{client_id}}|
|||
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Autentica Usuario (Usuario e senha não cadastrado)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth/Authenticate
>```
### Request Headers
|KEY|VALUE|
|---|---|
|username|{{username_nao_cadastrado}}|
|password|{{password_nao_cadastrado}}|
|client_id|{{client_id_nao_cadastrado}}|
|||

--------------------------------------------------------------


## Geração de CPF Generico Valido
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>https://www.4devs.com.br/ferramentas_online.php
>```
### Request Headers
|KEY|VALUE|
|---|---|
|acao|pontuacao|
|pontuacao|N|
### Body formdata

|Param|value|Type|
|---|---|---|
|acao|gerar_pessoa|text|
|acao|gerar_cpf|text|
|acao|gerar_cpf|text|
|acao|gerar_cpf|text|
|acao||text|
|||text|
|acao|gerar_cpf|text|
|||text|



--------------------------------------------------------------


## Cria Usuario (Senha Ultrapassando Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "{{SenhaInvalida}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (Login Ultrapassando Limite do campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{LoginInvalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (Sem Autenticação)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|



--------------------------------------------------------------


## Cria Usuario (CPF Invalido)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "cpf": "{{CPF_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (Token de Sistema Invalido)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
          "token": "{{Token_Invalido}}"
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (Email Ultrapassando o Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "{{EmailInvalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (Nome Ultrapassando o Limite do campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "cpf": "{{CPF_Generico}}",
  "name": "{{NomeInvalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (lastName Ultrapassando o Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "cpf": "{{CPF_Generico}}",
  "name": "{{$randomFullName}}",
  "lastName": "{{LastNameInvalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (RG Ultrapassando o Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "cpf": "{{CPF_Generico}}",
  "rg": "{{RG_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (AddressLine Ultrapassando o Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "addressLine": "{{AddressLine_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (AddressZipCode Ultrapassando Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "cpf": "{{CPF_Generico}}",
  "name": "{{$randomFullName}}",
  "addressZipCode": "{{AddressZipCode_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (AddressZipCode Valor Menor que o Esperado)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "cpf": "{{CPF_Generico}}",
  "name": "{{$randomFullName}}",
  "addressZipCode": "{{AddressZipCode_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (AddressNeighborhood Ultrapassando o Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "addressNeighborhood": "{{AddressNeighborhood_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (AddressComplement Ultrapassando o Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "addressComplement": "{{AddressComplement_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (AddressCity Ultrapassando o Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "addressCity": "{{AddressCity_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (AddressState Ultrapassando o Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "addressState": "{{AddressState_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (AddressState Informando Valor Menor que o Esperado)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "addressState": "{{AddressState_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (Sem email e Sem MobilePhoneNumber)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (Sem o Campo StartDate)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "cpf": "{{CPF_Generico}}",
  "name": "{{$randomFullName}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (StartDate Passado)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "startDate": "{{Data_Passada}}",
  "cpf": "{{CPF_Generico}}",
  "name": "{{$randomFullName}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (StartDate Futuro)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "startDate": "{{Data_Futura}}",
  "cpf": "{{CPF_Generico}}",
  "name": "{{$randomFullName}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (EndData menor que StartDate)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "startDate": "{{timestamp}}",
  "endDate": "{{Data_Passada}}",
  "cpf": "{{CPF_Generico}}",
  "name": "{{$randomFullName}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (BirthtDate Data Futura)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "birthDate": "{{Data_Futura}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (PingDate Futura)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "pingDate": "{{Data_Futura}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (PingDate Passada)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "pingDate": "{{Data_Passada}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (PingDate Data do dia)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "pingDate": "{{timestamp}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (LoginAttemptsNumber Ultrapassando o Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "loginAttemptsNumber": 9999991,
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Geração de Nome/Pessoa Generico
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>https://www.4devs.com.br/ferramentas_online.php
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|acao|gerar_pessoa|text|
|pontuacao|N|text|



--------------------------------------------------------------


## Cria Usuario (Com Todos os Campos Validos)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "mobilePhoneNumber": "{{celular_Generico}}",
  "email": "{{$randomEmail}}",
  "cpf": "{{CPF_Generico_Atualizacao}}",
  "name": "{{$Nome_Generico}}",
  "lastName": "{{Nome_Generico}}",
  "startDate": "{{timestamp}}",
  "endDate": null,
  "pingDate": "{{timestamp}}",
  "gender": 0,
  "birthDate": "{{Data_Passada}}",
  "status": 0,
  "type": 1,
  "requireNewPassword": true,
  "phoneNumber": {{telefone_fixo_Generico}},
  "rg": "{{RG_Generico}}",
  "addressLine": "Comercial",
  "addressZipCode": "{{cep_Generico}}",
  "addressNeighborhood": "{{bairro_Generico}}",
  "addressComplement": "Casa",
  "addressCity": "{{cidade_Generico}}",
  "addressState": "{{estado_Generico}}",
  "loginAttemptsNumber": 0,
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Atualiza Usuario
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #106ebe;font-weight: 600;font-family: Arial;">PUT</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Atualiza Usuario (Dados Invalidos)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #106ebe;font-weight: 600;font-family: Arial;">PUT</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "id": {{Id_Usuario}},
  "login": "{{LoginInvalido}}",
  "password": "{{SenhaInvalida}}",
  "email": "{{EmailInvalido}}",
  "cpf": "{{CPF_Invalido}}",
  "name": "{{NomeInvalido}}",
  "lastName": "{{LastNameInvalido}}",
  "rg": "{{RG_Invalido}}",
  "addressLine": "{{AddressLine_Invalido}}",
  "addressZipCode": "{{AddressZipCode_Invalido}}",
  "addressNeighborhood": "{{AddressZipCode_Invalido}}",
  "addressComplement": "{{AddressComplement_Invalido}}",
  "addressCity": "{{AddressCity_Invalido}}",
  "addressState": "{{AddressState_Invalido}}",
  "loginAttemptsNumber": 9999991,

  "status": 0,
  "type": 1,
 "systems": [
      {
        "id": 827940,
        "userId": 828309,
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Atualiza Usuario (Usuario não Cadastrado)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #106ebe;font-weight: 600;font-family: Arial;">PUT</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "id": {{Id_Usuario_nao_Cadastrado}},
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Inclui - Esqueceu sua Senha
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth/ForgotPassword
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "cpf": "{{CPF_Usuario}}",
  "email": "{{email_Usuario}}",
  "benefitId": 43461,
  "system": {
    "id": 3,
    "name": "NORDISK",
    "token": "etgtIB0O610D57f6041A4064aC73baED"
  },
 "securityKey": null,

  "message": "Teste email"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Inclui - Esqueceu sua Senha (CPF não Cadastrado)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth/ForgotPassword
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "cpf": "{{CPF_nao_Cadastrado}}",
  "email": "teste@teste.com.br",
  "benefitId": 43461,
  "system": {
    "id": 576595,
    "name": "NORDISK",
    "token": "etgtIB0O610D57f6041A4064aC73baED"
  },
  "securityKey": {
          "id": 0,
          "key": "faae23bf921941b8b05f97a53ca69286-77399",
          "userId": 0,
          "dateGeneration": "2021-02-11T18:56:11.482Z",
          "dateExpiration": "2022-02-11T18:56:11.482Z"
},
  "message": "Teste email"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Inclui - Esqueceu sua Senha (Token de Sistema Invalido)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth/ForgotPassword
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "cpf": "{{CPF_Usuario}}",
  "email": "teste@teste.com.br",
  "benefitId": 43461,
  "system": {
    "id": 576595,
    "name": "NORDISK",
    "token": "etgtIB0O610D57f6041A4064aC73bfasd"
  },
  "securityKey": {
          "id": 0,
          "key": "faae23bf921941b8b05f97a53ca69286-77399",
          "userId": 0,
          "dateGeneration": "2021-02-11T18:56:11.482Z",
          "dateExpiration": "2022-02-11T18:56:11.482Z"
},
  "message": "Teste email"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Retorna Permissoes do Usuario
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>{{LinkAmbiente}}/authentication/api/v1/OAuth/SecurityKeyQuery/cd0af3a4badd4d05a56a798d3d7dce49-77399629021
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Atualiza - Esqueceu sua Senha
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #106ebe;font-weight: 600;font-family: Arial;">PUT</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v1/OAuth/ForgotPassword
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "cpf": "{{CPF_Generico}}",
  "email": "teste@teste.com.br",
  "benefitId": {{benefitId}},
  "system": {
    "id": {{systemId}},
    "name": "NORDISK",
    "token": "etgtIB0O610D57f6041A4064aC73baED"
  },
  "message": "Teste email"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------

# 📁 UserPermission 


## Retorna Permissões do Usuario
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>{{LinkAmbiente}}/authentication/api/v1/UserPermission/{{userId_permissions}}/{{typePermissionsAuthenticate}}?system=-1
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Authorization|{{Authenticate}}|
### Query Params

|Param|value|
|---|---|
|system|-1|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------

# 📁 v2 

# 📁 OAuth 


## Autentica Usuario
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth/Authenticate
>```
### Request Headers
|KEY|VALUE|
|---|---|
|username|{{username}}|
|password|{{password}}|
|client_id|{{client_id}}|
|||

--------------------------------------------------------------


## Autentica Usuario (Usuario e senha não cadastrado)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth/Authenticate
>```
### Request Headers
|KEY|VALUE|
|---|---|
|username|{{username_nao_cadastrado}}|
|password|{{password_nao_cadastrado}}|
|client_id|{{client_id_nao_cadastrado}}|
|||

--------------------------------------------------------------


## Geração de CPF Generico Valido
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>https://www.4devs.com.br/ferramentas_online.php
>```
### Request Headers
|KEY|VALUE|
|---|---|
|acao|pontuacao|
|pontuacao|N|
### Body formdata

|Param|value|Type|
|---|---|---|
|acao|gerar_pessoa|text|
|acao|gerar_cpf|text|
|acao|gerar_cpf|text|
|acao|gerar_cpf|text|
|acao||text|
|||text|
|acao|gerar_cpf|text|
|||text|



--------------------------------------------------------------


## Cria Usuario (Senha Ultrapassando Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "{{SenhaInvalida}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (Login Ultrapassando Limite do campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{LoginInvalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (Sem Autenticação)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|



--------------------------------------------------------------


## Cria Usuario (CPF Invalido)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "cpf": "{{CPF_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (Token de Sistema Invalido)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
          "token": "{{Token_Invalido}}"
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (Email Ultrapassando o Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "{{EmailInvalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (Nome Ultrapassando o Limite do campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "cpf": "{{CPF_Generico}}",
  "name": "{{NomeInvalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (lastName Ultrapassando o Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "cpf": "{{CPF_Generico}}",
  "name": "{{$randomFullName}}",
  "lastName": "{{LastNameInvalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (RG Ultrapassando o Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "cpf": "{{CPF_Generico}}",
  "rg": "{{RG_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (AddressLine Ultrapassando o Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "addressLine": "{{AddressLine_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (AddressZipCode Ultrapassando Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "cpf": "{{CPF_Generico}}",
  "name": "{{$randomFullName}}",
  "addressZipCode": "{{AddressZipCode_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (AddressZipCode Valor Menor que o Esperado)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "cpf": "{{CPF_Generico}}",
  "name": "{{$randomFullName}}",
  "addressZipCode": "{{AddressZipCode_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (AddressNeighborhood Ultrapassando o Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "addressNeighborhood": "{{AddressNeighborhood_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (AddressComplement Ultrapassando o Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "addressComplement": "{{AddressComplement_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (AddressCity Ultrapassando o Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "addressCity": "{{AddressCity_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (AddressState Ultrapassando o Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "addressState": "{{AddressState_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (AddressState Informando Valor Menor que o Esperado)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "addressState": "{{AddressState_Invalido}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (Sem email e Sem MobilePhoneNumber)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (Sem o Campo StartDate)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "cpf": "{{CPF_Generico}}",
  "name": "{{$randomFullName}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (StartDate Passado)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "startDate": "{{Data_Passada}}",
  "cpf": "{{CPF_Generico}}",
  "name": "{{$randomFullName}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (StartDate Futuro)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "startDate": "{{Data_Futura}}",
  "cpf": "{{CPF_Generico}}",
  "name": "{{$randomFullName}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (EndData menor que StartDate)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "email": "teste@teste.com.br",
  "mobilePhoneNumber": "11967556641",
  "phoneNumber": 11967556641,
  "startDate": "{{timestamp}}",
  "endDate": "{{Data_Passada}}",
  "cpf": "{{CPF_Generico}}",
  "name": "{{$randomFullName}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (BirthtDate Data Futura)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "birthDate": "{{Data_Futura}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (PingDate Futura)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "pingDate": "{{Data_Futura}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (PingDate Passada)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "pingDate": "{{Data_Passada}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (PingDate Data do dia)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "pingDate": "{{timestamp}}",
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario (LoginAttemptsNumber Ultrapassando o Limite do Campo)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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
  "loginAttemptsNumber": 9999991,
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Cria Usuario
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Geração de Nome/Pessoa Generico
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>https://www.4devs.com.br/ferramentas_online.php
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|acao|gerar_pessoa|text|
|pontuacao|N|text|



--------------------------------------------------------------


## Cria Usuario (Com Todos os Campos Validos)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #f59a12;font-weight: 600;font-family: Arial;">POST</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "login": "{{$randomUserName}}",
  "password": "eph@2019",
  "mobilePhoneNumber": "{{celular_Generico}}",
  "email": "{{$randomEmail}}",
  "cpf": "{{CPF_Generico_atualizacao}}",
  "name": "{{$Nome_Generico}}",
  "lastName": "{{Nome_Generico}}",
  "startDate": "{{timestamp}}",
  "endDate": null,
  "pingDate": "{{timestamp}}",
  "gender": 0,
  "birthDate": "{{Data_Passada}}",
  "status": 0,
  "type": 1,
  "requireNewPassword": true,
  "phoneNumber": {{telefone_fixo_Generico}},
  "rg": "{{RG_Generico}}",
  "addressLine": "Comercial",
  "addressZipCode": "{{cep_Generico}}",
  "addressNeighborhood": "{{bairro_Generico}}",
  "addressComplement": "Casa",
  "addressCity": "{{cidade_Generico}}",
  "addressState": "{{estado_Generico}}",
  "loginAttemptsNumber": 0,
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Atualiza Usuario
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #106ebe;font-weight: 600;font-family: Arial;">PUT</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Atualiza Usuario (Dados Invalidos)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #106ebe;font-weight: 600;font-family: Arial;">PUT</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "id": {{Id_Usuario}},
  "login": "{{LoginInvalido}}",
  "password": "{{SenhaInvalida}}",
  "email": "{{EmailInvalido}}",
  "cpf": "{{CPF_Invalido}}",
  "name": "{{NomeInvalido}}",
  "lastName": "{{LastNameInvalido}}",
  "rg": "{{RG_Invalido}}",
  "addressLine": "{{AddressLine_Invalido}}",
  "addressZipCode": "{{AddressZipCode_Invalido}}",
  "addressNeighborhood": "{{AddressZipCode_Invalido}}",
  "addressComplement": "{{AddressComplement_Invalido}}",
  "addressCity": "{{AddressCity_Invalido}}",
  "addressState": "{{AddressState_Invalido}}",
  "loginAttemptsNumber": 9999991,

  "status": 0,
  "type": 1,
 "systems": [
      {
        "id": 827940,
        "userId": 828309,
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Atualiza Usuario (Usuario não Cadastrado)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #106ebe;font-weight: 600;font-family: Arial;">PUT</span>**
>```
>{{LinkAmbiente}}/Authentication/api/v2/OAuth
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "id": {{Id_Usuario_nao_Cadastrado}},
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

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Resete de Token por email ou SMS
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>{{LinkAmbiente}}/authentication/api/v2/OAuth/Password/{{systemID}}/{{login}}/RequestResetToken/1
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Atualiza senha Usuario
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #106ebe;font-weight: 600;font-family: Arial;">PUT</span>**
>```
>{{LinkAmbiente}}/authentication/api/v2/OAuth/Password
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Content-Type|application/json|
### Body (**raw**)

```json
{
  "systemId": "{{systemID}}",
  "login": "{{login}}",
  "securityKey": "59TTun",
  "password": "eph@2019"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Detalhes do Contato do Usuario
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>{{LinkAmbiente}}/authentication/api/v2/OAuth/ContactDetails/{{systemID}}/{{login}}
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------

# 📁 User 


## Retorna Dados do Usuario pelo Id
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>{{LinkAmbiente}}/authentication/api/v2/User/GetById/{{ID}}
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Authorization|{{Authenticate}}|
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------


## Retorna Dados do Usuario (Read)
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>{{LinkAmbiente}}/authentication/api/v2/User/Read?gridParams={"Page":1,"ItemsPerPage":10,"Filter":[],"Sorter":[]}&userId=14816&format=3&filename="Bradesco"&delimiter=;
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Authorization|{{Authenticate}}|
### Query Params

|Param|value|
|---|---|
|gridParams|{"Page":1,"ItemsPerPage":10,"Filter":[],"Sorter":[]}|
|userId|14816|
|format|3|
|filename|"Bradesco"|
|delimiter|;|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------

# 📁 UserPermission 


## Retorna Permissoes do Usuario
**Authorization** <span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">Bearer Token</span>



**<span style="color: #04b74c;font-weight: 600;font-family: Arial;">GET</span>**
>```
>{{LinkAmbiente}}/authentication/api/v2/UserPermission/{{userId_permissions}}/{{typePermissionsAuthenticate}}?system=-1
>```
### Request Headers
|KEY|VALUE|
|---|---|
|Authorization|{{Authenticate}}|
### Query Params

|Param|value|
|---|---|
|system|-1|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{Authenticate}}|string|



--------------------------------------------------------------

