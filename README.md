## Unit Dev Exam (Backend API)

1. npm install
2. npm start

## API Doc

### List total sales by location

**GET** _~/sales/location/:locationId_

Sample Resp:

```
{
    "data": [
        {
            "_id": "January 03, 2022",
            "total": 2908.35
        },
        {
            "_id": "January 31, 2022",
            "total": 3872.53
        },
        {
            "_id": "April 26, 2022",
            "total": 8174.54
        }
        ...
    ]
}
```

### Get total sales by location on a specific day

**GET** _~/sales/location/:locationId?date=<date>_

Sample Resp:

```
{
    "data": [
        {
            "_id": "January 03, 2022",
            "total": 2908.35
        }
    ]
}
```
