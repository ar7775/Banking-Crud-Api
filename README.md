# Banking-Crud-Api

## API Endpoint

https://us-central1-banking-crud.cloudfunctions.net/app

# API Description

API URL | Description | METHOD | Body Content(Eg.) 
--- | --- | :---: | ---
*/list* | Returns all the customers | **GET** | `None` 
*/add* | Add a new customer | **POST** | `None`
*/update/:user_id* | Update a customer  | **PUT** | `{"id": "1677774334406","name": "Kishor Kumar","number": 6842,"type": "Savings","bal": 1500}`
*/delete/:user_id* | Delete a customer | **DELETE** | `{"id": "1677774334406","name": "Kishor Kumar","number": 6842,"type": "Savings","bal": 3000}`
