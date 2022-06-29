## Unit Dev Exam (Backend API)

### Dev quick start

1. npm install
2. npm start

## API sample requests (Cloud demo)

### Get sales summary on a specific day

**GET** _https://unitdevapi.herokuapp.com/sales?date={date}&franchisee={id_list}&location={id_list}_

Sample Req:

**GET** _https://unitdevapi.herokuapp.com/sales?franchisee=62b04a71d808a04afe83d49e,62b04a71d808a04afe83d4a2,62b04a71d808a04afe83d4a7&location=62b04a71d808a04afe83d49f,62b04a71d808a04afe83d4a0,62b04a71d808a04afe83d4a1&date=January 11, 2022_

Sample Resp:

```
{
  "data": [
    {
      "_id": "January 11, 2022",
      "totalSales": 15651.42,
      "totalFranchiseeFee": 1422.8570000000002
    }
  ]
}
```
