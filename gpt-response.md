# API Documentation: Wordpress Time Data API

This API is built in Wordpress and provides time data information. The API is versioned as `api/v1` and provides a route `/data/time` to fetch time data. 

## Route

The route for the API is:

```
/api/v1/data/time
```

## Method

The API supports HTTP GET method for fetching data.

## Parameters

The API accepts the following parameters:

| Parameter   | Required | Description                                                                                      |
| ----------- | -------- | ------------------------------------------------------------------------------------------------ |
| username    | No       | Filter the data by username.                                                                     |
| clientId    | No       | Filter the data by client ID.                                                                    |
| startDate   | No       | Filter the data by start date in the format YYYY-mm-dd.                                          |
| endDate     | No       | Filter the data by end date in the format YYYY-mm-dd.                                            |

## Response

The API returns a JSON response with the following fields:

| Field     | Type     | Description                                                                                                          |
| --------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| code      | Integer  | HTTP response code.                                                                                                  |
| message   | String   | Response message.                                                                                                    |
| data      | Array    | An array of time data objects.                                                                                        |

Each time data object contains the following fields:

| Field     | Type     | Description                                                                                                          |
| --------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| user      | Object   | User object containing user information.                                                                             |
| date      | String   | Date in the format YYYY-mm-dd.                                                                                        |
| hours     | Float    | Number of hours.                                                                                                     |
| billable  | Boolean  | Whether the hours are billable or not.                                                                               |
| status    | String   | Status of the timesheet.                                                                                             |
| issue     | Object   | Issue object containing issue information.                                                                           |
| project   | Object   | Project object containing project information.                                                                       |
| client    | Object   | Client object containing client information.                                                                         |

## Error Codes

The API may return the following error codes:

| Code      | Message                                                                                               |
| --------- | ----------------------------------------------------------------------------------------------------- |
| 200       | OK                                                                                                    |
| 400       | Dates must be in format YYYY-mm-dd.                                                                    |
| 404       | User not found or no data found matching the request.                                                 |

## Example Usage

### Request

```
GET /api/v1/data/time?username=johndoe&startDate=2022-01-01&endDate=2022-01-31 HTTP/1.1
Host: example.com
```

### Response

```
{
    "code": 200,
    "message": "OK",
    "data": [
        {
            "user": {
                "username": "johndoe",
                "first_name": "John",
                "last_name": "Doe",
                "email": "johndoe@example.com",
                "phone": "+1 123-456-7890",
                "employment_start": "2021-01-01",
                "department": "IT",
                "role": "employee"
            },
            "date": "2022-01-01",
            "hours": 8,
            "billable": true,
            "status": "Submitted",
            "issue": {
                "id": 123,
                "name": "Issue 1",
                "monday_id": "1234567890"
            },
            "project": {
                "id": 456,
                "name": "Project 1"
            },
            "client": {
                "id": 789,
                "name": "Client 1",
                "code_word": "CLIENT1",
                "website": "https://example.com/client1",
                "monday_board_id": "0987654321",
                "customer_id": "abc123"
            }
        },
        {
            "user": {
                "username": "johndoe",
                "first_name": "John",
                "last_name": "Doe",
                "email": "johndoe@example.com",
                "phone": "+1 123-456-7890",
                "employment_start": "2021-01-01",
                "department": "IT",
                "role": "employee"
            },
            "date": "2022-01-15",
            "hours": 8,
            "billable": false,
            "status": "Approved",
            "issue": {
                "id": 456,
                "name": "Issue 2",
                "monday_id": "0987654321"
            },
            "project": {
                "id": 789,
                "name": "Project 2"
            },
            "client": {
                "id": 123,
                "name": "Client 2",
                "code_word": "CLIENT2",
                "website": "https://example.com/client2",
                "monday_board_id": null,
                "customer_id": null
            }
        }
    ]
}
```
