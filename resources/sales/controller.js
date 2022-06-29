const Sales = require("./model");

exports.getByResource = (req, res) => {
  let condition = {};

  if (req.query.date) condition['date'] = req.query.date;
  if (req.query.location) condition['location_id'] = {'$in' : req.query.location.split(',')};
  if (req.query.franchisee) condition['franchisee_id'] = {'$in' : req.query.franchisee.split(',')};

  console.log('condition', condition);

  const expression = [
    { $match: condition },
    { $group: {_id: "$date", totalSales: { $sum: "$total" }, totalFranchiseeFee: { $sum: { $multiply: [ "$subtotal", 0.1 ] } } } }
  ];

  Sales.aggregate(expression)
    .then((data) => {
      if (!data.length) {
        return res.status(404).send({
          message: `Sales not found with the given request`,
        });
      }
      res.send({data});
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error retrieving Sales with the given request`,
      });
    });
};

