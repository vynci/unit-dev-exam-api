## Unit Dev Exam (Backend API)

### Dev quick start

1. npm install
2. npm start

## API sample requests (Cloud demo)

### List sales summary by franchisee

**GET** _https://unitdevapi.herokuapp.com/sales/franchisee/:franchiseeId_

Sample Resp:

```
{
    "data": [
        {
            "_id": "May 01, 2022",
            "totalSales": 8546.130000000001,
            "totalFranchiseeFee": 776.922
        },
        {
            "_id": "February 17, 2022",
            "totalSales": 11014.82,
            "totalFranchiseeFee": 1001.349
        },
        {
            "_id": "May 06, 2022",
            "totalSales": 31516.25,
            "totalFranchiseeFee": 2865.1150000000002
        }
        ...
    ]
}
```

### Get sales summary by location on a specific day

**GET** _https://unitdevapi.herokuapp.com/sales/location/:locationId?date=<date>_

Sample Resp:

```
{
    "data": [
        {
            "_id": "January 01, 2022",
            "totalSales": 18307.33,
            "totalFranchiseeFee": 1664.304
        }
    ]
}
```

### List sales summary by location

**GET** _https://unitdevapi.herokuapp.com/sales/location/:locationId_

Sample Resp:

```
{
    "data": [
        {
            "_id": "March 07, 2022",
            "totalSales": 225.64,
            "totalFranchiseeFee": 20.513
        },
        {
            "_id": "May 27, 2022",
            "totalSales": 8581.02,
            "totalFranchiseeFee": 780.094
        },
        {
            "_id": "January 12, 2022",
            "totalSales": 1903.19,
            "totalFranchiseeFee": 173.01800000000003
        },
        ...
    ]
}
```

### Get sales summary by location on a specific day

**GET** _https://unitdevapi.herokuapp.com/sales/location/:locationId?date=<date>_

Sample Resp:

```
{
    "data": [
        {
            "_id": "January 03, 2022",
            "totalSales": 16652.29,
            "totalFranchiseeFee": 1513.8480000000002
        }
    ]
}
```
