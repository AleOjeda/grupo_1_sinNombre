const products = require('../database/products');
const categories = require('../database/categories');
const db = require('../database/models');


module.exports = {
    orderDetails: (req,res) => {
        let orderNumber = req.params.id;
        console.log(orderNumber);
        db.Orders.findOne({
            where: {
                tracking_number : orderNumber
            },
            include: [{association: "order_products", include:[{association:"product"}]},
                    /* {association:"product"} */
                ],
        })
    .then ((order) =>{
        //console.log(resultados);
//        console.log(order);
//        console.log(order.order_products[2]);
        return res.render('orders/orderDetails', {order, categories}); 
     })

    },
}
