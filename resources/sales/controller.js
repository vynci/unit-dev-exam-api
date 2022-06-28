const Sales = require("./model");

exports.getByResource = (req, res) => {
  const resourceTypeId = resourceType[req.params.resource];

  let condition = {};
  condition[resourceTypeId] = req.params.id;

  if (req.query.date) condition['date'] = req.query.date;

  const expression = [
    { $match: condition },
    { $group: {_id: "$date", totalSales: { $sum: "$total" }, totalFranchiseeFee: { $sum: { $multiply: [ "$subtotal", 0.1 ] } } } }
  ];

  Sales.aggregate(expression)
    .then((data) => {
      if (!data.length) {
        return res.status(404).send({
          message: `Sales not found with ${resourceTypeId} : ${req.params.id}`,
        });
      }
      res.send({data});
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error retrieving Sales with ${resourceTypeId} : ${req.params.id}`,
      });
    });
};

const resourceType = {
  franchisee : 'franchisee_id',
  location : 'location_id'
}

